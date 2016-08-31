/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
const webpack = require("webpack");

module.exports = {
    entry: {
        //app: "./main.js",
        //es6Test: "./test.js",
        classTest: "./class.js"
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};