import DataExtractor from '../DataExtractor.js'

export default class ScoreExtractor extends DataExtractor {

    extractMode(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.mode;
    }

    getMetric(benchmark) { // eslint-disable-line no-unused-vars
        return benchmark.primaryMetric;
    }

}
