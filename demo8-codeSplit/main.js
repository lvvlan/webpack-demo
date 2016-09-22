/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
require.ensure(["./a"], function (require){
    var content = require("./a");

    document.open();
    document.write("<h1>"+content+"</h1>");
    document.close();
});

require.ensure(["./b1"], function (require){    //仅加载
    require('./b1');    //真正的执行
});
require.ensure(["./b2"], function (require){
    var b4 = require('react');
    require('./b3');
});