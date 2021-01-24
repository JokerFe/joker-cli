/*
 * @Author: your name
 * @Date: 2021-01-16 21:51:20
 * @LastEditTime: 2021-01-24 17:45:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /joker-cli/bin/handler/cmdHandler.js
 */
const create = require('./create/createHandler')
const json2ts = require('./json2tsHandler')

module.exports = {
    create,
    json2ts
};
