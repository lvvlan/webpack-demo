/**
 * Des
 * Created by luowei5 on 2016/8/26.
 * E-mail luowei5@jd.com
 * Update 2016/8/26
 */
var $ = require("jquery"),
    React = require('react'),
    ReactDom = require('react-dom');

console.log(ReactDom.render);

ReactDom.render(
    <p>测试测试</p>,
    document.querySelector('#reactBox')
);

$("h1").html("Hello World~!~");