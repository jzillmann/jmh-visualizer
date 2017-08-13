import RunSelection from 'models/RunSelection.js'

// Has the original benchmark results from all runs for a benchmark method 
export default class BenchmarkResults {

    constructor(options) {
        this.name = options.name; // method name (can occure multiple times with use of params)
        this.params = options.params; //[[key][value]...]
        this.benchmarks = options.benchmarks; // original benchmark object
    }

    selectBenchmarks(runSelection:RunSelection) {
        return runSelection.indices.filter(runId => this.benchmarks[runId]).map(nonNullRunId => this.benchmarks[nonNullRunId]);
    }

}
