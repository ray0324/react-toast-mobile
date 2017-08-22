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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__);



// notice: in develop mod we should import Toast T from  src directory
// import Toast , { T } from './src/index';


window.T = __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"];

var long_msg = '\n    <div style="text-align:justify">\n        \u6D77\u6C34\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5A01\u5C3C\u65AF\u5C31\u662F\u4E00\u4E2A\u6C34\u57CE\u3002\n        \u4EE5\u524D\u5BF9\u5A01\u5C3C\u65AF\u6CA1\u6709\u4EC0\u4E48\u7279\u522B\u5F3A\u70C8\u7684\u611F\u89C9\uFF0C\n        \u5BF9\u8BFB\u4E66\u7684\u65F6\u5019\u8BFB\u5230\u7684\u5A01\u5C3C\u65AF\u5DF2\u7ECF\u6CA1\u6709\u4E86\n        \u4EFB\u4F55\u8BB0\u5FC6\u3002\u6211\u4EEC\u4F4F\u5728\u4E3B\u5C9B\uFF0C\u5C31\u5728Mestre\n        \u706B\u8F66\u7AD9\u65C1\u8FB9\u7684\u6C11\u5BBF\uFF0C\u623F\u4E1C\u4EBA\u5F88\u597D\u3002\u6211\u4EEC\n        \u4F1A\u5446\u4E24\u5929\uFF0C\u6240\u4EE5\u4E70\u4E86\u4E00\u4E2A48\u5C0F\u65F6\u7684\n        travel pass\uFF0C\u4E00\u592920\u6B27\uFF0C\u4E24\u592930\u6B27\u3002\u9664\n        \u4E86\u706B\u8F66\uFF0Cbus\u548C\u8F6E\u6E21\u968F\u4FBF\u5750\uFF0C\u5237\u4E00\u4E0B\u5361\u5C31\u53EF\n        \u4EE5\u4E86\u3002\u6211\u4EEC\u53D1\u73B0\u706B\u8F66\u4F1A\u5FEB\u5F88\u591A\uFF0C\u6240\u4EE5\u6211\u4EEC\u90FD\n        \u4F1A\u9009\u62E9\u82B1\u4E00\u5757\u4E8C\u5750\u706B\u8F66\u62B5\u8FBEVenezia Santa\n        Lucia \u7136\u540E\u518D\u642D\u4E58\u8F6E\u6E21\u53BB\u5404\u4E2A\u5C0F\u5C9B\u3002\uFEFF\uFEFF<br />\n        \u6211\u4EEC\u5F00\u8F66\u4ECE\u4F5B\u7F57\u4F26\u8428\u62B5\u8FBE\u7684\u65F6\u5019\u5DF2\u7ECF\u508D\u665A\u4E86\uFF0C\n        \u6240\u4EE5\u6211\u4EEC\u51B3\u5B9A\u76F4\u63A5\u53BB\u770B\u770B\u5723\u9A6C\u53EF\u5927\u6559\u5802\u7684\u9EC4\n        \u660F\u4E0E\u591C\u666F\u3002\u8BF4\u5B9E\u8BDD\uFF0C\u65C5\u6E38\u524D\u9605\u8BFB\u653B\u7565\u4E0D\u53EF\u80FD\u7ED9\n        \u4F60\u628A\u6240\u6709\u7684\u4E8B\u60C5\u90FD\u51C6\u5907\u597D\uFF0C\u65C5\u6E38\u7684\u4E50\u8DA3\u5728\u4E8E\u4EAB\n        \u53D7\u65C5\u5BA2\u7684\u8EAB\u4EFD\uFF0C\u628A\u81EA\u5DF1\u5F53\u6210\u767D\u75F4\u52C7\u4E8E\u53BB\u95EE\u8DEF\u4EBA\n        \u4EFB\u4F55\u95EE\u9898\u3002<br />\u6211\u53D1\u73B0\u8FD9\u662F\u4E00\u79CD\u5F88\u5FEB\u6377\u7684\u65B9\n        \u5F0F\uFF0C\u4F46\u662F\u4E0D\u60F3\u95EE\u7684\u4E5F\u53EF\u4EE5\u4E34\u65F6\u67E5\u9605\u653B\u7565\u4E0E\u8C37\u6B4C\uFF0C\n        \u8FD9\u4E9B\u5F3A\u5927\u7684\u7F51\u7EDC\u8D44\u8BAF\u5171\u4EAB\u4F1A\u63D0\u4F9B\u4F60\u4E00\u5207\u60F3\u77E5\u9053\u7684\u3002\uFEFF\uFEFF\uFEFF\uFEFF\n        <br />\u4E0D\u5F97\u4E0D\u627F\u8BA4\uFF0C\u8E0F\u4E0A\u8F6E\u6E21\u7684\u77AC\u95F4\uFF0C\u6211\u8FD8\u662F\u88AB\n        \u773C\u524D\u7684\u666F\u8272\u6240\u6DF1\u6DF1\u5438\u5F15\u4E86\u3002\u4EE5\u4E3A\u770B\u8FC7\u4E86\u65E0\u6570\u7684\u6D77\u6C34\uFF0C\n        \u5374\u6B62\u4E0D\u4F4F\u518D\u6B21\u4E3A\u8FD9\u7247\u6D77\u4E0A\u4E50\u571F\u6240\u52A8\u5BB9\u3002\u5A01\u5C3C\u65AF\u7684\u7F8E\uFF0C\n        \u662F\u5177\u6709\u5192\u9669\u7CBE\u795E\u7684\u3002\u770B\u7740\u4E00\u5EA7\u5EA7\u957F\u5728\u6C34\u679C\u7684\u623F\u5B50\uFF0C\n        \u6211\u4E0D\u5F97\u4E0D\u62C5\u5FE7\u4E07\u4E00\u6DA8\u6F6E\uFF0C\u6D77\u6C34\u5C31\u4F1A\u6D8C\u5165\u5BB6\u91CC\u7684\u573A\u666F\u3002\uFEFF\uFEFF\n    </div>\n';

