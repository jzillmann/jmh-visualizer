import BenchmarkCollection from '../models/BenchmarkCollection.js'
import RunSelection from '../models/RunSelection.js'
import MetricExtractor from '../models/MetricExtractor.js'

// Serves the DetailView with content
export default class DetailViewFactory {

    createMetricView(benchmarkCollection:BenchmarkCollection, runSelection:RunSelection, metricExtractor:MetricExtractor) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

}