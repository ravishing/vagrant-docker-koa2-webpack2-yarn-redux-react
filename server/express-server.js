var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path=require('path');
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");
var webpackConfig = require('../webpack.config.js');

var compiler = webpack(webpackConfig,function(){});

var server = new WebpackDevServer(compiler, {
  contentBase: "../build/assets",
  hot: true,
  historyApiFallback: false,
  compress: true,
  // proxy: {
  //   "d.ev": "http://127.0.0.1:80"
  // },
  // setup: function(app) {},
  // staticOptions: {},
  clientLogLevel: "info",
  quiet: false,
  noInfo: false,
  lazy: true,
  filename: "../src/index.html",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // publicPath: "http://d.ev",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },
  //   https: {
  //     cert: fs.readFileSync("path-to-cert-file.pem"),
  //     key: fs.readFileSync("path-to-key-file.pem"),
  //     cacert: fs.readFileSync("path-to-cacert-file.pem")
  //   }
});
server.listen(80, "0.0.0.0", error=>{
  if(error){
    console.log(error.message);
    return
  }else{
    console.log('express...')
  }
});