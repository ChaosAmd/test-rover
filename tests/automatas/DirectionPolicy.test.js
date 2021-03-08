const DirectionPolicy = require('../../lib/automata/DirectionPolicy');
const Rover = require('../../lib/Parser/Rover');
const { describe, it} = require('mocha');
const assert = require('assert');

const rover1pos = '5 3 N';
const roverMovs = 'LMRM';

describe('Tests the DirectionPolicy', () => {
    it('Should change the direction one time', () => {
        const r = new Rover(rover1pos, roverMovs);
        const dp = new DirectionPolicy(r, r.movementList[0]);
        dp.changeDirection();
        assert.deepStrictEqual(r.position['face'], 'W');
    });

    it('Should change the direction two times', () => {
        const r = new Rover(rover1pos, roverMovs);
        const dp = new DirectionPolicy(r, r.movementList[0]);
        dp.changeDirection();
        const dp1 = new DirectionPolicy(r, r.movementList[2]);
        dp1.changeDirection();
        assert.deepStrictEqual(r.position.face, 'N');
    });
});
