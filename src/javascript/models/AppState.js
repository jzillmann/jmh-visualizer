import BenchmarkRun from 'models/BenchmarkRun.js';
import BenchmarkBundle from 'models/BenchmarkBundle.js';

// Holds the state of the Application
export default class AppState {

    constructor(options, history) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.benchmarkRunSelection = [];
        this.selectedBenchmarkBundle = null;
        this.selectedMetric = 'Score';
        this.history = history;
        this.uploadedBenchmarks = false;
        this.focusedBundles = new Set();

        //bind functions
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);
        this.initBenchmarkRuns = this.initBenchmarkRuns.bind(this);
        this.selectBenchmarkRuns = this.selectBenchmarkRuns.bind(this);
        this.goBack = this.goBack.bind(this);
        this.selectMetric = this.selectMetric.bind(this);
        this.selectBenchmarkBundle = this.selectBenchmarkBundle.bind(this);
        this.unselectBenchmarkBundle = this.unselectBenchmarkBundle.bind(this);
        this.selectedBenchmarks = this.selectedBenchmarks.bind(this);
        this.focusBundle = this.focusBundle.bind(this);

        this.history.listen((location, action) => {
            if (action === 'POP') {
                this.unselectBenchmarkBundle();
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
    selectBenchmarkBundle(benchmarkBundle:BenchmarkBundle) {
        this.selectedBenchmarkBundle = benchmarkBundle;
        this.renderFunction(this);
        this.history.push('#details');
    }

    // Unselect detail view bundle
    unselectBenchmarkBundle() {
        this.selectedBenchmarkBundle = null;
        this.renderFunction(this);
    }

    selectedBenchmarks() {
        return this.benchmarkRuns.filter((run, pos) => this.benchmarkRunSelection[pos]);
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

}
