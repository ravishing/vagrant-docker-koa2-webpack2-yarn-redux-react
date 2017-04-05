const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const webpack=require('webpack');
const os = require('os');
module.exports={
    output:{
        filename:'static/[name].[chunkhash:8].js',
        chunkFilename:'[name].[chunkhash:8].js'
    },
    plugins:[
        new UglifyJsParallelPlugin({
            workers: os.cpus().length,
            mangle: true,
            compressor: {
                warnings: false,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new webpack.BannerPlugin(
`author:wanghongxin
e-mail:wanghongxin@outlook.com
Copyrigh wanghongxin | Released under MIT license
*`      ),
    ],
};