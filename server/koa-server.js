var Koa=require('koa');
var app=new Koa();
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var config=require('../webpack.config.js')
var compiler=webpack(config);

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

app.listen(80,function(error){
  if(error){
    console.log(error.message);
    return
  }else{
    console.log('koa2...')
  }
});