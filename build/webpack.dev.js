const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

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
	plugins: [
    new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = merge(commonConfig, devConfig);
