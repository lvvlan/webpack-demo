/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
const webpack = require("webpack");

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.parse(process.env.webpackDebug || "false")
});
console.log(process.env.webpackDebug);
module.exports = {
    entry: "./main.js",
    output: {
        path: "./",
        filename: "bundle.js"
    },
    plugins: [devFlagPlugin]
};