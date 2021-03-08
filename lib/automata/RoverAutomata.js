const MovementPolicy = require('./MovementPolicy');
const DirectionPolicy = require('./DirectionPolicy');

class RoverAutomata {
    constructor (plateau, roverList) {
        this.rovers = roverList;
        this.xBoundarie = plateau.limits.x;
        this.yBoundary = plateau.limits.y
    }

    run() {
        this.rovers.forEach((r) => {
            this.updateState(r);
            this.printRover(r);
        });
    }

    updateState(rover) {
        const instructions = rover.movementList;

        for (let i = 0; i < instructions.length; i++) {
            const currInstruction = instructions[i];

            if (this.isMovement(currInstruction)) {
                const mp = new MovementPolicy(rover);
                mp.move();
                
                if (rover.position.x > this.xBoundarie || rover.position.x < 0) {
                    throw new Error('The rover has reached the horizontal limit.');
                }

                if (rover.position.y > this.yBoundary || rover.position.y < 0) {
                    throw new Error('The rover has reached its vertical limit');
                }
            } else if (this.isDirection(currInstruction)) {
                const dp = new DirectionPolicy(rover, currInstruction);
                dp.changeDirection();
            } else {
                throw new Error('No instruction can be understood for this rover');
            }
        }
    }

    isDirection(instruction) {
        return ['L', 'R'].includes(instruction);
    }

    isMovement(instruction) {
        return 'M' === instruction;
    }

    printRover(r) {
        console.log(`${r.position.x} ${r.position.y} ${r.position.face}`);
    }
}

module.exports = RoverAutomata;