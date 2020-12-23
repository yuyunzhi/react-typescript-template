const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module:{
    rules:[
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options:{
              importLoaders: 2,// 表示scss文件导入了scss文件依然走postcss-loader sass-loader
              modules:true // 开启css模块化
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  optimization:{
    minimizer:[new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", // 表示直接引入的文件
      chunkFilename: "[id].css" // 间接引入的文件
    })
  ]
}

module.exports = merge(commonConfig, prodConfig);
