import MetricExtractor from 'models/MetricExtractor.js'

export default class SecondaryMetricExtractor extends MetricExtractor {

    constructor(metricKey) {
        super(metricKey);
    }

    getMetricObject(benchmark) {
        return benchmark.secondaryMetrics[this.metricKey];
    }

    extractType(benchmark) { // eslint-disable-line no-unused-vars
        return this.metricKey;
    }

    hasHistogram(benchmark) { // eslint-disable-line no-unused-vars
        return false;
    }

    extractRawDataScores(benchmark) {
        return this.extractRawData(benchmark).flatMap(forkArrays => forkArrays.map(elem => elem));
    }

}
