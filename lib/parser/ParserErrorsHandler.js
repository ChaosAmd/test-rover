module.exports = {

    isValidPlateauArgument(plateauStrArr) {
        if (plateauStrArr.length !== 2) {
            throw new Error("Invalid format of the plateau, arguments out of boundaries");
        } else {
            return true;
        }
    },
    
    isValidRoverArgument(posStrArr) {
        if (posStrArr.length !== 3) {
            throw new Error("Invalid rover input format. arguments out of boundaries");
        } else {
            return true;
        }
    },

    isValidPlateauType(plateau) {
        if ((typeof(plateau.limits.x) === "number") &&
            (typeof(plateau.limits.y) === "number") &&
            (plateau.limits.x >= 0 && plateau.limits.y >= 0)) {
                return true;
            } else {
                throw new Error('The plateau input type is invalid. Please input only positive numbers.');
            }
    },
    
    isValidRover(rover) {
        const validType = ((typeof(rover.position.x) === "number") &&
                           (typeof(rover.position.y) === "number") &&
                           (typeof(rover.position.face) === "string") &&
                           (rover.position.x >= 0 && rover.position.y >= 0));
    
        const validFace = ['N', 'S', 'E', 'W'].includes(rover.position.face);
    
        const validMovements = rover.movementList.reduce((acc, curr) => {
           return acc && ['L', 'M', 'R'].includes(curr); 
        })
    
        if (validType && validFace && validMovements) {
            return true;
        } else {
            throw new Error('Invalid rover input type input. It must be:\n[positiveNumber] [positiveNumber] [faceChar]'+
            '\n[validMovements]');
        }
    }
};