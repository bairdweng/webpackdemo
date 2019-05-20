/* eslint-disable no-undef */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // 入口文件。
  mode: 'none',
  entry: './src/app/main.ts',
  // 出口文件
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'main.js',
  },
  // source-map 便于调试。
  devtool: 'eval-source-map',
  // 本地服务器
  devServer: {
    contentBase: `${__dirname}`,
    compress: false,
    host: '127.0.0.1',
    port: 8200,
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts', '.tsx'],
    // alias: {
    //   '@': resolve('src'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        // exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: file => (
          /node_modules/.test(file)
          && !/\.vue\.js/.test(file)
        ),
      },
      {
        test: /\.css$/,
        // css 加载器
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
      // 对模版文件使用loader
        test: /\.ejs$/,
        use: 'ejs-loader',
      },

    ],
  },
}
