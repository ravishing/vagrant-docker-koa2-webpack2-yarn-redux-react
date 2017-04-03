var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry:{
         home:path.join(__dirname,'src/bootstrap/main.js'),
    },
    output:{
        path:path.join(__dirname,'public','build'),
        filename:'static/[name]-[hash:8].js',
        publicPath:'http://d.ev/',
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loaders:['style','css'],
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack',
            favicon:'./src/resources/common/assets/icon/favicon.ico',
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
            },
            template:'./src/resources/main/index.html',
        }),
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