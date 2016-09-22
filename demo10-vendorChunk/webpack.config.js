/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
const webpack = require("webpack");

module.exports = {
    entry: {
        app: "./main.js",
        //vendor: ["jquery", 'react', 'react-dom'],
        jquery: ['jquery'],
        react: ['react', 'react-dom']
    },
    output: {
        path: "./",
        publishPath: "./",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['react', 'jquery']
        })
    ],
    watch: true
};

/*
module.exports = {
    entry: {
        app: "./main.js"
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ]
};*/
