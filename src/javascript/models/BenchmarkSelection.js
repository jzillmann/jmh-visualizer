import { parseBenchmarkBundles } from 'functions/parse.js'

// Selection of BenchmarkRuns with parsed BenchmarkBundles
export default class BenchmarkSelection {

    //TODO do benchmarkBundles parsing globally one time for all ?
    constructor(benchmarkRuns, runSelection) {
        const selectedBenchmarkRuns = benchmarkRuns.filter((run, pos) => runSelection[pos]);
        this.benchmarkRuns = benchmarkRuns;
        this.runSelection = runSelection;
        this.runNames = selectedBenchmarkRuns.map(run => run.name); //[] - names of the selected Benchmark runs
        this.benchmarkBundles = parseBenchmarkBundles(selectedBenchmarkRuns); // BenchmarkBundle[] with the benchmarks from the selected runs
    }

}