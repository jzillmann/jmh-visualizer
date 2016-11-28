import BenchmarkRun from './BenchmarkRun.jsx';

// Holds the state of the Application
export default class AppState {

    constructor(options) {
        this.renderFunction = options.renderFunction;
        this.examples = options.examples;
        this.benchmarkRuns = [];

        //bind functions
        this.reorderBenchmarks = this.reorderBenchmarks.bind(this);
        this.uploadBenchmarkRuns = this.uploadBenchmarkRuns.bind(this);
    }

    reorderBenchmarks(reorderFunction) {
        this.uploadBenchmarkRuns(reorderFunction(this.benchmarkRuns));
    }

    uploadBenchmarkRuns(benchmarkRuns: BenchmarkRun[]) {
        this.benchmarkRuns = benchmarkRuns;
        this.renderFunction(this)
    }

}
