/**
 * Des
 * Created by luowei5 on 2017/2/7.
 * E-mail luowei5@jd.com
 * Update 2017/2/7
 */
const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: {
        'dll-user': './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    //追加dll
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dist/vendor-manifest.json')
        }),
        new Visualizer({
            filename: './visualizer.html'
        })
    ]
};