const ora = require('ora');
const shell = require('shelljs');
const downloadGit = require('download-git-repo');
const templateURL = 'direct:https://github.com/Jokul518/joker-ui.git';
const handler = {
    mkdir: function (dirname) {
        const ora = require('ora');
        const spinner = ora('⏰ download template......');
        spinner.start();
        const _pwd = shell.pwd().stdout;
        const _path = `${_pwd}/${dirname}`
        shell.cd(_pwd);
        shell.rm('-rf', dirname);
        shell.mkdir(dirname);
        downloadGit(templateURL, _path, { clone: true }, (err) => {
            spinner.stop();
            if (err) {
                console.error('模板下载失败:', err.message);
            } else {
                // 下载完成后要将package.json中的项目名等信息替换掉
                shell.sed('-i', 'joker-ui', dirname, `${_path}/package.json`);
            }
        }).catch((err) => {
            console.log('', err);
        });
    },
};

module.exports = function (answers) {
    /**
     * 1. git准备一个能容纳百川的项目
     * 2. git下载包
     * 3. shelljs根据用户选择对你下载的包进行修改删除
     * 4. 在用户的桌面创建最终的项目
     * 5. 引导开发使用
     */
    const { dirname } = answers;
    // 创建文件
    dirname && handler['mkdir'](dirname);
};
