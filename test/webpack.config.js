/**
 * Des
 * Created by vlan on 2016/2/13.
 * E-mail lvvlan@sina.cn
 * Update 2016/2/13
 */
var webpack = require("webpack");

//注释
var notes = function (){
    var oDate = new Date();
    var YY = oDate.getFullYear(),
        MM = oDate.getMonth() + 1,
        DD = oDate.getDate(),
        h = oDate.getHours(),
        m = oDate.getMinutes(),
        s = oDate.getSeconds();

    var sTime = YY + "/" + MM + "/" + DD + " " + h + ":" + m + ":" + s;
    return "Des" + "\n" + "Created by vlan on " + sTime + "\n" + "E-mail lvvlan@sina.cn" + "\n" + "Update " + sTime;
};

module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    },
    plugins: [
        new webpack.BannerPlugin(notes())
    ],
    resolve: {
        //查找module的话从这里开始查找
        root: 'E:/more and more/webpack', //绝对路径
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};