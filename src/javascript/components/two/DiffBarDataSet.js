import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'
import { getMetricType } from '../../models/MetricType.js'

import { shouldRound, round } from '../../functions/util.js'

export function createDataSetFromBenchmarks(benchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {

    const shouldRoundScores = shouldRound(benchmarkCollection.benchmarkResults, metricExtractor);
    return benchmarkCollection.benchmarkResults.map((benchmarkResult, i) => {
        let benchmarkKey = benchmarkResult.name;
        if (benchmarkResult.params) {
            benchmarkKey += ' [' + benchmarkResult.params.map(param => param[0] + '=' + param[1]).join(':') + ']';
        }

        const firstRunBenchmark = benchmarkResult.benchmarks[0];
        const secondRunBenchmark = benchmarkResult.benchmarks[1];

        if (firstRunBenchmark && secondRunBenchmark && metricExtractor.hasMetric(firstRunBenchmark) && metricExtractor.hasMetric(secondRunBenchmark)) {
            const scoreUnit = metricExtractor.extractScoreUnit(firstRunBenchmark);
            const metricType = getMetricType(metricExtractor.extractType(firstRunBenchmark));
            const score1stRun = round(metricExtractor.extractScore(firstRunBenchmark), shouldRoundScores);
            const score2ndRun = round(metricExtractor.extractScore(secondRunBenchmark), shouldRoundScores);
            const scoreError1stRun = round(metricExtractor.extractScoreError(firstRunBenchmark), shouldRoundScores);
            const scoreError2ndRun = round(metricExtractor.extractScoreError(secondRunBenchmark), shouldRoundScores);

            let scoreDiff;
            if (metricType && metricType.increaseIsGood) {
                // i.e. for throughput decrease is an increase, its worse basically
                scoreDiff = round((score2ndRun - score1stRun) / score1stRun * 100, shouldRoundScores);
            } else {
                scoreDiff = round((score1stRun - score2ndRun) / score2ndRun * 100, shouldRoundScores);
            }

            return {
                index: i,
                name: benchmarkKey,
                scoreDiff: scoreDiff,
                scoreUnit: scoreUnit,
                score1stRun: score1stRun,
                score2ndRun: score2ndRun,
                scoreError1stRun: scoreError1stRun,
                scoreError2ndRun: scoreError2ndRun,
                roundScores: shouldRoundScores
            }
        }
    }).filter((element) => element !== undefined);
}