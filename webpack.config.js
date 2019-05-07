
module.exports = [
  {
    // 入口文件。
    mode: 'development',
    entry: __dirname + "/app/main.js",
    // 出口文件
    output: {
      path: __dirname + "/public",
      filename: "bundle.js"
    }
  },
  {
    // 入口文件。
    mode: 'development',
    entry: __dirname + "/app/main.js",
    // 出口文件
    output: {
      path: __dirname + "/public",
      filename: "bundle2.js"
    }
  },

]