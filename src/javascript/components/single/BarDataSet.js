
// A dataset for a BarChart
export default class BarDataSet {
    constructor(options) {
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
import { getMetricType } from 'models/MetricType.js'

// The datasets will differ in case the benchmark-class uses params or not:
// 0 - no param => standard
// 1 - one param, single method => convert to (0)
// 2 - one param, multi methods => Bar per param Value
// 3 - 2 params, single methods => convert to (2)
// 4 - 2+ params, multi methods => combine params & convert to (2)
// 5 - 3+ params, single methods => combine params & convert to (0)
export function createDataSetFromBenchmarks(benchmarkBundle, metricExtractor, sort) {
    const benchmarkMethods = benchmarkBundle.benchmarkMethods;
    const methodCount = benchmarkBundle.methodNames.length;
    const metricType = metricExtractor.extractType(benchmarkMethods[0].benchmarks[0]);
    const params = benchmarkMethods[0].params; //TODO get from collection as well ?
    const scoreUnit = metricExtractor.hasMetric(benchmarkMethods[0].benchmarks[0]) ? metricExtractor.extractScoreUnit(benchmarkMethods[0].benchmarks[0]) : '';

    if (!params) {
        //case 0
        return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => method.name, () => `${metricType} ${scoreUnit}`, []);
    } else { // all other cases
        const paramNames = params.map(param => param[0]);
        if (paramNames.length == 1) {
            if (methodCount == 1) {
                // case 1
                return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => `${method.params[0][0]} =  ${method.params[0][1]}`, () => `${metricType} ${scoreUnit}`, []);
            } else {
                // case 2
                return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => method.name, (method) => {
                  // Kind of a hack.
                  // The tests of a class aren't homogenous but the code is build on that assumption.
                  // While this prevents an inital error, it might lead to a break down later down the road.
                  // The sane option would probably be to distribute the benchmark methods to in different bundles (and have different charts)
                  if (!method.params) {
                    return "";
                  }
                  return method.params[0][1];
                }, paramNames);
            }
        } else if (paramNames.length == 2 && methodCount == 1) {
            // case 3
            return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => `${method.params[0][0]} = ${method.params[0][1]}`, (method) => method.params[1][1], [paramNames[1]]);
        } else {
            if (methodCount > 1) {
                // case 4
                return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => method.name, (method) => method.params.map(param => param[1]).join(':'), paramNames);
            } else {
                // case 5
                const barName = paramNames.join(':');
                return createBarDataSet(benchmarkMethods, metricExtractor, sort, (method) => method.params.map(param => param[1]).join(':'), () => barName, []);
            }
        }
    }
}


//Each benchmark can have multiple bar's attached
function createBarDataSet(benchmarkMethods, metricExtractor, sort, groupFunction, barGroupFunction, paramNames) {
    var dataMax = 0;
    var scoreUnit;
    const shouldRoundScores = shouldRound(benchmarkMethods, metricExtractor);
    const groupedBenchmarks = groupBy(benchmarkMethods, groupFunction);
    const barGroups = new Set();
    let metricType;
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
                const minMax = metricExtractor.extractMinMax(benchmark).map(minOrMax => round(minOrMax, shouldRoundScores));
                const scoreError = round(metricExtractor.extractScoreError(benchmark), shouldRoundScores);
                let errorBarInterval = 0
                if (!isNaN(scoreError)) {
                    errorBarInterval = [score - minMax[0], minMax[1] - score];
                }
                scoreUnit = metricExtractor.extractScoreUnit(benchmark);
                dataMax = metricExtractor.extractMinMax(benchmark)[1];

                const barGroup = barGroupFunction(benchmarkMethod);
                barGroups.add(barGroup);
                dataObject[barGroup] = score;
                dataObject[barGroup + 'MinMax'] = minMax;
                dataObject[barGroup + 'Error'] = scoreError;
                dataObject[barGroup + 'ErrorBarInterval'] = errorBarInterval;
                if (metricExtractor.hasHistogram(benchmark)) {
                    dataObject[barGroup + 'SubScoresHistogram'] = metricExtractor.extractRawDataHistogram(benchmark);
                } else {
                    dataObject[barGroup + 'SubScores'] = metricExtractor.extractRawData(benchmark);
                }
                dataObject[barGroup + 'Label'] = formatNumber(score, shouldRoundScores) + ' ' + scoreUnit;

                if (!metricType) {
                    metricType = getMetricType(metricExtractor.extractType(benchmark));
                }
            }
        });

        return dataObject;
    });

    if (sort && metricType && barGroups.size == 1) {
        const scoreKey = barGroups.values().next().value;
        data.sort((a, b) => {
            if (metricType.increaseIsGood) {
                return b[scoreKey] - a[scoreKey];
            } else {
                return a[scoreKey] - b[scoreKey];
            }
        });
    }

    return new BarDataSet({
        metricKey: metricExtractor.metricKey,
        scoreUnit: scoreUnit,
        barGroups: [...barGroups],
        data: data,
        dataMax: dataMax,
        roundScores: shouldRoundScores,
        paramNames: paramNames
    });
}