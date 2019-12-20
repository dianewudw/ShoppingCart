const path = require('path');
const webpack = require('webpack');
const HTMLwebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  mode:"development",
  output:{
    path: path.resolve(__dirname, './dist'),
    filename:"./bundle.js"
  },
  module:{
    rules:[
      {
      test:/\.(js|jsx)$/,
      exclude:/(node_modules|bower_components)/,
      loader:"babel-loader",
      options:{presets:["@babel/env", "@babel/preset-react"]}
      },
      { test:/\.css$/,
      use:["style-loader", "css-loader"]
      }
    ]
  },
  resolve:{ extensions: ["*",".js",".jsx"]},
  devServer:{
    contentBase: path.resolve(__dirname, "public/"),
    port:8000,
    compress:true,
    publicPath:path.resolve(__dirname,"./dist/bundle.js"),
    hotOnly:true,
    proxy:{
      '/api': {
        target: "http://localhost:3000"
      }
    },
  },
  // plugins:[
  //   new webpack.HotModuleReplacementPlugin(),
  //   new HTMLwebpackPlugin()
  // ]
}