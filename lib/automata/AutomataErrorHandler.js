module.exports = {
    testValidHorizontal(rover, bound) {
        if (rover.position.x > bound || rover.position.x < 0) {
            throw new Error('The rover has reached the horizontal limit.');
        }
    },

    testValidVertical(rover, bound) {
        if (rover.position.y > bound || rover.position.y < 0) {
            throw new Error('The rover has reached its vertical limit');
        }
    },

    invalidInstruction() {
        throw new Error('No instruction can be understood for this rover');
    }
}