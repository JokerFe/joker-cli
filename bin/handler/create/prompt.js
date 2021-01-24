/*
 * @Author: your name
 * @Date: 2021-01-16 21:51:20
 * @LastEditTime: 2021-01-24 17:47:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /joker-cli/bin/handler/init/prompt.js
 */
// 声明 用户输入init命令后的操作步骤
module.exports = [
    {
        type: 'text',
        name: 'dirname',
        message: '📂 请输入文件夹的名称：',
        default: 'joker-demo',
    },
    {
        type: 'list',
        name: 'webpack',
        message: '请选择webpack版本',
        choices: ['✔️ webpack5'],
    },
    {
        type: 'list',
        name: 'languages',
        message: '请选择项目模板',
        choices: ['✔️ react-ts'],
    },
    // {
    //     type: 'list',
    //     name: 'isTS',
    //     message: '是否使用Typescript',
    //     choices: ['✔️ yes', '✔️ no'],
    // },
];
