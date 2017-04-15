/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

var _TV = __webpack_require__(14);

var _TV2 = _interopRequireDefault(_TV);

var _ShowIndex = __webpack_require__(13);

var _ShowIndex2 = _interopRequireDefault(_ShowIndex);

var _Show = __webpack_require__(12);

var _Show2 = _interopRequireDefault(_Show);

var _Movies = __webpack_require__(11);

var _Movies2 = _interopRequireDefault(_Movies);

var _MovieIndex = __webpack_require__(10);

var _MovieIndex2 = _interopRequireDefault(_MovieIndex);

var _Movie = __webpack_require__(9);

var _Movie2 = _interopRequireDefault(_Movie);

var _Welcome = __webpack_require__(15);

var _Welcome2 = _interopRequireDefault(_Welcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleEnter() {
    console.log('Enter...');
}

function handleLeave() {
    console.log('Leave...');
}

var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/tv', component: _TV2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _ShowIndex2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/show/:id', component: _Show2.default, onEnter: handleEnter, onLeave: handleLeave }),
        _react2.default.createElement(_reactRouter.Redirect, { from: 'show/:id', to: '/show/:id' })
    ),
    _react2.default.createElement(
        _reactRouter.Route,
        { path: '/movies', component: _Movies2.default },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _MovieIndex2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: '/movies/:userName/:repoName', component: _Movie2.default })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: '/welcome', component: _Welcome2.default })
);

exports.default = routes;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.14 0014.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var query = 'date';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'componentWillMount',


        // App 完成 加载

        value: function componentWillMount() {
            console.log('App 即将 显示');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('App 完成 显示');
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
            console.log('App 即将 接受 props');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('App 即将 更新');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('App 完成 更新');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactRouter.IndexLink,
                    { to: '/', activeStyle: { color: 'red' } },
                    '\u9996\u9875'
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    ' - | - '
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/tv?orderBy=' + query, activeStyle: { color: 'red' } },
                    'TV'
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    ' - | - '
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/movies', activeStyle: { color: 'red' } },
                    'Movies'
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    ' - | - '
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/welcome', activeStyle: { color: 'red' } },
                    'Welcome'
                ),
                _react2.default.createElement('hr', null),
                this.props.children
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ige16 on 2017.4.16 0016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('Home 即将 显示');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('Home 完成 显示');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('Home 即将 更新');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('Home 完成 更新');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Home 即将 移除');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u9996\u9875\u5185\u5BB9'
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.16 0016.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_React$Component) {
    _inherits(Movie, _React$Component);

    function Movie(props) {
        _classCallCheck(this, Movie);

        var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

        console.log(_this.props);
        return _this;
    }

    _createClass(Movie, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h6',
                    null,
                    this.props.params.userName
                ),
                _react2.default.createElement(
                    'h6',
                    null,
                    this.props.params.repoName
                )
            );
        }
    }]);

    return Movie;
}(_react2.default.Component);

exports.default = Movie;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.16 0016.
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieIndex = function (_React$Component) {
    _inherits(MovieIndex, _React$Component);

    function MovieIndex() {
        _classCallCheck(this, MovieIndex);

        return _possibleConstructorReturn(this, (MovieIndex.__proto__ || Object.getPrototypeOf(MovieIndex)).apply(this, arguments));
    }

    _createClass(MovieIndex, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u7535\u5F71\u7684\u672A\u6765 \u600E\u4E48\u600E\u4E48\u6EF4... \u6BD4\u5982... '
                )
            );
        }
    }]);

    return MovieIndex;
}(_react2.default.Component);

exports.default = MovieIndex;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.16 0016.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movies = function (_React$Component) {
    _inherits(Movies, _React$Component);

    function Movies() {
        _classCallCheck(this, Movies);

        return _possibleConstructorReturn(this, (Movies.__proto__ || Object.getPrototypeOf(Movies)).apply(this, arguments));
    }

    _createClass(Movies, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var userName = event.target.elements[0].value;
            var repo = event.target.elements[1].value;
            var path = '/movies/' + userName + '/' + repo;
            console.log(event.target.elements);
            _reactRouter.browserHistory.push(path);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u7535\u5F71\u5217\u8868...'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/movies/\u597D\u83B1\u575E/\u963F\u7518\u6B63\u4F20', activeStyle: { color: "red" } },
                            '\u963F\u7518\u6B63\u4F20'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/movies/\u56FD\u5185/\u50AC\u7720\u5927\u5E08', activeStyle: { color: "red" } },
                            '\u50AC\u7720\u5927\u5E08'
                        )
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    _react2.default.createElement('input', { type: 'text', placeholder: '\u5730\u533A' }),
                    ' / ',
                    ' ',
                    _react2.default.createElement('input', { type: 'text', placeholder: '\u540D\u5B57' }),
                    ' ',
                    _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Go'
                    )
                ),
                this.props.children
            );
        }
    }]);

    return Movies;
}(_react2.default.Component);

