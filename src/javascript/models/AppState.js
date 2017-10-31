import BenchmarkRun from 'models/BenchmarkRun.js';
import BenchmarkSelection from 'models/BenchmarkSelection.js';
import ViewSelection from 'models/ViewSelection.js';

import { parseBenchmarkBundles } from 'functions/parse.js'

// Holds the state of the Application
export default class AppState {

    constructor(options, history) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.selectedMetric = 'Score';
        this.benchmarkCategories = ['Benchmarks'];
        this.activeCategory = 'Benchmarks';
        this.viewSelection = new ViewSelection();
        this.history = history;

        //bind functions
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);
        this.initBenchmarkRuns = this.initBenchmarkRuns.bind(this);
        this.selectBenchmarkRuns = this.selectBenchmarkRuns.bind(this);
        this.selectMetric = this.selectMetric.bind(this);
        this.detailBenchmarkBundle = this.detailBenchmarkBundle.bind(this);
        this.undetailBenchmarkBundle = this.undetailBenchmarkBundle.bind(this);
        this.focusBundle = this.focusBundle.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
        this.benchmarkSelection = this.benchmarkSelection.bind(this);
        this.goBack = this.goBack.bind(this);

        this.history.listen((location, action) => {
            if (action === 'POP') {
                this.undetailBenchmarkBundle();
            }
        });
    }

    // Upload original benchmarks
    uploadBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        this.viewSelection.uploadedBenchmarks = true;
        this.initBenchmarkRuns(benchmarkRuns);
    }

    // Init original benchmarks
    initBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        if (benchmarkRuns.length > 0) {
            this.viewSelection.hasBenchmarks = true;
        }
        this.benchmarkRuns = benchmarkRuns;
        this.viewSelection.runSelection = Array(benchmarkRuns.length).fill(true);
        this.renderFunction(this);
    }

    // expects array of boolean with length of total JMH runs + the runView ('Summary', 'Compare')
    selectBenchmarkRuns(runSelection, runView) {
        if (this.viewSelection.runView != runView || !arraysAreIdentical(this.viewSelection.runSelection, runSelection)) {
            this.viewSelection.runSelection = runSelection;
            this.viewSelection.runView = runView;
            this.renderFunction(this);
        }
    }

    goBack() {
        this.history.goBack();
    }

    selectMetric(metric) {
        this.selectedMetric = metric;
        this.renderFunction(this);
    }

    // Select bundle for detail view
    detailBenchmarkBundle(benchmarkBundleKey) {
        this.viewSelection.detailedBenchmarkBundle = benchmarkBundleKey;
        this.renderFunction(this);
        this.history.push('#details');
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

function arraysAreIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0, len = arr1.length; i < len; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
