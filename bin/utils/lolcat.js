const Printer = require('@darkobits/lolcatjs').default;

module.exports = function(text){
    return Printer.fromString(text)
}