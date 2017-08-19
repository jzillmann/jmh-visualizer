// Which benchmarks of a BenchmarkResults should be shown in a view
export default class RunSelection {

    constructor(names, indices) {
        this.names = names;
        this.indices = indices
    }

    subSelection(index) {
        return new RunSelection([this.names[index]], [this.indices[index]]);
    }

}
