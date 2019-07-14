// An abstract class defining common extractions from benchmark results for score, gc, etc..
export default class MetricExtractor {

    constructor(metricKey) {
        this.metricKey = metricKey;
    }

    getMetricObject(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    extractType(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    hasHistogram(benchmark) { // eslint-disable-line no-unused-vars
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

    extractScoreUnit(benchmark) {
        return this.getMetricObject(benchmark).scoreUnit;
    }

    extractRawData(benchmark) {
        return this.getMetricObject(benchmark).rawData;
    }

    extractRawDataHistogram(benchmark) {
        return this.getMetricObject(benchmark).rawDataHistogram;
    }

    extractRawDataScores(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    extractMinMax(benchmark) { // eslint-disable-line no-unused-vars
        const score = this.extractScore(benchmark);
        let min = score;
        let max = score;
        const rawDataScores = this.extractRawDataScores(benchmark);
        rawDataScores.forEach(rawDataScore => {
            min = Math.min(min, rawDataScore);
            max = Math.max(max, rawDataScore);
        });
        return [min, max];
    }

}

