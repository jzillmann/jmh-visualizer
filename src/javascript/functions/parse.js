import BenchmarkRun from 'models/BenchmarkRun.js';
import BenchmarkBundle from 'models/BenchmarkBundle.js';
import BenchmarkMethod from 'models/BenchmarkMethod.js';

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


export function getUniqueBenchmarkModes(benchmarkBundle:BenchmarkBundle, runSelection, metricExtractor) {
    const modes = new Set();
    benchmarkBundle.benchmarks(runSelection).forEach(benchmark => {
        modes.add(metricExtractor.extractType(benchmark));
    });
    return Array.from(modes);
}

export function getUniqueBenchmarkModesAccrossBundles(benchmarkBundles:BenchmarkBundle[], runSelection, metricExtractor) {
    const modes = new Set();
    benchmarkBundles.forEach(benchmarkBundle => benchmarkBundle.benchmarks(runSelection).forEach(benchmark => {
        modes.add(metricExtractor.extractType(benchmark));
    }));
    return Array.from(modes);
}

/*
 * 
 */
export function parseBenchmarkBundles(benchmarkRuns:BenchmarkRun[]) {
    const classToBenchmarksMap = parseMultiRunBenchmarkMap(benchmarkRuns);
    const benchmarkBundles = [];
    for ( let [fullName, benchmarkRunMap] of classToBenchmarksMap ) {
        const benchmarkMethods = [];
        const methodNames = new Set();
        for ( let [key, benchmarks] of benchmarkRunMap ) {
            const keyParts = key.split(' ');
            const methodName = keyParts.shift();
            const params = keyParts.length > 0 ? keyParts.map(paramString => paramString.split('=')) : null;
            benchmarkMethods.push(new BenchmarkMethod({
                name: methodName,
                params: params,
                benchmarks: benchmarks
            }));
            methodNames.add(methodName);
        }
        benchmarkBundles.push(new BenchmarkBundle({
            key: fullName,
            name: parseClassNameFromFullName(fullName),
            benchmarkMethods: benchmarkMethods,
            methodNames: [...methodNames]
        }));
    }
    return benchmarkBundles;
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
