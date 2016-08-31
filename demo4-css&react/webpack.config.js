/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
module.exports = {
    entry: "./main.js",
    output: {
        path: "./",
        filename: "bundle.js"
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
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader?modules"
            }
        ]
    }
};