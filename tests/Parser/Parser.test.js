const Parser = require('../../lib/Parser/Parser');
const { describe, it} = require('mocha');
const assert = require('assert');

describe('Parser test', () => {
    it('Should create an specified parsed object from a string', () => {
        const parsString = "4 5\n3 2 S\nMMMRM\n2 1 E\nMMMLMM";
        const { plateau, rovers} = new Parser(parsString);

        assert.deepStrictEqual(4, plateau.limits.x);
        assert.deepStrictEqual(5, plateau.limits.y);
        assert.deepStrictEqual(3, rovers[0].position.x);
        assert.deepStrictEqual(2, rovers[0].position.y);
        assert.deepStrictEqual('S', rovers[0].position.face);
        assert.deepStrictEqual(2, rovers[1].position.x);
        assert.deepStrictEqual(1, rovers[1].position.y);
        assert.deepStrictEqual('E', rovers[1].position.face);
    });
});