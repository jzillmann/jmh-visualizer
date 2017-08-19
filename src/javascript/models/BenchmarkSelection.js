// Selection of BenchmarkRuns with parsed BenchmarkBundles
export default class BenchmarkSelection {

    constructor(options) {
        this.runNames = options.runNames; //[] - names of the selected Benchmark runs
        this.benchmarkBundles = options.benchmarkBundles // BenchmarkBundle[] with the benchmarks from the selected runs
    }
}