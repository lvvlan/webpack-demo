/**
 * Des
 * Created by luowei5 on 2016/11/9.
 * E-mail luowei5@jd.com
 * Update 2016/11/9
 */

// require('./common1');
// require('./common2');

setTimeout(function (){
    require.ensure([], function (require){
        require('./common1');
        require('./common2');

    });
}, 5000);
setTimeout(function (){
    require.ensure([], function (require){
        require('./common1');
        require('./common2');

    });
}, 8000);