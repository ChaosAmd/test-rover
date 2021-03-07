const fs = require('fs');

function fileToUnixStr(textPath) {
    return (fs.readFileSync(textPath)).toString('utf-8').replace(/\r/g, '');
}

module.exports = fileToUnixStr;