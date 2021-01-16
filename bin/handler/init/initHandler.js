const inquirer = require('inquirer');
const prompt = require('./prompt');
const answer = require('./answer');
module.exports = function() {
    inquirer
        .prompt(prompt)
        .then(answers=>{
            answer(answers)
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else when wrong
            }
        });
}