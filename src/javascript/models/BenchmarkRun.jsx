// Holds all benchmarks of a JMH run
export default class BenchmarkRun {

    constructor(options) {
        this.name = options.name;
        this.benchmarks = options.benchmarks
    }

}
