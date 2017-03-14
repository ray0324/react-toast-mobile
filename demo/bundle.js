webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _toast = __webpack_require__(178);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.T = _toast.T;

	// 合并reducer
	// const rootReducer = combineReducers({ toast });

	// 日志中间件
	// const logger = store => next => action => {
	//     console.log('%c[DISPATCH]', 'color: #61afef;', action);
	//     let result = next(action);
	//     console.log('%c[NEXT_STATE]', 'color: #56b6c2;', store.getState());
	//     return result;
	// };

	// const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);

	// 创建store
	// const store = createStoreWithMiddleware(rootReducer);

	// import { Provider } from 'react-redux';
	// import { createStore, combineReducers, applyMiddleware } from 'redux';
	// import reduxThunk from 'redux-thunk';
	_reactDom2.default.render(_react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(_toast2.default, null),
	    _react2.default.createElement(
	        'h1',
	        null,
	        'Toast \u7EC4\u4EF6\u6D4B\u8BD5'
	    )
	), document.querySelector('.root'));

	/*  01  */
	// T.alert('hello world');
	// T.alert('hello world2');

	/*  02  */
	// T.alert({
	//     title: 'hello world',
	//     message: 'This is details for hello world his is details for hello world',
	//     text: '好的',
	//     fn: () => console.log('好的')
	// });

	/*  03  */
	// T.confirm({
	//     title: '标题',
	//     message: '消息',
	//     option: [{
	//         text: '好的',
	//         fn: () => {
	//             alert('好的');
	//         }
	//     }, {
	//         text: '不行'
	//     }]
	// });

	/*  04  */
	//T.loading();
	/*  05  */
	// T.loaded();

	// T.notify('This is a Notify Msg!');
	// T.notify({
	//     message: 'This is a Notify Msg!'
	// });

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.T = undefined;

	var _eventservice = __webpack_require__(179);

	Object.defineProperty(exports, 'T', {
	  enumerable: true,
	  get: function get() {
	    return _eventservice.T;
	  }
	});

	__webpack_require__(181);

	var _toast = __webpack_require__(185);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _toast2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.T = exports.E = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _types = __webpack_require__(180);

	var TYPES = _interopRequireWildcard(_types);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EventService = function () {
	    function EventService() {
	        _classCallCheck(this, EventService);

	        this.registry = {};
	    }
	    // 绑定事件


	    _createClass(EventService, [{
	        key: 'on',
	        value: function on(key, callback) {
	            if (typeof this.registry[key] === 'undefined') {
	                this.registry[key] = [];
	            }
	            this.registry[key].push(callback);
	        }

	        // 解除事件绑定

	    }, {
	        key: 'off',
	        value: function off(key, callback) {
	            if (typeof this.registry[key] === 'undefined') {
	                return;
	            }
	            var queue = this.registry[key];
	            var i = queue.length;
	            while (i--) {
	                if (queue[i] === callback) {
	                    queue.splice(i, 1);
	                }
	            }
	        }

	        //解除所有绑定

	    }, {
	        key: 'clearAllEvents',
	        value: function clearAllEvents() {
	            this.registry = {};
	        }

	        // 触发事件

	    }, {
	        key: 'emit',
	        value: function emit(key, args) {
	            if (typeof this.registry[key] === 'undefined') {
	                return;
	            }
	            var queue = this.registry[key];
	            for (var i = 0, l = queue.length; i < l; i++) {
	                queue[i].call(null, args);
	            }
	        }
	    }]);

	    return EventService;
	}();

	var E = exports.E = new EventService();

	var T = exports.T = {
	    loading: function loading() {
	        return E.emit(TYPES.SHOW_LOADING);
	    },
	    loaded: function loaded() {
	        return E.emit(TYPES.HIDE_LOADING);
	    },
	    confirm: function confirm(args) {
	        return E.emit(TYPES.SHOW_CONFIRM, args);
	    },
	    alert: function alert(args) {
	        return E.emit(TYPES.SHOW_ALERT, args);
	    },
	    notify: function notify(args) {
	        return E.emit(TYPES.SHOW_NOTICE, args);
	    },
	    progress: {
	        start: function start() {
	            return E.emit(TYPES.SHOW_PROGRESS);
	        },
	        set: function set(progress) {
	            return E.emit(TYPES.SET_PROGRESS, progress);
	        },
	        done: function done() {
	            return E.emit(TYPES.HIDE_PROGRESS);
	        }
	    },
	    clear: function clear() {
	        return E.emit(TYPES.CLEAR);
	    }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventservice.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// Loading
	var SHOW_LOADING = exports.SHOW_LOADING = '@toast/loading/show';
	var HIDE_LOADING = exports.HIDE_LOADING = '@toast/loading/hide';
	// confirm
	var SHOW_CONFIRM = exports.SHOW_CONFIRM = '@toast/confirm/show';
	// alert
	var SHOW_ALERT = exports.SHOW_ALERT = '@toast/alert/show';
	// notice
	var SHOW_NOTICE = exports.SHOW_NOTICE = '@toast/notice/show';
	// progress
	var SHOW_PROGRESS = exports.SHOW_PROGRESS = '@toast/progress/show';
	var SET_PROGRESS = exports.SET_PROGRESS = '@toast/progress/set';
	var HIDE_PROGRESS = exports.HIDE_PROGRESS = '@toast/progress/done';
	// clear
	var CLEAR = exports.CLEAR = '@toast/clear';

	// default text
	var TEXT = exports.TEXT = ['\u786E\u5B9A', '\u53D6\u6D88'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "types.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(182);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(184)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./toast.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./toast.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(183)();
	// imports


	// module
	exports.push([module.id, ".toast-root {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.3);\n  user-select: none;\n}\n.toast-window {\n  margin-top: -80px;\n  width: 260px;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  user-select: none;\n}\n.toast-window-head {\n  font-size: 14px;\n  height: 40px;\n  user-select: none;\n  text-align: center;\n  line-height: 40px;\n  font-weight: bold;\n}\n.toast-window-body {\n  font-size: 12px;\n  padding: 10px 15px;\n  line-height: 30px;\n  text-align: center;\n  user-select: none;\n}\n.toast-window-foot {\n  width: 100%;\n  position: relative;\n}\n.toast-window-foot:before {\n  content: ' ';\n  border-top: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  transform: scaleY(0.5);\n  transform-origin: center top;\n}\n.toast-btn-item {\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  box-sizing: border-box;\n  user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  color: #056beb;\n}\n.toast-btn-item.top-bottom {\n  width: 100%;\n}\n.toast-btn-item.left-right {\n  width: 50%;\n  float: left;\n}\n.toast-btn-item:active {\n  background: rgba(0, 0, 0, 0.15);\n}\n.toast-btn-item + .toast-btn-item.top-bottom:before {\n  content: ' ';\n  border-top: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: scaleY(0.5);\n  transform-origin: center top;\n}\n.toast-btn-item + .toast-btn-item.left-right:before {\n  content: ' ';\n  border-left: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0.5);\n  transform-origin: center left;\n}\n.notice {\n  height: 50px;\n  padding: 0 30px;\n  background: rgba(0, 0, 0, 0.85);\n  border-radius: 8px;\n  display: flex;\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n}\n.modal-enter {\n  opacity: 0.01;\n  transform: translate3d(0, 0, 0) scale(1.185);\n}\n.modal-enter.modal-enter-active {\n  transform: translate3d(0, 0, 0) scale(1.185);\n  opacity: 1;\n  transition: all 0.5s ease;\n}\n.modal-leave {\n  opacity: 1;\n}\n.modal-leave.modal-leave-active {\n  opacity: 0.01;\n  transition: all 0.5s ease-in;\n}\n.modal-appear {\n  opacity: 0.01;\n  transition: opacity 0.5s ease-in;\n}\n.modal-appear.modal-appear-active {\n  opacity: 1;\n}\n/* ============ Preloader ============ */\n.preloader-indicator-overlay {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: 10600;\n  visibility: hidden;\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n  visibility: visible;\n  opacity: 0;\n  background: none;\n}\n.preloader-indicator-modal {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  padding: 13px;\n  margin-left: -30px;\n  margin-top: -30px;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 11000;\n  border-radius: 5px;\n}\n.preloader-indicator-modal .preloader {\n  display: block;\n  width: 34px;\n  height: 34px;\n}\n.preloader {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  -webkit-transform-origin: 50%;\n  transform-origin: 50%;\n  -webkit-animation: preloader-spin 1s steps(12, end) infinite;\n  animation: preloader-spin 1s steps(12, end) infinite;\n}\n.preloader:after {\n  display: block;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n  background-position: 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.preloader-white:after {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n}\n@-webkit-keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n@keyframes preloader-spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n/* ============ End Preloader ============ */\n", ""]);

	// exports


/***/ },

/***/ 183:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _types = __webpack_require__(180);

	var TYPES = _interopRequireWildcard(_types);

	var _eventservice = __webpack_require__(179);

	var _preloader = __webpack_require__(186);

	var _preloader2 = _interopRequireDefault(_preloader);

	var _modal = __webpack_require__(187);

	var _modal2 = _interopRequireDefault(_modal);

	var _notice = __webpack_require__(188);

	var _notice2 = _interopRequireDefault(_notice);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Progress from './progress';


	// 生成GUID字符串
	function guid() {
	    var r = function r() {
	        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	    };
	    return r() + r() + r() + '-' + r() + '_' + r() + '-' + r() + '_' + r() + r() + r();
	}

	var Toast = function (_Component) {
	    _inherits(Toast, _Component);

	    function Toast() {
	        _classCallCheck(this, Toast);

	        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this));

	        _this.state = {
	            loading: false, // loading 状态
	            notices: [],
	            progress: {
	                txt: '',
	                percent: 0,
	                show: false
	            },
	            modals: []
	        };
	        return _this;
	    }

	    _createClass(Toast, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            // 加载loading
	            _eventservice.E.on(TYPES.SHOW_LOADING, function () {
	                _this2.setState({ loading: true });
	            });

	            // 关闭loading
	            _eventservice.E.on(TYPES.HIDE_LOADING, function () {
	                _this2.setState({ loading: false });
	            });

	            // 打开alert
	            _eventservice.E.on(TYPES.SHOW_ALERT, function (args) {
	                var modals = _this2.state.modals;
	                // 对象形式
	                // T.alert({title:'hello world',message:'',text: 'ok',fn:okFn})
	                if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object') {
	                    modals.push({
	                        id: guid(),
	                        title: args.title,
	                        message: args.message,
	                        option: [{
	                            text: args.text || TYPES.TEXT[0],
	                            fn: args.fn
	                        }]
	                    });
	                } else {
	                    // 普通形式
	                    // T.alert('hello world')
	                    modals.push({
	                        id: guid(),
	                        title: '',
	                        message: args,
	                        option: [{
	                            text: TYPES.TEXT[0]
	                        }]
	                    });
	                }
	                _this2.setState({ loading: false, modals: modals });
	            });

	            _eventservice.E.on(TYPES.SHOW_CONFIRM, function (args) {
	                var modals = _this2.state.modals;
	                // 为每组数据添加一个guid
	                args.id = guid();
	                modals.push(args);
	                _this2.setState({ loading: false, modals: modals });
	            });

	            _eventservice.E.on(TYPES.SHOW_NOTICE, function (args) {
	                var notices = _this2.state.notices;
	                // 为每组数据添加一个guid
	                notices.push({
	                    id: guid(),
	                    duration: 2000,
	                    message: args
	                });
	                _this2.setState({ loading: false, notices: notices });
	            });

	            // E.on(TYPES.SHOW_PROGRESS, txt => this.setState({
	            //     loading: false,
	            //     progress: {
	            //         txt: txt,
	            //         percent: 0,
	            //         show: true
	            //     }
	            // }));
	            //
	            // E.on(TYPES.SET_PROGRESS, percent => this.setState({
	            //     progress: {
	            //         percent: percent,
	            //         show: true
	            //     }
	            // }));
	            //
	            // E.on(TYPES.HIDE_PROGRESS, () => this.setState({
	            //     progress: {
	            //         txt: '',
	            //         percent: 0,
	            //         show: false
	            //     }
	            // }));

	            _eventservice.E.on(TYPES.CLEAR, function () {
	                return _this2.setState({
	                    loading: false,
	                    modals: []
	                });
	            });
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            console.log('curState:', this.state);
	            console.log('nextState:', nextState);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 解绑事件
	            _eventservice.E.clearAllEvents();
	        }

	        // 关闭指定的弹窗

	    }, {
	        key: 'closeModal',
	        value: function closeModal(id) {
	            var modals = this.state.modals.filter(function (item) {
	                return item.id !== id;
	            });
	            this.setState({ modals: modals });
	        }

	        // 关闭指定的小提示

	    }, {
	        key: 'closeNotice',
	        value: function closeNotice(id) {
	            var notices = this.state.notices.filter(function (item) {
	                return item.id !== id;
	            });
	            console.log();
	            this.setState({ notices: notices });
	        }
	    }, {
	        key: '_renderModal',
	        value: function _renderModal() {
	            var item = this.state.modals[0];
	            if (!item) {
	                return null;
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-root' },
	                _react2.default.createElement(_modal2.default, {
	                    id: item.id,
	                    title: item.title,
	                    message: item.message,
	                    option: item.option,
	                    close: this.closeModal.bind(this)
	                })
	            );
	        }
	    }, {
	        key: '_renderNotice',
	        value: function _renderNotice() {
	            var item = this.state.notices[0];
	            if (!item) {
	                return null;
	            }
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-root' },
	                _react2.default.createElement(_notice2.default, {
	                    id: item.id,
	                    close: this.closeNotice.bind(this),
	                    duration: item.duration,
	                    message: item.message })
	            );
	        }
	    }, {
	        key: '_renderPreloader',
	        value: function _renderPreloader() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-root' },
	                _react2.default.createElement(_preloader2.default, null)
	            );
	        }
	    }, {
	        key: '_renderProgress',
	        value: function _renderProgress() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-root' },
	                _react2.default.createElement(Progress, { percent: this.state.progress.percent })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.state.modals.length > 0) {
	                return this._renderModal();
	            }
	            if (this.state.notices.length > 0) {
	                return this._renderNotice();
	            }
	            if (this.state.loading) {
	                return this._renderPreloader();
	            }
	            if (this.state.progress.show) {
	                return this._renderProgress();
	            }
	            return null;
	        }
	    }]);

	    return Toast;
	}(_react.Component);

	exports.default = Toast;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toast.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Preloader = function (_Component) {
	    _inherits(Preloader, _Component);

	    function Preloader() {
	        _classCallCheck(this, Preloader);

	        return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
	    }

	    _createClass(Preloader, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement('div', { className: 'preloader-indicator-overlay' }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'preloader-indicator-modal' },
	                    _react2.default.createElement('span', { className: 'preloader preloader-white' })
	                )
	            );
	        }
	    }]);

	    return Preloader;
	}(_react.Component);

	Preloader.propTypes = {
	    type: _react.PropTypes.string,
	    color: _react.PropTypes.string
	};
	Preloader.defaultProps = {
	    type: 'spin',
	    color: '#f60'
	};
	exports.default = Preloader;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "preloader.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Modal = function (_Component) {
	    _inherits(Modal, _Component);

	    function Modal() {
	        _classCallCheck(this, Modal);

	        return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
	    }

	    _createClass(Modal, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                title = _props.title,
	                message = _props.message,
	                option = _props.option,
	                close = _props.close;

	            var len = option.length;
	            var classNames = len === 2 ? 'toast-btn-item left-right' : 'toast-btn-item top-bottom';
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-window' },
	                title && _react2.default.createElement(
	                    'div',
	                    { className: 'toast-window-head' },
	                    title
	                ),
	                message && _react2.default.createElement('div', { className: 'toast-window-body', dangerouslySetInnerHTML: { __html: message } }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'toast-window-foot' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'toast-btn-group' },
	                        option.map(function (item, i) {
	                            return _react2.default.createElement(
	                                'div',
	                                { key: i, className: classNames, onClick: function onClick() {
	                                        item.fn && item.fn();
	                                        close(_this2.props.id);
	                                    } },
	                                item.text
	                            );
	                        })
	                    )
	                )
	            );
	        }
	    }]);

	    return Modal;
	}(_react.Component);

	Modal.propTypes = {
	    id: _react.PropTypes.string,
	    title: _react.PropTypes.string,
	    message: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    option: _react.PropTypes.array
	};
	Modal.defaultProps = {
	    option: []
	};
	exports.default = Modal;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "modal.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notice = function (_Component) {
	    _inherits(Notice, _Component);

	    function Notice() {
	        _classCallCheck(this, Notice);

	        return _possibleConstructorReturn(this, (Notice.__proto__ || Object.getPrototypeOf(Notice)).apply(this, arguments));
	    }

	    _createClass(Notice, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            console.log('componentDidMount:', this.props);
	            setTimeout(function () {
	                _this2.props.close(_this2.props.id);
	            }, this.props.duration);
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.id === nextProps.id) {
	                return false;
	            } else {
	                return true;
	            }
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            var _this3 = this;

	            // console.log('curProps:', this.props);
	            console.log('componentWillUpdate:', nextProps);
	            setTimeout(function () {
	                _this3.props.close(_this3.props.id);
	            }, this.props.duration);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'notice' },
	                this.props.message
	            );
	        }
	    }]);

	    return Notice;
	}(_react.Component);

	Notice.propTypes = {
	    id: _react.PropTypes.string,
	    message: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    duration: _react.PropTypes.number
	};
	exports.default = Notice;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("G:\\react\\react-redux-component-dev\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "notice.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ }

});