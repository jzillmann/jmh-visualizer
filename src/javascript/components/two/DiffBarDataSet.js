import RunSelection from '../../models/RunSelection.js'
import DataExtractor from '../../models/DataExtractor.js'

export function createDataSetFromBenchmarks(benchmarkCollection, runSelection:RunSelection, dataExtractor:DataExtractor) {

    return benchmarkCollection.benchmarkResults.map((benchmarkResults, i) => {
        let benchmarkKey = benchmarkResults.name;
        if (benchmarkResults.params) {
            benchmarkKey += ' [' + benchmarkResults.params.map(param => param[0] + '=' + param[1]).join(':') + ']';
        }

        // maxMethodNameLength = Math.max(maxMethodNameLength, benchmarkKey.length);
        const firstRunBenchmark = benchmarkResults.benchmarks[0];
        const secondRunBenchmark = benchmarkResults.benchmarks[1];

        if (firstRunBenchmark && secondRunBenchmark) {
            const scoreUnit = dataExtractor.extractScoreUnit(firstRunBenchmark);
            const benchmarkMode = firstRunBenchmark.mode
            const score1stRun = Math.round(dataExtractor.extractScore(firstRunBenchmark));
            const score2ndRun = Math.round(dataExtractor.extractScore(secondRunBenchmark));
            const scoreError1stRun = Math.round(dataExtractor.extractScoreError(firstRunBenchmark));
            const scoreError2ndRun = Math.round(dataExtractor.extractScoreError(secondRunBenchmark));

            let scoreDiff;
            if (benchmarkMode !== "thrpt") {
                // except for throughput decrease is an increase
                scoreDiff = Math.round((score1stRun - score2ndRun) / score2ndRun * 100);
            } else {
                scoreDiff = Math.round((score2ndRun - score1stRun) / score1stRun * 100);
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