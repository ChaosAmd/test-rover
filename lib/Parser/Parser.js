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
        } else {
            throw new Error('The plateau input type is invalid. Please input only positive numbers.');
        }
    }

    roverTokenList(roverArr) {
        const tokens = new Array();

        for (let i = 0; i < roverArr.length; i+=2) {
            const currRover = new Rover(roverArr[i], roverArr[i+1]);

            if (isValidRover(currRover)) {
                tokens.push(currRover);
            } else {
                throw new Error('Invalid rover input type input. It must be:\n[positiveNumber] [positiveNumber] [faceChar]'+
                                '\n[validMovements]');
            }
        }

        return tokens;
    }

}

module.exports = Parser;