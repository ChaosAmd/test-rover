const Parser = require('../../lib/Parser/Parser');
const RoverAutomata = require('../../lib/automata/RoverAutomata');
const { describe, it} = require('mocha');
const assert = require('assert');

const testInput = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

describe('RoverAutomata class test', () => {
    const { plateau, rovers} = new Parser(testInput);
    const automaton = new RoverAutomata(plateau, rovers);
    automaton.run();

    it('Should process the first rover simulation', () => {
        pos = rovers[0].position;
        assert.deepStrictEqual(pos['x'], 1);
        assert.deepStrictEqual(pos['y'], 3);
        assert.deepStrictEqual(pos['face'], 'N');
    });

    it ('Should process the second rover simulation', () => {
        pos = rovers[1].position;
        assert.deepStrictEqual(pos['x'], 5);
        assert.deepStrictEqual(pos['y'], 1);
        assert.deepStrictEqual(pos['face'], 'E')
   
    });
});