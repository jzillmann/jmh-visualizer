export default class AppState {

    constructor(options) {
        this.exampleBenchmarks = options.exampleBenchmarks;
        this.renderFunction = options.renderFunction;
        this.benchmarks = [];
        this.dataUploaded = this.benchmarks.lenght > 0;
        this.uploadBenchmarks = this.uploadBenchmarks.bind(this);
        this.loadExamples = this.loadExamples.bind(this);
    }

    uploadBenchmarks(benchmarks) {
        this.benchmarks = benchmarks;
        this.dataUploaded = this.benchmarks.length > 0;
        this.renderFunction(this)
    }

    loadExamples() {
        this.uploadBenchmarks(this.exampleBenchmarks)
    }

}
