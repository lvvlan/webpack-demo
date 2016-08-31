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