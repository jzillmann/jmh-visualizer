import { expect } from 'chai';

import { parseMethodName, parseBenchmarkName } from '../../src/javascript/functions/parse.jsx'


describe('functions: parseMethodName', () => {

    it('default', () => {

        expect(parseMethodName({
            benchmark: "io.morethan.javabenchmarks.showcase.ParamsBenchmark.bench"
        })).to.equal("bench");
        expect(parseMethodName({
            benchmark: "ParamsBenchmark.bench"
        })).to.equal("bench");

    });

});

describe('functions: parseBenchmarkName', () => {

    it('default', () => {

        expect(parseBenchmarkName({
            benchmark: "io.morethan.javabenchmarks.showcase.ParamsBenchmark.bench"
        })).to.equal("bench");
        expect(parseBenchmarkName({
            benchmark: "ParamsBenchmark.bench"
        })).to.equal("bench");

    });

    it('singleParams', () => {

        expect(parseBenchmarkName({
            benchmark: "io.morethan.javabenchmarks.showcase.ParamsBenchmark.bench",
            params: {
                arg: "1"
            }
        })).to.equal("bench arg=1");
        expect(parseBenchmarkName({
            benchmark: "io.morethan.javabenchmarks.showcase.ParamsBenchmark.bench",
            params: {
                arg: "2"
            }
        })).to.equal("bench arg=2");

    });

    it('multipleParams', () => {

        expect(parseBenchmarkName({
            benchmark: "io.morethan.javabenchmarks.showcase.ParamsBenchmark.bench",
            params: {
                arg: "1",
                certainty: "32",
                gender: "male"
            }
        })).to.equal("bench arg=1 certainty=32 gender=male");

    });

});