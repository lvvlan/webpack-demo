/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
var foo = {
    show: function (){
        return "foo.show"
    }
};

var show = function (){

};

let a = 3;

let suma = function (){
    a++;
};

show.prototype = {
    init: function (){
        console.log("show.init");
    }
};

var test = "bar";

export {test};

export {a, suma};

export default foo;

setTimeout(function (){
    test = "baz";
}, 500);