import BenchmarkSelection from 'models/BenchmarkSelection.js';
import { parseBenchmarkBundles } from 'functions/parse.js'

// Helper that extracts state information into more easy to consume form
export default class StateSelector {

    constructor(state) {
        this.benchmarkRuns = state.benchmarkRuns;
        this.viewSelection = state.viewSelection;
    }

    // Return the BenchmarkSelection based on the selected runs
    benchmarkSelection() {
        const selectedBenchmarkRuns = this.benchmarkRuns.filter((run, pos) => this.viewSelection.runSelection[pos]);
        return new BenchmarkSelection({
            runNames: selectedBenchmarkRuns.map(run => run.name),
            benchmarkBundles: parseBenchmarkBundles(selectedBenchmarkRuns)
        });
    }
}