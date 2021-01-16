const json2ts = require('json2ts');
module.exports = function(url) {
    // mock数据
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
    // 这里也可以写网络请求使用async await
    console.log('🍉接口地址：', url);
    const res = json2ts.convert(JSON.stringify(josnText))
    console.log('🎃mock结果：', res);
    // 拿到数据后可以上传到某个地方去、或者生成文件
}
