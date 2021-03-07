const fileToUnixStr = require('../../lib/FileUtil/fileToUnixStr');
const { describe, it} = require('mocha');
const assert = require('assert');

const txtPath = "./tests/fileUtil/mockData/text-to-test.txt";

const expectedOutput = `lalalalallaa
bbbbbbbbbbb
cccccccc
dddddd`;

describe('Testing fileToUnixStr function', () => {
    it('Should get the string from a file equals to expectedOutput', () => {
        const stringTest = fileToUnixStr(txtPath);
        assert.strictEqual(expectedOutput, stringTest);
    });
});
