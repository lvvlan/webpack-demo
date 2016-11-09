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
        bundle2: './async2.js'
    },
    output: {
        path: "./",
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
        new CommonsChunkPlugin("init.js")
    ]
};