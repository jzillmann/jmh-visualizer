import { expect } from 'chai';

import { cartesianProduct, flatten, getUniqueNames } from '../../src/javascript/functions/util.js'


describe('functions: cartesianProduct', () => {

    it('default', () => {
        expect(cartesianProduct([['a'], ['b'], ['c']])).to.deep.equal([['a', 'b', 'c']]);
        expect(cartesianProduct([['a1', 'a2'], ['b'], ['c']])).to.deep.equal([['a1', 'b', 'c'], ['a2', 'b', 'c']]);
        expect(cartesianProduct([['a1', 'a2'], ['b1', 'b2'], ['c']])).to.deep.equal([['a1', 'b1', 'c'], ['a1', 'b2', 'c'], ['a2', 'b1', 'c'], ['a2', 'b2', 'c']]);
        expect(cartesianProduct([['a', 'b', 'c'], [1, 2]])).to.deep.equal([['a', 1], ['a', 2], ['b', 1], ['b', 2], ['c', 1], ['c', 2]]);
    });

});

describe('functions: flatten', () => {

    it('default', () => {
        expect(flatten([1, 2, 3])).to.deep.equal([1, 2, 3]);
        expect(flatten([[1], [2], [3]])).to.deep.equal([1, 2, 3]);
        expect(flatten([[1, 2, 3]])).to.deep.equal([1, 2, 3]);
        expect(flatten([[1, [2, 3]]])).to.deep.equal([1, 2, 3]);
    });

});

describe('functions: getUniqueNames', () => {

    it('default', () => {

        expect(getUniqueNames(["abc"])).to.deep.equal(["abc"]);
        expect(getUniqueNames(["xx/abc"])).to.deep.equal(["abc"]);
        expect(getUniqueNames(["abc", "cdf"])).to.deep.equal(["abc", "cdf"]);
        expect(getUniqueNames(["abc", "adf"])).to.deep.equal(["bc", "df"]);
        expect(getUniqueNames(["abc", "abf"])).to.deep.equal(["c", "f"]);
        expect(getUniqueNames(["abc", "abc"])).to.deep.equal(["abc", "abc"]);

        expect(getUniqueNames(["https://gist.githubusercontent.com/jzillmann/7d23b2382911cc434754a23773b06598/raw/1bcad4bb64624d8a2be15114a4eee4c406c3ae95/string-concatenation_jdk7.json"]))
            .to.deep.equal(["string-concatenation_jdk7.json"]);
        expect(getUniqueNames(["https://gist.githubusercontent.com/jzillmann/7d23b2382911cc434754a23773b06598/raw/1bcad4bb64624d8a2be15114a4eee4c406c3ae95/string-concatenation_jdk7.json",
            "https://gist.githubusercontent.com/jzillmann/866d39d43b264f507a67368f2313baca/raw/d0ae1502e8c493e6814c83f2df345fecb763c078/string-concatenation_jdk8.json"]))
            .to.deep.equal(["string-concatenation_jdk7", "string-concatenation_jdk8"]);
        expect(getUniqueNames(["https://gist.githubusercontent.com/xxx/aaa/jmh1.json", "https://gist.githubusercontent.com/xxx/aaa/jmh2.json"]))
            .to.deep.equal(["1", "2"]);

    });

});

