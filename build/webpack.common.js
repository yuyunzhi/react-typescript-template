const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@':path.resolve(__dirname,'../src')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(jpg|png|gif|jpeg)$/,
      use: {
        loader: 'url-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: 'images/',
          //小于 10kb 就走 url-loader 使用base64的形式
          // 否则就走file-loader 产出url的形式
          limit: 10 * 1024
        }
      }
    }, {
      test: /\.(eot|ttf|svg)$/,
      use: {
        loader: 'file-loader'
      }
    },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['../dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  optimization: {
    runtimeChunk:{
      name:'runtime'
    },
    usedExports: true, // tree shaking 使用
    splitChunks: {
      chunks: 'all'
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/, // 如果在node_modules里，那么会打包到vendors.js
      //     priority: -10, // 比如jquery 符合vendors 也符合default，值越大，说明优先级更大
      //     filename:'vendors.[contentHash].js' // 表示所有的第三方打包到一个叫vendors.js文件
      //   },
      //   default: { // 如果是引入自己在项目里写的模块引入走这里，非node_modules
      //     // minChunks: 2,
      //     priority: -20,// 值越大，说明优先级更大
      //     reuseExistingChunk: true, // 如果代码已经打包过，重复引用时就不会再分割打包，而是复用之前的。
      //     filename: 'common.[contentHash].js'
      //   }
      // }
    }
  },
  output: {
    filename: '[name].[contentHash].js',
    chunkFilename: '[name].chunk.js',// 间接引入打包的走这个地方
    path: path.resolve(__dirname, '../dist')
  }
}
