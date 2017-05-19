import DataExtractor from '../DataExtractor.js'

export default class GcExtractor extends DataExtractor {

    constructor(metricKey) {
        super();
        this.metricKey = metricKey;
    }

    extractMode(benchmark) { // eslint-disable-line no-unused-vars
        return this.metricKey;
    }

    getMetric(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.secondaryMetrics[this.metricKey];
    }

}
