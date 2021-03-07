const Plateau = require('./../../lib/Parser/Plateau');
const { describe, it} = require('mocha');
const assert = require('assert');

const platStr = '6 6';
const platStr1 = '7 2';
const platStr2 = '2 7';

describe ('Plateau instantion parser', () => {
    
    it('Should return the correct plateau limits', () => {
        const Plateau0 = new Plateau(platStr);
        limitobj = {
            x : 6,
            y : 6
        }
        assert.deepStrictEqual(Plateau0.limits, limitobj);        

        const Plateau1 = new Plateau(platStr1);
        limitobj = {
            x : 7,
            y : 2
        };
        assert.deepStrictEqual(Plateau1.limits, limitobj);

        const Plateau2 = new Plateau(platStr2);
        limitobj = {
            x : 2,
            y : 7
        };
        assert.deepStrictEqual(Plateau2.limits, limitobj);
    });
});