import BenchmarkRun from '../models/BenchmarkRun.js';
import BenchmarkCollection from '../models/BenchmarkCollection.js';
import BenchmarkResults from '../models/BenchmarkResults.js';

//TODO cleanup

// Extracts the benchmarks class name
export function parseClassName(benchmark:Object) {
    return parseClassNameFromFullName(benchmark.benchmark);
}

export function parseFullClassName(benchmark:Object) {
    const nameParts = benchmark.benchmark.split('.');
    nameParts.pop(); //remove the method part
    return nameParts.join('.');
}

function parseClassNameFromFullName(fullName:String) {
    return fullName.split('.').reverse()[0];
}

// Extracts the benchmarks method name
export function parseMethodName(benchmark:Object) {
    const splitted = benchmark.benchmark.split('.');
    return splitted[splitted.length - 1];
}

// Extracts the benchmarks method name
export function parseBenchmarkName(benchmark:Object) {
    var benchmarkName = parseMethodName(benchmark);
    if (benchmark.params) {
        const keys = Object.keys(benchmark.params);
        keys.forEach(key => {
            benchmarkName += ' ' + key + '=' + benchmark.params[key];
        });
    }
    return benchmarkName;
}

export function getUniqueParamValues(benchmarks, paramName) {
    const paramValues = new Set();
    benchmarks.forEach(benchmark => {
        paramValues.add(benchmark.params[paramName]);
    });
    return Array.from(paramValues);
}


export function getUniqueBenchmarkModes(benchmarkCollection:BenchmarkCollection, runSelection, metricExtractor) {
    const modes = new Set();
    benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
        modes.add(metricExtractor.extractType(benchmark));
    });
    return Array.from(modes);
}

export function getUniqueBenchmarkModesAccrossCollections(benchmarkCollections:BenchmarkCollection[], runSelection, metricExtractor) {
    const modes = new Set();
    benchmarkCollections.forEach(benchmarkCollection => benchmarkCollection.benchmarks(runSelection).forEach(benchmark => {
        modes.add(metricExtractor.extractType(benchmark));
    }));
    return Array.from(modes);
}

/*
 * 
 */
export function parseBenchmarkCollections(benchmarkRuns:BenchmarkRun[]) {
    const classToBenchmarksMap = parseMultiRunBenchmarkMap(benchmarkRuns);
    const benchmarkCollections = [];
    for ( let [fullName, benchmarkRunMap] of classToBenchmarksMap ) {
        const benchmarkResults = [];
        const methodNames = new Set();
        for ( let [key, benchmarks] of benchmarkRunMap ) {
            const keyParts = key.split(' ');
            const methodName = keyParts.shift();
            const params = keyParts.length > 0 ? keyParts.map(paramString => paramString.split('=')) : null;
            benchmarkResults.push(new BenchmarkResults({
                name: methodName,
                params: params,
                benchmarks: benchmarks
            }));
            methodNames.add(methodName);
        }
        benchmarkCollections.push(new BenchmarkCollection({
            key: fullName,
            name: parseClassNameFromFullName(fullName),
            benchmarkResults: benchmarkResults,
            methodNames: [...methodNames]
        }));
    }
    return benchmarkCollections;
}

/*
 * Deconstructs the given benchmark runs into following structure:
 *     Map<className, Map<methodName, benchmarks[]>>
 * Where the benchmarks array has a null if the particular run didn't included the benchmark.
 */
function parseMultiRunBenchmarkMap(benchmarkRuns:BenchmarkRun[]) {
    const classToBenchmarksMap = new Map();
    benchmarkRuns.forEach((benchmarkRun, benchmarkRunIndex) => {
        benchmarkRun.benchmarks.forEach((benchmark) => {
            const fullName = parseFullClassName(benchmark);
            let methodMap:Map = classToBenchmarksMap.get(fullName);
            if (methodMap === undefined) {
                methodMap = new Map();
                classToBenchmarksMap.set(fullName, methodMap)
            }
            const methodName = parseBenchmarkName(benchmark);
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
