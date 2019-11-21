var path = require('path');
const env = process.env.NODE_ENV;
let target = '';
// 默认是本地环境
// 生成代理配置对象
module.exports = {
    baseUrl: env === 'production'
    ? './'
    : '/',
    outputDir: 'test',
    devServer: {
      port: 9300,
      https: false, // https:{type:Boolean}
      open: true, //配置自动启动浏览器
      disableHostCheck:true,
      host: '0.0.0.0',
      hotOnly: false,
      proxy:"https://dianlishenpi.erasin.wang/index.php/"
    },
  }