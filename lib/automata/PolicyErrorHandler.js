module.exports = {
    testNegativePosition(rover) {   
        if (rover.position.y < 0 || rover.position.x < 0) {
            throw new Error('The rover has negative position in some of his axis.');
        }
    },

    invalidSequence() {
        throw new Error('Invalid move sequence.'); 
    },

    invalidTurnSequence() {
        throw new Error('Invalid turning sequence.');
    }
}