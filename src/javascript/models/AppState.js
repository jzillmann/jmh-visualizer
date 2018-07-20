import BenchmarkSelection from 'models/BenchmarkSelection.js';
import ViewSelection from 'models/ViewSelection.js';

import { parseBenchmarkBundles } from 'functions/parse.js'

// Holds the state of the Application
export default class AppState {

    constructor(options) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.selectedMetric = 'Score';
        this.benchmarkCategories = ['Benchmarks'];
        this.activeCategory = 'Benchmarks';
        this.viewSelection = new ViewSelection();

        //bind functions
    }

    // Upload original benchmarks
    uploadBenchmarkRuns(benchmarkRuns) {
        this.viewSelection.uploadedBenchmarks = true;
        this.initBenchmarkRuns(benchmarkRuns);
    }

    // Init original benchmarks
    initBenchmarkRuns(benchmarkRuns) {
        this.viewSelection.initBenchmarkRuns(benchmarkRuns.length);
        this.benchmarkRuns = benchmarkRuns;
        this.renderFunction(this);
    }


    selectMetric(metric) {
        this.selectedMetric = metric;
        this.renderFunction(this);
    }

    // Select bundle for detail view
    detailBenchmarkBundle(benchmarkBundleKey) {
        this.viewSelection.detailedBenchmarkBundle = benchmarkBundleKey;
        this.renderFunction(this);
    }

    // Unselect detail view bundle
    undetailBenchmarkBundle() {
        this.viewSelection.detailedBenchmarkBundle = null;
        this.renderFunction(this);
    }


    focusBundle(benchmarkBundleName) {
        this.viewSelection.focusBundle(benchmarkBundleName);
        this.renderFunction(this);
    }

    // Return the BenchmarkSelection based on the selected runs
    benchmarkSelection() {
        const selectedBenchmarkRuns = this.benchmarkRuns.filter((run, pos) => this.viewSelection.runSelection[pos]);
        return new BenchmarkSelection({
            runNames: selectedBenchmarkRuns.map(run => run.name),
            benchmarkBundles: parseBenchmarkBundles(selectedBenchmarkRuns)
        });
    }

    selectCategory(category) {
        this.activeCategory = category;
        this.viewSelection.focusedBundles.clear();
        this.renderFunction(this);
    }

}
