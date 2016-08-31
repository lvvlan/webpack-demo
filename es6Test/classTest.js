/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Des
	 * Created by luowei5 on 2016/8/30.
	 * E-mail luowei5@jd.com
	 * Update 2016/8/30
	 */
	var Person = function () {
	    function Person(name, age) {
	        _classCallCheck(this, Person);

	        this.name = name;
	        this.age = age;
	    }

	    _createClass(Person, [{
	        key: 'showName',
	        value: function showName() {
	            console.log('name: ' + this.name);
	        }
	    }, {
	        key: 'showAge',
	        value: function showAge() {
	            console.log('age: ' + this.age);
	        }
	    }]);

	    return Person;
	}();

	var p1 = new Person('lemonleo', 18);

	p1.showName();

	var NewPerson = function (_Person) {
	    _inherits(NewPerson, _Person);

	    function NewPerson(x, y, sex) {
	        _classCallCheck(this, NewPerson);

	        var _this = _possibleConstructorReturn(this, (NewPerson.__proto__ || Object.getPrototypeOf(NewPerson)).call(this, x, y));

	        _this.sex = sex;
	        return _this;
	    }

	    _createClass(NewPerson, [{
	        key: 'showSex',
	        value: function showSex() {
	            console.log('sex: ' + this.sex);
	        }
	    }]);

	    return NewPerson;
	}(Person);

	var p2 = new NewPerson('newLemonleo', '20', 'boy');
	p2.showName();
	//console.log(p2);


	var Foo = function () {
	    function Foo() {
	        _classCallCheck(this, Foo);
	    }

	    _createClass(Foo, null, [{
	        key: 'classMethod',
	        value: function classMethod() {
	            console.log('这是一个静态方法，可以直接调用，不需要实例化~');
	        }
	    }]);

	    return Foo;
	}();

	Foo.classMethod();

	var Bar = function (_Foo) {
	    _inherits(Bar, _Foo);

	    function Bar() {
	        _classCallCheck(this, Bar);

	        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
	    }

	    _createClass(Bar, null, [{
	        key: 'classMethod',
	        value: function classMethod() {
	            _get(Bar.__proto__ || Object.getPrototypeOf(Bar), 'classMethod', this).call(this);
	            console.log('继承了父级的静态方法~');
	        }
	    }]);

	    return Bar;
	}(Foo);

	Bar.classMethod();

	var MyClass = function () {
	    function Me() {
	        _classCallCheck(this, Me);
	    }

	    _createClass(Me, [{
	        key: 'getClassName',
	        value: function getClassName() {
	            return Me.name;
	        }
	    }]);

	    return Me;
	}();

	var inst = new MyClass();

	console.log(inst.getClassName());

	var runNow = new (function () {
	    function _class(say) {
	        _classCallCheck(this, _class);

	        this.say = say;
	    }

	    _createClass(_class, [{
	        key: 'sayName',
	        value: function sayName() {
	            console.log(this.say);
	        }
	    }]);

	    return _class;
	}())('立即执行!');

	runNow.sayName();

	var Shape = function Shape(x, y) {
	    _classCallCheck(this, Shape);

	    if (new.target == Shape) {
	        throw new Error('本类不能实例化~！');
	    }

	    console.log(x, y);
	};

	var Angle = function (_Shape) {
	    _inherits(Angle, _Shape);

	    function Angle(x, y) {
	        _classCallCheck(this, Angle);

	        return _possibleConstructorReturn(this, (Angle.__proto__ || Object.getPrototypeOf(Angle)).call(this, x, y));
	    }

	    return Angle;
	}(Shape);

	//var x = new Shape(2);


	var y = new Angle(4, 6);

/***/ }
/******/ ]);