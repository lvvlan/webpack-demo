/**
 * Des
 * Created by luowei5 on 2017/2/7.
 * E-mail luowei5@jd.com
 * Update 2017/2/7
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist', '[name]-manifest.json'),
            name: '[name]_library'
        })
    ]
};
