import { expect } from 'chai';

import { parseMethodName, parseBenchmarkName, getUniqueParamValues } from '../../src/javascript/functions/parse.jsx'


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

describe('functions: getUniqueParamValues', () => {

    it('default', () => {
        const benchmarks = [
            {
                params: {
                    arg: 1,
                    certainty: 0
                }
            },
            {
                params: {
                    arg: 1,
                    certainty: 32
                }
            },
            {
                params: {
                    arg: 2,
                    certainty: 0
                }
            }];
        expect(getUniqueParamValues(benchmarks, 'arg')).to.deep.equal([1, 2]);
        expect(getUniqueParamValues(benchmarks, 'certainty')).to.deep.equal([0, 32]);

    });

});