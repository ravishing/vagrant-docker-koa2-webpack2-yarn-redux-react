const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
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
    ],
};