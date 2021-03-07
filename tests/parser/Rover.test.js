const Rover = require('../../lib/Parser/Rover');
const { describe, it} = require('mocha');
const assert = require('assert');

const rover1pos = '5 2 N';
const roverMovs = 'LMRM';

describe('Rover instantiation for parser', () => {
    const Rover1 = new Rover(rover1pos, roverMovs);
    it ('Should create the position object', () => {
        posObj = {
            x : 5,
            y : 2,
            face : 'N'
        };

        assert.deepStrictEqual(Rover1.position, posObj);
    });
    
    it ('Should create the movement list', () => {     
        movList = ['L', 'M', 'R', 'M'];
        assert.deepStrictEqual(Rover1.movementList, movList);
    });

});