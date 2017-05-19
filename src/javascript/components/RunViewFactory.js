import BenchmarkCollection from '../models/BenchmarkCollection.js'
import RunSelection from '../models/RunSelection.js'

// Serves the RunView with content
export default class RunViewFactory {

    createTopSection() {
        throw new TypeError("Do not call abstract method foo from child.");
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, showScores, showGc) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

}