exports.default = Movies;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.14 0014.
 */


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Show = function (_React$Component) {
    _inherits(Show, _React$Component);

    function Show(props) {
        _classCallCheck(this, Show);

        var _this = _possibleConstructorReturn(this, (Show.__proto__ || Object.getPrototypeOf(Show)).call(this, props));

        console.log(_this.props.params);

        console.log(_this.props);

        return _this;
    }

    _createClass(Show, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h4',
                    null,
                    '\u8282\u76EE ',
                    this.props.params.id
                )
            );
        }
    }]);

    return Show;
}(_react2.default.Component);

exports.default = Show;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.16 0016.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowIndex = function (_React$Component) {
    _inherits(ShowIndex, _React$Component);

    function ShowIndex() {
        _classCallCheck(this, ShowIndex);

        return _possibleConstructorReturn(this, (ShowIndex.__proto__ || Object.getPrototypeOf(ShowIndex)).apply(this, arguments));
    }

    _createClass(ShowIndex, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('ShowIndex 即将 显示');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('ShowIndex 完成 显示');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('ShowIndex 即将 更新');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('ShowIndex 完成 更新');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('ShowIndex 即将 移除');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    '\u8FD9\u662F\u4E00\u4E2A\u7ADE\u4E89\u7684\u65F6\u4EE3...'
                )
            );
        }
    }]);

    return ShowIndex;
}(_react2.default.Component);

exports.default = ShowIndex;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.14 0014.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TV = function (_React$Component) {
    _inherits(TV, _React$Component);

    function TV(props) {
        _classCallCheck(this, TV);

        var _this = _possibleConstructorReturn(this, (TV.__proto__ || Object.getPrototypeOf(TV)).call(this, props));

        console.log(_this.props);

        console.log(_this.props.location.query);
        return _this;
    }

    _createClass(TV, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            console.log('TV 即将 显示');
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('TV 完成 显示');
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            console.log('TV 即将 更新');
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            console.log('TV 完成 更新');
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('TV 即将 移除');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h2',
                    null,
                    '\u7535\u89C6\u8282\u76EE\u5217\u8868'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/show/\u4EBA\u6C11\u7684\u540D\u4E49', activeStyle: { color: "red" } },
                            '\u4EBA\u6C11\u7684\u540D\u4E49'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/show/\u7405\u740A\u699C', activeStyle: { color: "red" } },
                            '\u7405\u740A\u699C'
                        )
                    )
                ),
                this.props.children
            );
        }
    }]);

    return TV;
}(_react2.default.Component);

exports.default = TV;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by ige16 on 2017.4.16 0016.
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome() {
        _classCallCheck(this, Welcome);

        return _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).apply(this, arguments));
    }

    _createClass(Welcome, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'h2',
                null,
                'Welcome'
            );
        }
    }]);

    return Welcome;
}(_react2.default.Component);

exports.default = Welcome;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(5);

var _path2 = _interopRequireDefault(_path);

var _compression = __webpack_require__(3);

var _compression2 = _interopRequireDefault(_compression);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _reactRouter = __webpack_require__(1);

var _routes = __webpack_require__(2);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _compression2.default)());

// serve our static stuff like index.css
app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // hey we made it!
      var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function renderPage(appHtml) {
  return '\n    <!doctype html public="storage">\n    <html>\n    <meta charset=utf-8/>\n    <title>My First React Router App</title>\n    <link rel=stylesheet href=/index.css>\n    <div id=app>' + appHtml + '</div>\n    <script src="/bundle.js"></script>\n   ';
}

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT);
});

/***/ })
/******/ ]);