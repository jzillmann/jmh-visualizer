import { expect } from 'chai';

import { parseMethodName } from '../../src/javascript/functions/parse.jsx'


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