var styles = {
    btn: {
        height: '40px',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '40px',
        borderRadius: '3px',
        marginBottom: '30px',
        boxSizing: 'border-box',
        background: '#007bff'
    },
    btn1: {
        background: '#007bff'
    }
};

var App = function App() {

    var click1 = function click1() {
        __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].confirm({
            title: '标题',
            message: '消息',
            option: [{
                text: '点赞',
                fn: function fn() {
                    return alert('很赞');
                }
            }, {
                text: '残忍拒绝',
                fn: function fn() {
                    return alert('太残忍');
                }
            }, {
                text: '取消'
            }]
        });
    };

    var click2 = function click2() {
        __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].confirm({
            message: long_msg,
            option: [{
                text: '确定',
                fn: function fn() {
                    return __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].notify('已确定。');
                }
            }, {
                text: '取消'
            }]
        });
    };

    var click3 = function click3() {
        __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].loading('加载中');
        setTimeout(__WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].loaded, 2000);
    };
    var click4 = function click4() {
        __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].progress.start('视频上传中');
        var i = 0.1;
        var interval = setInterval(function () {
            i += 0.1 * Math.random();
            if (i >= 1) {
                clearInterval(interval);
                i = 1;
                __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].progress.done('上传完成!');
                return;
            };
            __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].progress.set(i);
        }, 200);
    };
    var click5 = function click5() {
        return __WEBPACK_IMPORTED_MODULE_2_react_toast_mobile__["T"].notify('密码错误');
    };

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_toast_mobile___default.a, null),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h1',
            null,
            'Toast Demo'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: { padding: '40px' } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'btn btn1', onClick: click1 },
                ' \u786E\u8BA4\u591A\u6309\u94AE(confirm)'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'btn btn2', onClick: click2 },
                ' \u786E\u8BA4\u957F\u6D88\u606F(confirm)'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'btn btn3', onClick: click3 },
                '\u52A0\u8F7D\u4E2D(loading)'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'btn btn4', onClick: click4 },
                '\u8FDB\u5EA6\u6761(progress)'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'btn btn5', onClick: click5 },
                '\u63D0\u793A(notify)'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'tips' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'strong',
                null,
                '\u63D0\u793A:'
            ),
            '\u6253\u5F00\u63A7\u5236\u53F0\u5728\u8F93\u5165`T`\u53EF\u4EE5\u8C03\u7528\uFF0C\u5982`T.alert(\'Hello,react\')`'
        )
    );
};

__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })
/******/ ]);