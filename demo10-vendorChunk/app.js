webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Des
	 * Created by luowei5 on 2016/8/26.
	 * E-mail luowei5@jd.com
	 * Update 2016/8/26
	 */
	var $ = __webpack_require__(1),
	    React = __webpack_require__(2),
	    ReactDom = __webpack_require__(35);

	console.log(ReactDom.render);

	ReactDom.render(React.createElement(
	    'p',
	    null,
	    '测试测试'
	), document.querySelector('#reactBox'));

	$("h1").html("Hello World~!~");

/***/ }
]);