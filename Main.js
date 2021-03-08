const Parser = require('./lib/Parser/Parser');
const RoverAutomata = require('./lib/automata/RoverAutomata');
const openFile = require('./lib/fileUtil/fileToUnixStr');

const txtPath = './input.in';

function main() {
    const rawStr = openFile(txtPath);
    const { plateau, rovers} = new Parser(rawStr);
    const automaton = new RoverAutomata(plateau, rovers);
    automaton.run();
}

main();