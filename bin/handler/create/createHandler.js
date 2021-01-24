/*
 * @Author: your name
 * @Date: 2021-01-16 21:51:20
 * @LastEditTime: 2021-01-24 17:46:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /joker-cli/bin/handler/init/initHandler.js
 */
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