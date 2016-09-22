/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./main.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "css-loader测试",
            template: "./demo.html",
            filename: "html/index.html"
        }),
        new ExtractTextPlugin("[name].css")
    ]
};