import BenchmarkRun from './BenchmarkRun.js';
import BenchmarkCollection from './BenchmarkCollection.js';

// Holds the state of the Application
export default class AppState {

    constructor(options, history) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];
        this.selectedBenchmarkRuns = [];
        this.selectedBenchmarkCollection = null;
        this.history = history;

        //bind functions
        this.goBack = this.goBack.bind(this);
        this.reorderBenchmarks = this.reorderBenchmarks.bind(this);
        this.selectBenchmarkCollection = this.selectBenchmarkCollection.bind(this);
        this.unselectBenchmarkCollection = this.unselectBenchmarkCollection.bind(this);
        this.selectBenchmark = this.selectBenchmark.bind(this);
        this.unselectBenchmark = this.unselectBenchmark.bind(this);
        this.selectedBenchmarks = this.selectedBenchmarks.bind(this);
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);

        this.history.listen((location, action) => {
            if (action === 'POP') {
                this.unselectBenchmarkCollection();
            }
        });
    }

    goBack() {
        this.history.goBack();
    }

    reorderBenchmarks(reorderFunction) {
        this.uploadBenchmarkRuns(reorderFunction(this.benchmarkRuns));
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

    selectBenchmark(name) {
        this.selectedBenchmarkRuns = [name]
        this.renderFunction(this)
    }

    unselectBenchmark() {
        this.selectedBenchmarkRuns = []
        this.renderFunction(this)
    }

    selectedBenchmarks() {
        if (this.selectedBenchmarkRuns.length === 0) {
            return this.benchmarkRuns;
        }
        return this.benchmarkRuns.filter(run => this.selectedBenchmarkRuns.includes(run.name))
    }

    uploadBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        this.benchmarkRuns = benchmarkRuns;
        this.renderFunction(this)
    }

}
