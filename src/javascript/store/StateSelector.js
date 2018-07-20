import BenchmarkSelection from 'models/BenchmarkSelection.js';
import { parseBenchmarkBundles } from 'functions/parse.js'

// Helper that extracts state information into more easy to consume form
export default class StateSelector {

    constructor(state) {
        this.benchmarkRuns = state.benchmarkRuns;
        this.runView = state.runView;
        this.runSelection = state.runSelection;
        this.focusedBundles = state.focusedBundles;
    }

    // Return the BenchmarkSelection based on the selected runs
    benchmarkSelection() {
        const selectedBenchmarkRuns = this.benchmarkRuns.filter((run, pos) => this.runSelection[pos]);
        return new BenchmarkSelection({
            runNames: selectedBenchmarkRuns.map(run => run.name),
            benchmarkBundles: parseBenchmarkBundles(selectedBenchmarkRuns)
        });
    }

    showSummaryView() {
        if (this.benchmarkRuns.length < 2) {
            return false;
        }
        if (this.runView !== 'Summary') {
            return false;
        }
        for (var runSelected of this.runSelection) {
            if (!runSelected) {
                return false;
            }
        }
        return true;
    }

    shouldFilterFocusedBenchmarks() {
        return this.focusedBundles.size > 0 && !this.showSummaryView();
    }
}