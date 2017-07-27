
// A dataset for a BarChart
export default class BarDataSet {
    constructor(options) {
        this.benchmarkCollectionKey = options.benchmarkCollectionKey;
        this.runName = options.runName;
        this.metricKey = options.metricKey;
        this.scoreUnit = options.scoreUnit;
        this.barGroups = options.barGroups;
        this.data = options.data;
        this.dataMax = options.dataMax;
    }
}

import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'
import { groupBy } from '../../functions/util.js'

// The datasets will differ in case the benchmark-class uses params or not:
// 0 - no param => standard
// 1 - one param, single method => convert to (0)
// 2 - one param, multi methods => Bar per param Value
// 3 - 2 params, single methods => convert to (2)
// 4 - 2+ params, multi methods => combine params & convert to (2)
// 5 - 3+ params, single methods => combine params & convert to (0)
export function createDataSetFromBenchmarks(benchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {
    const benchmarkResults = benchmarkCollection.benchmarkResults;
    const methodCount = benchmarkCollection.methodNames.length;
    const params = benchmarkResults[0].params; //TODO get from collection as well ?
    const metricType = metricExtractor.extractType(benchmarkResults[0].benchmarks[0]);
    const scoreUnit = metricExtractor.hasMetric(benchmarkResults[0].benchmarks[0]) ? metricExtractor.extractScoreUnit(benchmarkResults[0].benchmarks[0]) : '';

    if (!params) {
        //case 0
        return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.name, () => `${metricType} ${scoreUnit}`);
    } else { // all other cases
        const paramNames = params.map(param => param[0]);
        if (paramNames.length == 1) {
            if (methodCount == 1) {
                // case 1
                return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.params[0][0] + '=' + result.params[0][1], () => `${metricType} ${scoreUnit}`);
            } else {
                // case 2
                return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.name, (result) => result.params[0][1]);
            }
        } else if (paramNames.length == 2 && methodCount == 1) {
            // case 3
            return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.params[0][1], (result) => result.params[1][1]);
        } else {
            if (methodCount > 1) {
                // case 4
                return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.name, (result) => result.params.map(param => param[1]).join(':'));
            } else {
                // case 5
                const barName = paramNames.join(':');
                return createBarDataSet(benchmarkCollection.key, benchmarkResults, runSelection, metricExtractor, (result) => result.params.map(param => param[1]).join(':'), () => barName);
            }
        }
    }
}


//Each benchmark can have multiple bar's attached
function createBarDataSet(benchmarkCollectionKey, benchmarkResults, runSelection, metricExtractor, groupFunction, barGroupFunction) {
    var dataMax = 0;
    var scoreUnit;
    const groupedBenchmarks = groupBy(benchmarkResults, groupFunction);
    const barGroups = new Set();
    const data = groupedBenchmarks.map((benchmarkGroup, i) => {
        const benchmarkName = benchmarkGroup.key;
        const dataObject = {
            index: i,
            name: benchmarkName,
        };
        benchmarkGroup.values.forEach(benchmarkResult => {
            const [benchmark] = benchmarkResult.selectBenchmarks(runSelection);
            if (metricExtractor.hasMetric(benchmark)) {
                const score = Math.round(metricExtractor.extractScore(benchmark));
                const scoreConfidence = metricExtractor.extractScoreConfidence(benchmark).map(scoreConf => Math.round(scoreConf));
                const scoreError = Math.round(metricExtractor.extractScoreError(benchmark));
                let errorBarInterval = 0
                if (!isNaN(scoreError)) {
                    errorBarInterval = [score - scoreConfidence[0], scoreConfidence[1] - score];
                }
                scoreUnit = metricExtractor.extractScoreUnit(benchmark);
                dataMax = Math.max(dataMax, score);
                dataMax = Math.max(dataMax, scoreConfidence[1]);

                const barGroup = barGroupFunction(benchmarkResult);
                barGroups.add(barGroup);
                dataObject[barGroup] = score;
                dataObject[barGroup + 'Confidence'] = scoreConfidence;
                dataObject[barGroup + 'Error'] = scoreError;
                dataObject[barGroup + 'ErrorBarInterval'] = errorBarInterval;
                dataObject[barGroup + 'SubScores'] = metricExtractor.extractRawData(benchmark);
            }
        });
        return dataObject;
    });

    return new BarDataSet({
        benchmarkCollectionKey: benchmarkCollectionKey,
        runName: runSelection.names[0],
        metricKey: metricExtractor.metricKey,
        scoreUnit: scoreUnit,
        barGroups: [...barGroups],
        data: data,
        dataMax: dataMax
    });
}