class Plateau {
    constructor (sizeStr) {
        this.limits = this.generatePlateau(sizeStr);
    }

    generatePlateau(sizeStr) {
        const plateauArray = sizeStr.split(' ');
        
        if (plateauArray.length !== 2) {
            throw new Error("Invalid format of the plateau, arguments out of boundaries");
        }

        return {
            x : parseInt(plateauArray[0], 10),
            y : parseInt(plateauArray[1], 10),
        }
    }
}

module.exports = Plateau;