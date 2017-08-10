/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
/*
* 不能将异步引用的公共模块进行公共提取
* */

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry: {
        /*bundle1: "./main1.jsx",
        bundle2: "./main2.jsx",*/
        bundle1: './async1.js',
        bundle2: './async2.js'/*,
        vendor: ['./common1']*/
    },
    output: {
        path: "./dest",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vendor',
            //filename: 'init.js'
            minChunks: function (module, count) {
                console.log(module.resource);
            }
        })/*,
        new CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        })*/
    ]
};