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
        return ((typeof(plateau.limits.x) === "number") &&
                (typeof(plateau.limits.y) === "number") &&
                (plateau.limits.x >= 0 && plateau.limits.y >= 0));
    },
    
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
};