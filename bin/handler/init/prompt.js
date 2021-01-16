// 声明 用户输入init命令后的操作步骤
module.exports = [
    {
        type: 'text',
        name: 'dirname',
        message: '📂 请输入文件夹的名称：',
        default: 'joker-demo',
    },
    // {
    //     type: 'list',
    //     name: 'languages',
    //     message: '👩‍💻 请选择语言',
    //     choices: ['✔️ vue', '✔️ react', '✔️ node'],
    // },
    // {
    //     type: 'list',
    //     name: 'isTS',
    //     message: '是否使用Typescript',
    //     choices: ['✔️ yes', '✔️ no'],
    // },
];
