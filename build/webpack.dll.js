const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode:'production',
  entry:{
    vendors:['lodash'],
    typescript:['typescript'],
    // 把React 相关的模块放到一个单独的动态链接库里
    react:['react','react-dom']
  },
  output:{
    // 输出的动态链接库的文件名称，[name】
    filename:'[name].dll.js',
    path:path.resolve(__dirname, '../dll'),
    library:'_dll_[name]' // 然后暴露出来变量访问 _dll_react
  },
  plugins:[
    new CleanWebpackPlugin(['dll'],{
      root: path.resolve(__dirname, '../')
    }),
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path:path.resolve(__dirname,'../dll/[name].manifest.json')
    }),

  ]
}
