const MovementPolicy = require('../../lib/automata/MovementPolicy');
const Rover = require('./../../lib/parser/Rover');
const { describe, it} = require('mocha');
const assert = require('assert');

describe('Tests the MovementPolicy class', () => {
    it('Should move north', () =>{
        const rover1pos = '5 3 N';
        const roverMovs = 'LMRM';
        const r = new Rover(rover1pos, roverMovs);
        const mp = new MovementPolicy(r);
        mp.move();
        assert.deepStrictEqual(r.position.y, 4);
    });

    it ('Should move south', () => {
        const rover1pos = '5 3 S';
        const roverMovs = 'LMRM';
        const r = new Rover(rover1pos, roverMovs);
        const mp = new MovementPolicy(r);
        mp.move();
        assert.deepStrictEqual(r.position.y, 2);
    });

    it ('Should move east', () => {
        const rover1pos = '5 3 E';
        const roverMovs = 'LMRM';
        const r = new Rover(rover1pos, roverMovs);
        const mp = new MovementPolicy(r);
        mp.move();
        assert.deepStrictEqual(r.position.x, 6);
    });

    it ('Should move west', () => {
        const rover1pos = '5 3 W';
        const roverMovs = 'LMRM';
        const r = new Rover(rover1pos, roverMovs);
        const mp = new MovementPolicy(r);
        mp.move();
        assert.deepStrictEqual(r.position.x, 4);
    });
});