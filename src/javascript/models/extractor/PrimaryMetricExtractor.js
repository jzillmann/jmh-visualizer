import MetricExtractor from 'models/MetricExtractor.js'

export default class ScoreExtractor extends MetricExtractor {

    constructor() {
        super('Score');
    }

    getMetricObject(benchmark) {
        return benchmark.primaryMetric;
    }

    extractType(benchmark) {
        return benchmark.mode;
    }

    hasHistogram(benchmark) {
        return benchmark.mode === 'sample';
    }

    extractRawDataScores(benchmark) {
        if (this.hasHistogram(benchmark)) {
            return this.extractRawDataHistogram(benchmark).flatMap(
                forkArrays => forkArrays.flatMap(
                    scoresArray => scoresArray.map(
                        timeOccurence => timeOccurence[0]))
            );
        }
        return this.extractRawData(benchmark).flatMap(forkArrays => forkArrays.map(elem => elem));
    }

}
