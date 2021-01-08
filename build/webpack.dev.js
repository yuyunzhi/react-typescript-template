const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const fs = require('fs')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')

const plugins = [
  new webpack.HotModuleReplacementPlugin()
]

const files = fs.readdirSync(path.resolve(__dirname, '../dll'))

files.forEach(file => {
  if (/.*\.dll.js/.test(file)) {
    plugins.push(new AddAssetHtmlWebpackPlugin({ // 在html里添加新的静态资源 script 引入
      filepath: path.resolve(__dirname, '../dll', file)
    }))
  }

  if (/.*\.manifest.json/.test(file)) {
    plugins.push(new webpack.DllReferencePlugin({ // 在映射表里找到对应的第三方模块使用全局变量使用，而不是直接从node_modules里找
      manifest: path.resolve(__dirname, '../dll/', file)
    }))
  }
})


const devConfig = {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 8081,
    hot: true, // 开启热更新的功能
    proxy: {
      '^/api': {
        target: 'https://dev-dyt.xxxxxxx.cn',
        changeOrigin: true
      }
    }
	},
  module:{
	  rules:[
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options:{
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          'less-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
	plugins
}

module.exports = merge(commonConfig, devConfig);
