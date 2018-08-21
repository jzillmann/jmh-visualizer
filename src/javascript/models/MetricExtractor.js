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

    extractMinMax(benchmark) {
        const score = this.extractScore(benchmark);
        let min = score;
        let max = score;
        if (benchmark.mode === 'sample') {
            const histogramPerFork = this.extractRawDataHistogram(benchmark);
            histogramPerFork.forEach(scoresArray => scoresArray.forEach(timeOccurence => {
                const duration = timeOccurence[0];
                if (!isNaN(duration)) {
                    min = Math.min(min, duration);
                    max = Math.max(max, duration);
                }
            }));
            return [min, max];
        } else {
            const scoresPerFork = this.extractRawData(benchmark);
            scoresPerFork.forEach(scoresArray => scoresArray.forEach(iterationScore => {
                min = Math.min(min, iterationScore);
                max = Math.max(max, iterationScore);
            }));
            return [min, max];
        }
    }

}

