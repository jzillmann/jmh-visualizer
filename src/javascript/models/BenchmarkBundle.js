import RunSelection from 'models/RunSelection.js'

import { flatten } from 'functions/util.js'

// Holds a collection of benchmarks, typically those from a benchmark class
export default class BenchmarkBundle {

    constructor(options) {
        this.key = options.key; // com.company.ClassA
        this.name = options.name; //ClassA
        this.methodNames = options.methodNames; //unique method names (can occur multiple times because of params)
        this.benchmarkMethods = options.benchmarkMethods; //BenchmarkMethod(name, benchmarks[])[]
    }

    //Returns all non-null benchmarks for all runs or selected runs based on the given runSelection
    benchmarks(runSelection:RunSelection) {
        return flatten(this.benchmarkMethods.map(result => result.selectBenchmarks(runSelection)));
    }

}
