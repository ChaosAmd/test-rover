const Plateau = require('./Plateau');
const Rover = require('./Rover');
const {isValidPlateauType , isValidRover} = require('./ParserErrorsHandler');

class Parser {
    constructor(raw) {
        this.rawString = raw;
        return this.process();
    }

    process() {
       const lines = this.rawString.split('\n');
       const header = lines[0];
       const plateau = this.plateauTokenizer(header);

       const roversArray = lines.splice(1);
       const rovers = this.roverTokenList(roversArray);
       
       return {
           plateau,
           rovers
       }
    }

    
    plateauTokenizer(plateauStr) {
        const plateau = new Plateau(plateauStr);

        if (isValidPlateauType(plateau)) {
            return plateau;
        }
    }

    roverTokenList(roverArr) {
        const tokens = new Array();

        for (let i = 0; i < roverArr.length; i+=2) {
            const currRover = new Rover(roverArr[i], roverArr[i+1]);

            if (isValidRover(currRover)) {
                tokens.push(currRover);
            }
        }
        return tokens;
    }

}

module.exports = Parser;