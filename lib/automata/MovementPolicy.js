const { invalidSequence, testNegativePosition} = require('./PolicyErrorHandler');

class MovementPolicy {
    constructor(rover) {
        this.rover = rover;
        this.face = this.rover.position.face;
    }

    moveFacesObj () {
        return {
            'N' : this.moveNorth,
            'S' : this.moveSouth,
            'W' : this.moveWest,
            'E' : this.moveEast
        }
    }

    moveNorth() { this.rover.position.y += 1; }
    moveSouth() { this.rover.position.y -= 1; }
    moveWest() { this.rover.position.x -= 1; }
    moveEast() { this.rover.position.x += 1; }

    move() {
        const moveFaces = this.moveFacesObj(); 
        if (['N', 'S', 'E', 'W'].includes(this.face)) {
            moveFaces[this.face].bind(this)();
            testNegativePosition(this.rover);
        } else {
            invalidSequence();
        }
    }
}

module.exports = MovementPolicy;