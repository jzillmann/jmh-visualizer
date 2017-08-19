import BenchmarkRun from 'models/BenchmarkRun.js';
import BenchmarkSelection from 'models/BenchmarkSelection.js';

import { parseBenchmarkBundles } from 'functions/parse.js'

// Holds the state of the Application
export default class AppState {

    constructor(options, history) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.benchmarkRunSelection = [];
        this.uploadedBenchmarks = false;
        this.selectedMetric = 'Score';
        this.detailedBundle = null; // bundleKey
        this.focusedBundles = new Set(); // [] bundleKeys
        this.history = history;

        //bind functions
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);
        this.initBenchmarkRuns = this.initBenchmarkRuns.bind(this);
        this.selectBenchmarkRuns = this.selectBenchmarkRuns.bind(this);
        this.selectMetric = this.selectMetric.bind(this);
        this.detailBenchmarkBundle = this.detailBenchmarkBundle.bind(this);
        this.undetailBenchmarkBundle = this.undetailBenchmarkBundle.bind(this);
        this.focusBundle = this.focusBundle.bind(this);
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
        this.uploadedBenchmarks = true;
        this.initBenchmarkRuns(benchmarkRuns);
    }

    // Init original benchmarks
    initBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        this.benchmarkRuns = benchmarkRuns;
        this.benchmarkRunSelection = Array(benchmarkRuns.length).fill(true);
        this.renderFunction(this);
    }

    // expects array of boolean with length of total JMH runs
    selectBenchmarkRuns(benchmarkRunSelection) {
        this.benchmarkRunSelection = benchmarkRunSelection;
        this.renderFunction(this);
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
        this.detailedBundle = benchmarkBundleKey;
        this.renderFunction(this);
        this.history.push('#details');
    }

    // Unselect detail view bundle
    undetailBenchmarkBundle() {
        this.detailedBundle = null;
        this.renderFunction(this);
    }


    focusBundle(benchmarkBundleName) {
        const alreadyFocused = this.focusedBundles.has(benchmarkBundleName);
        if (alreadyFocused) {
            this.focusedBundles.delete(benchmarkBundleName);
        } else {
            this.focusedBundles.add(benchmarkBundleName);
        }
        this.renderFunction(this);
    }

    // Return the BenchmarkSelection based on the selected runs
    benchmarkSelection() {
        const selectedBenchmarkRuns = this.benchmarkRuns.filter((run, pos) => this.benchmarkRunSelection[pos]);
        return new BenchmarkSelection({
            runNames: selectedBenchmarkRuns.map(run => run.name),
            benchmarkBundles: parseBenchmarkBundles(selectedBenchmarkRuns)
        });
    }

}
