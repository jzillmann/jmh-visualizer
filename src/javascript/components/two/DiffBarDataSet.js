import RunSelection from '../../models/RunSelection.js'
import MetricExtractor from '../../models/MetricExtractor.js'
import { getMetricType } from '../../models/MetricType.js'

export function createDataSetFromBenchmarks(benchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) {

    return benchmarkCollection.benchmarkResults.map((benchmarkResults, i) => {
        let benchmarkKey = benchmarkResults.name;
        if (benchmarkResults.params) {
            benchmarkKey += ' [' + benchmarkResults.params.map(param => param[0] + '=' + param[1]).join(':') + ']';
        }

        const firstRunBenchmark = benchmarkResults.benchmarks[0];
        const secondRunBenchmark = benchmarkResults.benchmarks[1];

        if (firstRunBenchmark && secondRunBenchmark && metricExtractor.hasMetric(firstRunBenchmark) && metricExtractor.hasMetric(secondRunBenchmark)) {
            const scoreUnit = metricExtractor.extractScoreUnit(firstRunBenchmark);
            const metricType = getMetricType(metricExtractor.extractType(firstRunBenchmark));
            const score1stRun = Math.round(metricExtractor.extractScore(firstRunBenchmark));
            const score2ndRun = Math.round(metricExtractor.extractScore(secondRunBenchmark));
            const scoreError1stRun = Math.round(metricExtractor.extractScoreError(firstRunBenchmark));
            const scoreError2ndRun = Math.round(metricExtractor.extractScoreError(secondRunBenchmark));

            let scoreDiff;
            if (metricType && metricType.increaseIsGood) {
                // i.e. for throughput decrease is an increase, its worse basically
                scoreDiff = Math.round((score2ndRun - score1stRun) / score1stRun * 100);
            } else {
                scoreDiff = Math.round((score1stRun - score2ndRun) / score2ndRun * 100);
            }

            return {
                index: i,
                name: benchmarkKey,
                scoreDiff: scoreDiff,
                scoreUnit: scoreUnit,
                score1stRun: score1stRun,
                score2ndRun: score2ndRun,
                scoreError1stRun: scoreError1stRun,
                scoreError2ndRun: scoreError2ndRun
            }
        }
    }).filter((element) => element !== undefined);
}