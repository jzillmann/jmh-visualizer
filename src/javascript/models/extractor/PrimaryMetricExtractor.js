import MetricExtractor from '../MetricExtractor.js'

export default class ScoreExtractor extends MetricExtractor {

    constructor() {
        super('Score');
    }

    getMetricObject(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.primaryMetric;
    }

    extractType(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.mode;
    }

}
