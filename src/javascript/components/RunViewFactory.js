import BenchmarkCollection from '../models/BenchmarkCollection.js'
import RunSelection from '../models/RunSelection.js'
import MetricExtractor from '../models/MetricExtractor.js'

// Serves the RunView with content
export default class RunViewFactory {

    createTopSection(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricType) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    createCollectionView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

}