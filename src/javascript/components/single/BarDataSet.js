
// A dataset for a BarChart
export default class BarDataSet {
    constructor(options) {
        this.id = options.id;
        this.runName = options.runName;
        this.metricKey = options.metricKey;
        this.scoreUnit = options.scoreUnit;
        this.barGroups = options.barGroups;
        this.data = options.data;
        this.dataMax = options.dataMax;
        this.roundScores = options.roundScores;
        this.paramNames = options.paramNames;
    }
}

import { groupBy, shouldRound, round, formatNumber } from 'functions/util.js'

// The datasets will differ in case the benchmark-class uses params or not:
// 0 - no param => standard
// 1 - one param, single method => convert to (0)
// 2 - one param, multi methods => Bar per param Value
// 3 - 2 params, single methods => convert to (2)
// 4 - 2+ params, multi methods => combine params & convert to (2)
// 5 - 3+ params, single methods => combine params & convert to (0)
export function createDataSetFromBenchmarks(runName, benchmarkBundle, metricExtractor) {
    const id = `${runName}:${benchmarkBundle.key}#${metricExtractor.metricKey}`;
    const benchmarkMethods = benchmarkBundle.benchmarkMethods;
    const methodCount = benchmarkBundle.methodNames.length;
    const metricType = metricExtractor.extractType(benchmarkMethods[0].benchmarks[0]);
    const params = benchmarkMethods[0].params; //TODO get from collection as well ?
    const scoreUnit = metricExtractor.hasMetric(benchmarkMethods[0].benchmarks[0]) ? metricExtractor.extractScoreUnit(benchmarkMethods[0].benchmarks[0]) : '';

    if (!params) {
        //case 0
        return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => method.name, () => `${metricType} ${scoreUnit}`, []);
    } else { // all other cases
        const paramNames = params.map(param => param[0]);
        if (paramNames.length == 1) {
            if (methodCount == 1) {
                // case 1
                return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => `${method.params[0][0]} =  ${method.params[0][1]}`, () => `${metricType} ${scoreUnit}`, []);
            } else {
                // case 2
                return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => method.name, (method) => method.params[0][1], paramNames);
            }
        } else if (paramNames.length == 2 && methodCount == 1) {
            // case 3
            return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => `${method.params[0][0]} = ${method.params[0][1]}`, (method) => method.params[1][1], [paramNames[1]]);
        } else {
            if (methodCount > 1) {
                // case 4
                return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => method.name, (method) => method.params.map(param => param[1]).join(':'), paramNames);
            } else {
                // case 5
                const barName = paramNames.join(':');
                return createBarDataSet(id, benchmarkMethods, metricExtractor, (method) => method.params.map(param => param[1]).join(':'), () => barName, []);
            }
        }
    }
}


//Each benchmark can have multiple bar's attached
function createBarDataSet(id, benchmarkMethods, metricExtractor, groupFunction, barGroupFunction, paramNames) {
    var dataMax = 0;
    var scoreUnit;
    const shouldRoundScores = shouldRound(benchmarkMethods, metricExtractor);
    const groupedBenchmarks = groupBy(benchmarkMethods, groupFunction);
    const barGroups = new Set();
    const data = groupedBenchmarks.map((benchmarkGroup, i) => {
        const benchmarkName = benchmarkGroup.key;
        const dataObject = {
            index: i,
            name: benchmarkName,
        };
        benchmarkGroup.values.forEach(benchmarkMethod => {
            const [benchmark] = benchmarkMethod.benchmarks;
            if (metricExtractor.hasMetric(benchmark)) {
                const score = round(metricExtractor.extractScore(benchmark), shouldRoundScores);
                const scoreConfidence = metricExtractor.extractScoreConfidence(benchmark).map(scoreConf => round(scoreConf, shouldRoundScores));
                const scoreError = round(metricExtractor.extractScoreError(benchmark), shouldRoundScores);
                let errorBarInterval = 0
                if (!isNaN(scoreError)) {
                    errorBarInterval = [score - scoreConfidence[0], scoreConfidence[1] - score];
                }
                scoreUnit = metricExtractor.extractScoreUnit(benchmark);
                dataMax = Math.max(dataMax, score);
                dataMax = Math.max(dataMax, scoreConfidence[1]);
                dataMax = Math.max(dataMax, 1);

                const barGroup = barGroupFunction(benchmarkMethod);
                barGroups.add(barGroup);
                dataObject[barGroup] = score;
                dataObject[barGroup + 'Confidence'] = scoreConfidence;
                dataObject[barGroup + 'Error'] = scoreError;
                dataObject[barGroup + 'ErrorBarInterval'] = errorBarInterval;
                if (benchmark.mode === 'sample') {
                    dataObject[barGroup + 'SubScoresHistogram'] = metricExtractor.extractRawDataHistogram(benchmark);
                } else {
                    dataObject[barGroup + 'SubScores'] = metricExtractor.extractRawData(benchmark);
                }
                dataObject[barGroup + 'Label'] = formatNumber(score, shouldRoundScores) + ' ' + scoreUnit;
            }
        });
        return dataObject;
    });

    return new BarDataSet({
        id: id,
        metricKey: metricExtractor.metricKey,
        scoreUnit: scoreUnit,
        barGroups: [...barGroups],
        data: data,
        dataMax: dataMax,
        roundScores: shouldRoundScores,
        paramNames: paramNames
    });
}