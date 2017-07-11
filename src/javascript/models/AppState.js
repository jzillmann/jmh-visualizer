import BenchmarkRun from './BenchmarkRun.js';
import BenchmarkCollection from './BenchmarkCollection.js';

// Holds the state of the Application
export default class AppState {

    constructor(options, history) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.benchmarkRunSelection = [];
        this.selectedBenchmarkCollection = null;
        this.selectedMetric = 'Score';
        this.history = history;

        //bind functions
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);
        this.selectBenchmarkRuns = this.selectBenchmarkRuns.bind(this);
        this.goBack = this.goBack.bind(this);
        this.selectMetric = this.selectMetric.bind(this);
        this.selectBenchmarkCollection = this.selectBenchmarkCollection.bind(this);
        this.unselectBenchmarkCollection = this.unselectBenchmarkCollection.bind(this);
        this.selectedBenchmarks = this.selectedBenchmarks.bind(this);

        this.history.listen((location, action) => {
            if (action === 'POP') {
                this.unselectBenchmarkCollection();
            }
        });
    }

    uploadBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        this.benchmarkRuns = benchmarkRuns;
        this.benchmarkRunSelection = Array(benchmarkRuns.length).fill(true);
        this.renderFunction(this)
    }

    // expects array of boolean with length of total JMH runs
    selectBenchmarkRuns(benchmarkRunSelection) {
        this.benchmarkRunSelection = benchmarkRunSelection;
        this.renderFunction(this)
    }

    goBack() {
        this.history.goBack();
    }

    selectMetric(metric) {
        this.selectedMetric = metric;
    }

    selectBenchmarkCollection(benchmarkCollection:BenchmarkCollection) {
        this.selectedBenchmarkCollection = benchmarkCollection;
        this.renderFunction(this);
        this.history.push('#details');
    }

    unselectBenchmarkCollection() {
        this.selectedBenchmarkCollection = null;
        this.renderFunction(this)
    }

    selectedBenchmarks() {
        return this.benchmarkRuns.filter((run, pos) => this.benchmarkRunSelection[pos])
    }

}
