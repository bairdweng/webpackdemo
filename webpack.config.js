
const path = require('path')
module.exports = {
  // 入口文件。
  mode: 'development',
  entry: __dirname + "/app/main.js",
  // 出口文件
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
   },
   // source-map 便于调试。
   devtool: 'eval-source-map', 
   // 本地服务器
   devServer: {
    contentBase: __dirname + "/public",
    compress: false,
    host:"127.0.0.1", 
    port: 8900
  }

}