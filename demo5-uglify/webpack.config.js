/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
const webpack = require("webpack");
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry: "./main.js",
    output: {
        filename: "bundle.js"
    },
    plugins: [
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};