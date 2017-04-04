const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const WebpackMd5Hash=require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const root_path=path.resolve(__dirname);
const src_path=path.resolve(__dirname,'src');
const build_path=path.resolve(__dirname,'public','build');

module.exports={
    // context:src_path,
    resolve:{
        modules:[path.resolve(__dirname, 'node_modules')],
        alias: {
            'moment': 'moment/min/moment.min.js',
            'react': 'react/dist/react.js',
            'react-dom': 'react-dom/dist/react-dom.js',
        }
    },
    entry:{
        home:'./src/bootstrap/main.js',
    },
    output:{
        path:build_path,
        filename:'static/[name].[chunkhash:8].js',
        chunkFilename:'[name].[chunkhash:8].js',
        publicPath:'http://d.ev/',
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                        options:{},
                    },
                    {
                        loader:'css-loader',
                        options:{}, 
                    },
                ]
            }
        ],
        noParse: /node_modules\/(jquey|moment|chart\.js)/,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'webpack',
            favicon:path.resolve(src_path,'resources/common/assets/icon/favicon.ico'),
            minify: {
                removeAttributeQuotes: true, // 移除属性的引号
            },
            template:'./src/resources/main/index.html',
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new WebpackMd5Hash,
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