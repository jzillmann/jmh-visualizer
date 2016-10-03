export default class AppState {

    constructor(options) {
        this.benchmarks = [];
        this.dataUploaded = this.benchmarks.lenght > 0;
        this.renderFunction = options.renderFunction;
        this.uploadBenchmarks = this.uploadBenchmarks.bind(this);
    }

    uploadBenchmarks(benchmarks) {
        console.debug(this)
        this.benchmarks = benchmarks;
        this.dataUploaded = this.benchmarks.length > 0;
        this.renderFunction(this)
    }

}
