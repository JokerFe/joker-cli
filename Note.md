## 初始化步骤
### 添加命令
1. 在`package.json`文件中添加命令 `"private": true,` 属性，可避免在非上传的情况下`npm publish`导致框架上传，在需要正式上传的时候删除即可。
2. 在根目录下创建`bin`文件夹，在里边声明`joker`文件，来写命令。
首先在顶部写入下面命令，此命令的作用是告诉系统去该路径下寻找node命令环境
```shell
#!/usr/bin/env node 
console.log('init joker cli')
```
3. 在`package.json`文件中添加bin属性，设置命令`joker`的执行内容。此时执行`joker`命令是还会报错，需要进行第四步操作
```json
{
    "bin": {
        "joker": "bin/joker"
    }
}
```
4. 当我们使用命令`where node`的时候发现我们的node是安装在`/usr/local/bin/node`下，是因为不同的系统下安装的路径不同，导致运行失败，可以通过命令进行全局软连
5. 此时我们在运行`joker`命令时就会得到我们在上面输出的内容`init joker cli`。
### 准备工作
1. 生成ASCII码工具
```shell
npm i figlet
```
2. 使生成的ascii码变成渐变色
```shell
npm i @darkobits/lolcatjs
```
3. 附上代码
``` js
const figlet = require("figlet")
const Printer = require('@darkobits/lolcatjs').default;
const ascii = figlet.textSync("J O K E R");
const transformed = Printer.fromString(ascii);
console.log(transformed);
```

### 整活工具
##### 识别用户输入的命令

```shell
npm i commander
```

##### 与用户交互

```shell
npm i inquirer
```

##### 修改字体颜色
安装
```shell
npm i chalk
```

使用
```js
const chalk = require('chalk');
console.log(chalk.red('红色字体'))
console.log(chalk.yellow('黄色字体'))
```

##### 将json对象转成TS接口
安装
```shell
npm i json2ts
```
使用
```js
const json2ts = require('json2ts');
const josnText = {
    code: 1,
    success: true,
    data: [
        {
            name: 'joker',
            age: '18'
        },
        {
            name: 'jokul',
            age: '28'
        }
    ]
}
const res = json2ts.convert(JSON.stringify(josnText))
console.log(res);
```

##### 命令行等待
安装
```shell
npm i ora
```
使用
```js
const ora = require('ora');
const spinner = ora('⏰ 等待中...')
spinner.start();
spinner.stop();
```

##### js执行shell命令
安装
```shell
npm i shelljs
```
使用
```js
const shell = require('shelljs')
 // 获取当前文件目录
const pwd = shell.pwd();

```

##### 获取用户的根目录名
安装
```shell
npm i user-home
```
使用
```js
 
```