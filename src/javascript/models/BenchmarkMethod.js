// Has the original benchmark results from all runs for a benchmark method 
export default class BenchmarkMethod {

    constructor(options) {
        this.name = options.name; // method name (can occure multiple times with use of params)
        this.params = options.params; //[[key][value]...]
        this.benchmarks = options.benchmarks; // [{run1}, {run2}] original benchmark object per run
    }

}
