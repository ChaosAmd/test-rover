const MovementPolicy = require('./MovementPolicy');
const DirectionPolicy = require('./DirectionPolicy');
const { testValidHorizontal, testValidVertical, invalidInstruction} = require('./AutomataErrorHandler');

class RoverAutomata {
    constructor (plateau, roverList) {
        this.rovers = roverList;
        this.xBoundary = plateau.limits.x;
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
            this.changePolicy(currInstruction, rover);
        }
    }

    changePolicy(currInstruction, rover) {
        if (this.isMovement(currInstruction)) {
            const mp = new MovementPolicy(rover);
            mp.move();
            
            testValidHorizontal(rover, this.xBoundary);
            testValidVertical(rover, this.yBoundary)

        } else if (this.isDirection(currInstruction)) {
            const dp = new DirectionPolicy(rover, currInstruction);
            dp.changeDirection();

        } else {
            invalidInstruction();
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