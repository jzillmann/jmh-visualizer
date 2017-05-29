// An abstract class defining common extractions from benchmark results for score, gc, etc..
export default class MetricExtractor {

    constructor(metricType) {
        this.metricType = metricType;
    }

    getMetricObject(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    extractType(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    hasMetric(benchmark) { // eslint-disable-line no-unused-vars
        return !!this.getMetricObject(benchmark);
    }

    extractScore(benchmark) {
        return this.getMetricObject(benchmark).score;
    }

    extractScoreError(benchmark) {
        return this.getMetricObject(benchmark).scoreError;
    }

    extractScoreConfidence(benchmark) {
        return this.getMetricObject(benchmark).scoreConfidence;
    }

    extractScoreUnit(benchmark) {
        return this.getMetricObject(benchmark).scoreUnit;
    }

    extractRawData(benchmark) {
        return this.getMetricObject(benchmark).rawData;
    }

}

