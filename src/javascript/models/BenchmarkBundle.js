import { flatten } from 'functions/util.js'

// Holds a collection of benchmarks, typically those from a benchmark class
export default class BenchmarkBundle {

    constructor(options) {
        this.key = options.key; // com.company.ClassA
        this.name = options.name; //ClassA
        this.methodNames = options.methodNames; //unique method names (can occur multiple times because of params)
        this.benchmarkMethods = options.benchmarkMethods; //BenchmarkMethod(name, benchmarks[])[]
    }


    //Returns all non-null benchmarks for all runs
    allBenchmarks() {
        return flatten(this.benchmarkMethods.map(method => method.benchmarks.filter(benchmark => benchmark)));
    }

    //Returns all non-null benchmarks for a given runs
    benchmarksFromRun(runIndex) {
        return flatten(this.benchmarkMethods.map(method => method.benchmarks[runIndex]).filter(benchmark => benchmark));
    }

}
