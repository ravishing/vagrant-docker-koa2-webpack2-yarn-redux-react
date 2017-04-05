const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
const WebpackMd5Hash=require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HappyPack=require('happypack');
const os=require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length }); 

const env=require('../constants/env.js');

const root_path=env.root_path;
const src_path=env.src_path;
const build_path=env.build_path;

module.exports = {
        context:src_path,
        resolve:{
            modules:[path.resolve(root_path, 'node_modules')],
            alias: {
                'moment': 'moment/min/moment.min.js',
                'react': 'react/dist/react.js',
                'react-dom': 'react-dom/dist/react-dom.js',
            }
        },
        output:{
            path:build_path,
        },
        entry:{
            home:'./bootstrap/main.js',
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
                },
                {
                    test:/\.jsx?$/,
                    use:[
                        {
                            loader:'happypack/loader',
                            options:{
                                id:'js',
                            },
                        },
                    ]
                }
            ],
            noParse: /node_modules\/(jquey|moment|chart\.js)/,
        },
        plugins:[
            new HtmlWebpackPlugin({
                title:'webpack2',
                favicon:path.resolve(src_path,'assets/icon/favicon.ico'),
                minify: {
                    removeAttributeQuotes: true, // 移除属性的引号
                },
                template:path.resolve(src_path,'./view/main/index.html'),
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors',
                minChunks(module, count) {
                    return (
                        module.resource &&
                        /\.(j|t)sx?$/.test(module.resource) &&
                        module.resource.indexOf(
                            path.resolve(root_path, 'node_modules')
                        ) === 0
                    );
                }
            }),
            new HappyPack({
                id: 'js',
                loaders: ['babel-loader'],
                threadPool: happyThreadPool,
                cache: true,
                verbose: true,
            })
        ]
    };