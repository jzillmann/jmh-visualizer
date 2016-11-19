import BenchmarkRun from '../models/BenchmarkRun.jsx';

// Extracts the benchmarks class name
export function parseClassName(benchmark:Object) {
    return benchmark.benchmark.split('.').reverse()[1];
}

// Extracts the benchmarks method name
export function parseMethodName(benchmark:Object) {
    const splitted = benchmark.benchmark.split('.');
    return splitted[splitted.length - 1];
}

/*
* Deconstructs the given benchmark runs into following structure:
*     Map<className, Map<methodName, benchmarks[]>>
* Where the benchmarks array has a null if the particular run didn't included the benchmark.
*/
export function parseMultiRunBenchmarkMap(benchmarkRuns:BenchmarkRun[]) {
    const classToBenchmarksMap = new Map();
    benchmarkRuns.forEach((benchmarkRun, benchmarkRunIndex) => {
        benchmarkRun.benchmarks.forEach((benchmark) => {
            const className = parseClassName(benchmark)
            let methodMap:Map = classToBenchmarksMap.get(className);
            if (methodMap === undefined) {
                methodMap = new Map();
                classToBenchmarksMap.set(className, methodMap)
            }
            const methodName = parseMethodName(benchmark);
            let runArray = methodMap.get(methodName)
            if (runArray === undefined) {
                runArray = [];
                methodMap.set(methodName, runArray)
            }
            //fill up what didn't exist before
            while (runArray.length < benchmarkRunIndex) {
                runArray.push(null)
            }
            runArray.push(benchmark)
        })
        // fill up what didn't exist in this run
        for ( let methodMap of classToBenchmarksMap.values() ) {
            for ( let runArray of methodMap.values() ) {
                if (runArray.length < benchmarkRunIndex + 1) {
                    runArray.push(null);
                }
            }
        }
    });
    return classToBenchmarksMap;
}