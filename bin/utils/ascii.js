const figlet = require("figlet")
const Printer = require('./lolcat');

module.exports = function (text) {
    const def =  text || '\n J O K E R'
    const ascii = figlet.textSync(def);
    const transformed = Printer(ascii);
    return transformed;
}

