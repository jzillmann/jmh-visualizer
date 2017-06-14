import MetricExtractor from '../MetricExtractor.js'

export default class SecondaryMetricExtractor extends MetricExtractor {

    constructor(metricKey) {
        super();
        this.metricKey = metricKey;
    }

    getMetricObject(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.secondaryMetrics[this.metricKey];
    }

    extractType(benchmark) { // eslint-disable-line no-unused-vars
        return this.metricKey;
    }

}
