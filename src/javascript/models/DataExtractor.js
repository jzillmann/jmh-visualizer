// An abstract class defining common extractions from benchmark results for score, gc, etc..
export default class DataExtractor {

    extractMode(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    getMetric(benchmark) { // eslint-disable-line no-unused-vars
        throw new TypeError("Do not call abstract method foo from child.");
    }

    extractScore(benchmark) { // eslint-disable-line no-unused-vars
        return this.getMetric(benchmark).score;
    }

    extractScoreError(benchmark) { // eslint-disable-line no-unused-vars
        return this.getMetric(benchmark).scoreError;
    }

    extractScoreConfidence(benchmark) { // eslint-disable-line no-unused-vars
        return this.getMetric(benchmark).scoreConfidence;
    }

    extractScoreUnit(benchmark) { // eslint-disable-line no-unused-vars
        return this.getMetric(benchmark).scoreUnit;
    }

    extractRawData(benchmark) { // eslint-disable-line no-unused-vars
        return this.getMetric(benchmark).rawData;
    }

}

