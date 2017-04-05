const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const WebpackMd5Hash=require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const base=require('./base');
const env=require('../constants/env.js');
const src_path=env.src_path;

module.exports={
    output:{
        filename:'static/[name].[hash:8].js',
        chunkFilename:'[name].[hash:8].js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool:'eval-source-map',
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        host:'0.0.0.0',
        port:'80',
    },
};