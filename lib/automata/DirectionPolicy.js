const { invalidTurnSequence } = require('./PolicyErrorHandler');

class DirectionPolicy {
    constructor(currRover, turn) {
        this.rover = currRover;
        this.initFace = this.rover.position['face'];
        this.turnDirection = turn;
    }

    directions () {
        return {
            L : {
                'N' : this.turnWest,
                'S' : this.turnEast,
                'E' : this.turnNorth,
                'W' : this.turnSouth
            },

            R : {
                'N' : this.turnEast,
                'S' : this.turnWest,
                'E' : this.turnSouth,
                'W' : this.turnNorth
            }
        };
    }

    turnNorth () {  this.rover.position['face'] = 'N'}
    turnSouth () {  this.rover.position['face'] = 'S'}
    turnWest () {  this.rover.position['face'] = 'W'}
    turnEast () {  this.rover.position['face'] = 'E'}

    changeDirection() {
        const dirObj = this.directions();

        if(['L', 'R'].includes(this.turnDirection)) {
            dirObj[this.turnDirection][this.initFace].bind(this)();
        } else {
            invalidTurnSequence();
        }
    }
}

module.exports = DirectionPolicy;