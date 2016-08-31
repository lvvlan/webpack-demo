/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin"); //有BUG 使用后创建的html、js不可见。。。

module.exports = {
    entry: "./main.js",
    output: {
        path: "dist",
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack-demos",
            filename: "index.html"
        }),
        new OpenBrowserPlugin({
            url: "http://localhost:8080"
        })
    ]
};