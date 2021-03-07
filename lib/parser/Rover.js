const { isValidRoverArgument } = require('./ParserErrorsHandler');

class Rover {
    constructor(initPosStr, movementStr) {
        this.position = this.initPosition(initPosStr);
        this.movementList = this.getMovement(movementStr);
    }

    initPosition(initPos) {
        const posArrays = initPos.split(' ');

        if (isValidRoverArgument(posArrays)) {
            return {
                x : parseInt(posArrays[0], 10),
                y : parseInt(posArrays[1], 10),
                face : posArrays[2]  
            };
        }

    }

    getMovement(movement) {
        return movement.split('');
    }
}

module.exports = Rover;