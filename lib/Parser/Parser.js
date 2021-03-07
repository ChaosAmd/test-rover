const Plateau = require('./Plateau');
const Rover = require('./Rover');

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

        if (this.isValidPlateauType(plateau)) {
            return plateau;
        } else {
            throw new Error('The plateau input type is invalid. Please input positive valid numbers.');
        }
    }

    isValidPlateauType(plateau) {
        return ((typeof(plateau.limits.x) === "number") &&
                (typeof(plateau.limits.y) === "number") &&
                (plateau.limits.x >= 0 && plateau.limits.y >= 0));
    }

    roverTokenList(roverArr) {
        const tokens = new Array();

        for (let i = 0; i < roverArr.length; i+=2) {
            const currRover = new Rover(roverArr[i], roverArr[i+1]);

            if (this.isValidRover(currRover)) {
                tokens.push(currRover);
            } else {
                throw new Error('Invalid rover input type input. It must be:\n[positiveNumber] [positiveNumber] [faceChar]'+
                                '\n[validMovements]');
            }
        }

        return tokens;
    }

    isValidRover(rover) {
        const validType = ((typeof(rover.position.x) === "number") &&
                           (typeof(rover.position.y) === "number") &&
                           (typeof(rover.position.face) === "string") &&
                           (rover.position.x >= 0 && rover.position.y >= 0));

        const validFace = ['N', 'S', 'E', 'S'].includes(rover.position.face);

        const validMovements = rover.movementList.reduce((acc, curr) => {
           return acc && ['L', 'M', 'R'].includes(curr); 
        })

        return (validType && validFace && validMovements);
    }


}

module.exports = Parser;