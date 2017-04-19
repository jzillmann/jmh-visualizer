import { expect } from 'chai';

import { cartesianProduct } from '../../src/javascript/functions/util.js'


describe('functions: cartesianProduct', () => {

    it('default', () => {
        expect(cartesianProduct([['a'], ['b'], ['c']])).to.deep.equal([['a', 'b', 'c']]);
        expect(cartesianProduct([['a1', 'a2'], ['b'], ['c']])).to.deep.equal([['a1', 'b', 'c'], ['a2', 'b', 'c']]);
        expect(cartesianProduct([['a1', 'a2'], ['b1', 'b2'], ['c']])).to.deep.equal([['a1', 'b1', 'c'], ['a1', 'b2', 'c'], ['a2', 'b1', 'c'], ['a2', 'b2', 'c']]);
        expect(cartesianProduct([['a', 'b', 'c'], [1, 2]])).to.deep.equal([['a', 1], ['a', 2], ['b', 1], ['b', 2], ['c', 1], ['c', 2]]);
    });

});

