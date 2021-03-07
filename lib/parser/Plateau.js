const { isValidPlateauArgument } = require('./ParserErrorsHandler');

class Plateau {
    constructor (sizeStr) {
        this.limits = this.generatePlateau(sizeStr);
    }

    generatePlateau(sizeStr) {
        const plateauArray = sizeStr.split(' ');

        if (isValidPlateauArgument(plateauArray)) {
            return {
                x : parseInt(plateauArray[0], 10),
                y : parseInt(plateauArray[1], 10),
            }
        }
        
    }
}

module.exports = Plateau;