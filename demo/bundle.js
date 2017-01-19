webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _react = __webpack_require__(98);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(99);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _toast = __webpack_require__(189);

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


	// T.confirm({
	//     title: '标题',
	//     message: '消息',
	//     option: [{
	//         text: '好的',
	//         fn: () => {
	//             alert('好的');
	//             alert('ok');
	//         }
	//     }, {
	//         text: '不行',
	//         fn: () => alert('不行')
	//     }, {
	//         text: '好的',
	//         fn: () => alert('好的')
	//     }, {
	//         text: '不行',
	//         fn: () => alert('不行')
	//     }]
	// });
	// T.confirm({
	//     title: '标题2',
	//     message: '消息',
	//     option: [{
	//         text: '好的',
	//         fn: () => alert('好的')
	//     }, {
	//         text: '不行',
	//         fn: () => alert('不行')
	//     }]
	// });
	// T.alert({
	//     title: 'hello world',
	//     message: 'This is details for hello world his is details for hello world',
	//     text: '好的',
	//     fn: () => console.log('好的')
	// });
	// setTimeout(()=>{
	//     T.alert({
	//         title: 'hello world',
	//         message: 'This is details for hello world his is details for hello world',
	//         text: '好的',
	//         fn: () => console.log('好的')
	//     });
	// }, 3000);

	// T.loading();

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(3);

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var makePatchReactClass = __webpack_require__(4);

	/**
	 * Returns a function that, when invoked, patches a React class with a new
	 * version of itself. To patch different classes, pass different IDs.
	 */
	module.exports = function makeMakeHot(getRootInstances, React) {
	  if (typeof getRootInstances !== 'function') {
	    throw new Error('Expected getRootInstances to be a function.');
	  }

	  var patchers = {};

	  return function makeHot(NextClass, persistentId) {
	    persistentId = persistentId || NextClass.displayName || NextClass.name;

	    if (!persistentId) {
	      console.error(
	        'Hot reload is disabled for one of your types. To enable it, pass a ' +
	        'string uniquely identifying this class within this current module ' +
	        'as a second parameter to makeHot.'
	      );
	      return NextClass;
	    }

	    if (!patchers[persistentId]) {
	      patchers[persistentId] = makePatchReactClass(getRootInstances, React);
	    }

	    var patchReactClass = patchers[persistentId];
	    return patchReactClass(NextClass);
	  };
	};

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var makeAssimilatePrototype = __webpack_require__(5),
	    requestForceUpdateAll = __webpack_require__(6);

	function hasNonStubTypeProperty(ReactClass) {
	  if (!ReactClass.hasOwnProperty('type')) {
	    return false;
	  }

	  var descriptor = Object.getOwnPropertyDescriptor(ReactClass, 'type');
	  if (typeof descriptor.get === 'function') {
	    return false;
	  }

	  return true;
	}

	function getPrototype(ReactClass) {
	  var prototype = ReactClass.prototype,
	      seemsLegit = prototype && typeof prototype.render === 'function';

	  if (!seemsLegit && hasNonStubTypeProperty(ReactClass)) {
	    prototype = ReactClass.type.prototype;
	  }

	  return prototype;
	}

	/**
	 * Returns a function that will patch React class with new versions of itself
	 * on subsequent invocations. Both legacy and ES6 style classes are supported.
	 */
	module.exports = function makePatchReactClass(getRootInstances, React) {
	  var assimilatePrototype = makeAssimilatePrototype(),
	      FirstClass = null;

	  return function patchReactClass(NextClass) {
	    var nextPrototype = getPrototype(NextClass);
	    assimilatePrototype(nextPrototype);

	    if (FirstClass) {
	      requestForceUpdateAll(getRootInstances, React);
	    }

	    return FirstClass || (FirstClass = NextClass);
	  };
	};

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';

	/**
	 * Returns a function that establishes the first prototype passed to it
	 * as the "source of truth" and patches its methods on subsequent invocations,
	 * also patching current and previous prototypes to forward calls to it.
	 */
	module.exports = function makeAssimilatePrototype() {
	  var storedPrototype,
	      knownPrototypes = [];

	  function wrapMethod(key) {
	    return function () {
	      if (storedPrototype[key]) {
	        return storedPrototype[key].apply(this, arguments);
	      }
	    };
	  }

	  function patchProperty(proto, key) {
	    proto[key] = storedPrototype[key];

	    if (typeof proto[key] !== 'function' ||
	      key === 'type' ||
	      key === 'constructor') {
	      return;
	    }

	    proto[key] = wrapMethod(key);

	    if (storedPrototype[key].isReactClassApproved) {
	      proto[key].isReactClassApproved = storedPrototype[key].isReactClassApproved;
	    }

	    if (proto.__reactAutoBindMap && proto.__reactAutoBindMap[key]) {
	      proto.__reactAutoBindMap[key] = proto[key];
	    }
	  }

	  function updateStoredPrototype(freshPrototype) {
	    storedPrototype = {};

	    Object.getOwnPropertyNames(freshPrototype).forEach(function (key) {
	      storedPrototype[key] = freshPrototype[key];
	    });
	  }

	  function reconcileWithStoredPrototypes(freshPrototype) {
	    knownPrototypes.push(freshPrototype);
	    knownPrototypes.forEach(function (proto) {
	      Object.getOwnPropertyNames(storedPrototype).forEach(function (key) {
	        patchProperty(proto, key);
	      });
	    });
	  }

	  return function assimilatePrototype(freshPrototype) {
	    if (Object.prototype.hasOwnProperty.call(freshPrototype, '__isAssimilatedByReactHotAPI')) {
	      return;
	    }

	    updateStoredPrototype(freshPrototype);
	    reconcileWithStoredPrototypes(freshPrototype);
	    freshPrototype.__isAssimilatedByReactHotAPI = true;
	  };
	};

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	var deepForceUpdate = __webpack_require__(7);

	var isRequestPending = false;

	module.exports = function requestForceUpdateAll(getRootInstances, React) {
	  if (isRequestPending) {
	    return;
	  }

	  /**
	   * Forces deep re-render of all mounted React components.
	   * Hats off to Omar Skalli (@Chetane) for suggesting this approach:
	   * https://gist.github.com/Chetane/9a230a9fdcdca21a4e29
	   */
	  function forceUpdateAll() {
	    isRequestPending = false;

	    var rootInstances = getRootInstances(),
	        rootInstance;

	    for (var key in rootInstances) {
	      if (rootInstances.hasOwnProperty(key)) {
	        rootInstance = rootInstances[key];

	        // `|| rootInstance` for React 0.12 and earlier
	        rootInstance = rootInstance._reactInternalInstance || rootInstance;
	        deepForceUpdate(rootInstance, React);
	      }
	    }
	  }

	  setTimeout(forceUpdateAll);
	};


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bindAutoBindMethods = __webpack_require__(8);
	var traverseRenderedChildren = __webpack_require__(9);

	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}

	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    // `|| internalInstance` for React 0.12 and earlier
	    var instance = internalInstance._instance || internalInstance;

	    if (instance.forceUpdate) {
	      instance.forceUpdate();
	    } else if (React && React.Component) {
	      React.Component.prototype.forceUpdate.call(instance);
	    }
	  }
	}

	/**
	 * Updates a React component recursively, so even if children define funky
	 * `shouldComponentUpdate`, they are forced to re-render.
	 * Makes sure that any newly added methods are properly auto-bound.
	 */
	function deepForceUpdate(internalInstance, React) {
	  traverseRenderedChildren(internalInstance, bindAutoBindMethods);
	  traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	  traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	}

	module.exports = deepForceUpdate;


/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';

	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);

	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;

	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;

	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn(
	        'bind(): React component methods may only be bound to the ' +
	        'component instance. See ' + componentName
	      );
	    } else if (!args.length) {
	      console.warn(
	        'bind(): You are binding a component method to the component. ' +
	        'React does this for you automatically in a high-performance ' +
	        'way, so you can safely remove this call. See ' + componentName
	      );
	      return boundMethod;
	    }

	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;

	    return reboundMethod;
	  };

	  return boundMethod;
	}

	/**
	 * Performs auto-binding similar to how React does it.
	 * Skips already auto-bound methods.
	 * Based on https://github.com/facebook/react/blob/b264372e2b3ad0b0c0c0cc95a2f383e4a1325c3d/src/classic/class/ReactClass.js#L639-L705
	 */
	module.exports = function bindAutoBindMethods(internalInstance) {
	  var component = typeof internalInstance.getPublicInstance === 'function' ?
	    internalInstance.getPublicInstance() :
	    internalInstance;

	  if (!component) {
	    // React 0.14 stateless component has no instance
	    return;
	  }

	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      continue;
	    }

	    // Skip already bound methods
	    if (component.hasOwnProperty(autoBindKey) &&
	        component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }

	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);

	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(
	      internalInstance._renderedComponent,
	      callback,
	      argument
	    );
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      traverseRenderedChildren(
	        internalInstance._renderedChildren[key],
	        callback,
	        argument
	      );
	    }
	  }
	}

	module.exports = traverseRenderedChildren;


/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getRootInstancesFromReactMount = __webpack_require__(11);

	var injectedProvider = null,
	    didWarn = false;

	function warnOnce() {
	  if (!didWarn) {
	    console.warn(
	      'It appears that React Hot Loader isn\'t configured correctly. ' +
	      'If you\'re using NPM, make sure your dependencies don\'t drag duplicate React distributions into their node_modules and that require("react") corresponds to the React instance you render your app with.',
	      'If you\'re using a precompiled version of React, see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react for integration instructions.'
	    );
	  }

	  didWarn = true;
	}

	var RootInstanceProvider = {
	  injection: {
	    injectProvider: function (provider) {
	      injectedProvider = provider;
	    }
	  },

	  getRootInstances: function (ReactMount) {
	    if (injectedProvider) {
	      return injectedProvider.getRootInstances();
	    }

	    var instances = ReactMount && getRootInstancesFromReactMount(ReactMount) || [];
	    if (!Object.keys(instances).length) {
	      warnOnce();
	    }

	    return instances;
	  }
	};

	module.exports = RootInstanceProvider;

/***/ },

/***/ 11:
/***/ function(module, exports) {

	'use strict';

	function getRootInstancesFromReactMount(ReactMount) {
	  return ReactMount._instancesByReactRootID || ReactMount._instancesByContainerID || [];
	}

	module.exports = getRootInstancesFromReactMount;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.T = undefined;

	var _eventservice = __webpack_require__(233);

	Object.defineProperty(exports, 'T', {
	  enumerable: true,
	  get: function get() {
	    return _eventservice.T;
	  }
	});

	__webpack_require__(190);

	var _toast = __webpack_require__(232);

	var _toast2 = _interopRequireDefault(_toast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _toast2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(191);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(193)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(191, function() {
				var newContent = __webpack_require__(191);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(192)();
	// imports


	// module
	exports.push([module.id, ".toast-root {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.3);\n  user-select: none;\n}\n.toast-window {\n  margin-top: -80px;\n  width: 260px;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toast-window-hd {\n  font-size: 14px;\n  height: 40px;\n  -webkit-user-select: none;\n  user-select: none;\n  text-align: center;\n  line-height: 40px;\n  font-weight: bold;\n}\n.toast-window-bd {\n  font-size: 12px;\n  padding: 10px 15px;\n  line-height: 30px;\n  text-align: center;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.toast-window-ft {\n  width: 100%;\n  position: relative;\n}\n.toast-window-ft:before {\n  content: ' ';\n  border-top: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 0;\n  transform: scaleY(0.5);\n  transform-origin: center top;\n}\n.toast-btn-item {\n  position: relative;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  color: #056beb;\n}\n.toast-btn-item.top-bottom {\n  width: 100%;\n}\n.toast-btn-item.left-right {\n  width: 50%;\n  float: left;\n}\n.toast-btn-item:active {\n  background: rgba(0, 0, 0, 0.15);\n}\n.toast-btn-item + .toast-btn-item.top-bottom:before {\n  content: ' ';\n  border-top: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform: scaleY(0.5);\n  transform-origin: center top;\n}\n.toast-btn-item + .toast-btn-item.left-right:before {\n  content: ' ';\n  border-left: 1px solid #ccc;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transform: scaleX(0.5);\n  transform-origin: center left;\n}\n.loadingbar {\n  width: 64px;\n  height: 64px;\n  background: #fff;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@keyframes locate-loading {\n  0% {\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes locate-loading {\n  0% {\n    opacity: 1;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: rotate(1turn);\n    transform: rotate(1turn);\n  }\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.5);\n}\n.loader .cui-grayload-text {\n  width: 5rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n  font-size: .8rem;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  border-radius: .25rem;\n  z-index: 99;\n}\n.loader .g-m--c {\n  width: 2.4rem;\n  height: 2.4rem;\n  margin: -1.25rem 0 0 -1.25rem;\n  -webkit-animation-name: locate-loading;\n  animation-name: locate-loading;\n  -webkit-animation-duration: 1.58s;\n  animation-duration: 1.58s;\n  -webkit-animation-timing-function: linear;\n  animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n  border-top: 2px solid #fff;\n  border-left: 2px solid #fff;\n  border-radius: 50%;\n}\n.loader .g-m--c,\n.loader .g-m--l {\n  position: absolute;\n  left: 50%;\n  top: 40%;\n}\n.loader .g-m--l {\n  width: 1.4rem;\n  height: 1.4rem;\n  z-index: 9;\n  margin: -0.75rem 0 0 -0.6rem;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA2CAMAAAC2heqoAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMA8U0C+bkL/CZ+9cs4Fgftw5N3cT8Qpp1ZRizn3tlsXx+MUzKwl2Yc4tGGuUvfggAAAo1JREFUSMeVltfWqjAQhUPvAgpIR4qNef/3OyFRYgzB838XLlnuJFP2EJEUzXeM2gW9Mk4B+s19rmBFj80f8svZAo7mvic/OC5842lyffmEDW5S/U3nhFFswMJTFs6Zk1vDKbYTEmG6qTcN4LjGlR8jBzDF/YAYdufE8y0JIuBRlWs6IP+defLa9tiAhPwRYUGyNoS0sKhAitHB1AUsrwHrcwt2iJM2cdijj9Cowy7uU2EPGT7AgN94dFPFWdqtW1ObE+vIqTr1dGwL6sCBJH6EfZoC8SR7aiXLBXs7UrU1qYcNR4TSRmwPQgsyVLSJ98cFF5Aybi44yQu0PZmG0FrHY17YQOHlequhkn6z/yeFMFkminzt0CYFb89x7eQRbdOJhfR1fNLAJDtFOiNMGkI9B5yIuYm3qkLfJoHJq2MX6kI4QR52RkpWru+6j4qSA5Ivvf2OVqzSROLpEY9KfB7bbAP+levkiGdckvPN3OloahrrNAnzWSKeFADyS4M/6/uXlw7kZ2HEXOzCiZmLlcklTXORuCA6WLTsq5nYo6oIdwDAlAIFEaL3xJMFQkglwPnOFJgBXlzIglL0Tu9TQYUIWvPhvBFObyX7tXjl6bHWEPolYt0Q3NxoERN8VvahkYxGzhgKPtkHyurAu8JiuoHxqX8AXLVo3fDNwGJMFWjXirYKQKbNG2Z2mJuOYHV468uo9hVA2K4T8+DG5EqbbeNtnwCxWfbRo/auuRlksGbAEcNCHdA8w7mkXZtXbzrCO5n4pcHdo5d/6BlR+HHLI4GkJjoVO7AWLorN6TV7nZjYRunXvff0pf+tyJIpT+0zG6xo0JCU4OTRi9DIKmq464h+EOS9UYck7ezoc5v/A8imzeBKssPpAAAAAElFTkSuQmCC) no-repeat;\n  background-size: 1.2rem 1.35rem;\n}\n.loader .cui-grayload-bfont {\n  margin: 3.5rem 0 .3rem;\n  font-size: .7rem;\n}\n.icon-back:before {\n  content: \"\";\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  vertical-align: middle;\n  border-left: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  box-sizing: border-box;\n}\n.cm-header,\n.cm-header-sub {\n  position: fixed;\n  left: 0;\n  right: 0;\n}\n", ""]);

	// exports


/***/ },

/***/ 192:
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

/***/ 193:
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

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

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
	// clear
	var CLEAR = exports.CLEAR = '@toast/clear';
	// default text
	var TEXT = exports.TEXT = ['\u786E\u5B9A', '\u53D6\u6D88'];

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "constants.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isReactClassish = __webpack_require__(198),
	    isReactElementish = __webpack_require__(199);

	function makeExportsHot(m, React) {
	  if (isReactElementish(m.exports, React)) {
	    // React elements are never valid React classes
	    return false;
	  }

	  var freshExports = m.exports,
	      exportsReactClass = isReactClassish(m.exports, React),
	      foundReactClasses = false;

	  if (exportsReactClass) {
	    m.exports = m.makeHot(m.exports, '__MODULE_EXPORTS');
	    foundReactClasses = true;
	  }

	  for (var key in m.exports) {
	    if (!Object.prototype.hasOwnProperty.call(freshExports, key)) {
	      continue;
	    }

	    if (exportsReactClass && key === 'type') {
	      // React 0.12 also puts classes under `type` property for compat.
	      // Skip to avoid updating twice.
	      continue;
	    }

	    var value;
	    try {
	      value = freshExports[key];
	    } catch (err) {
	      continue;
	    }

	    if (!isReactClassish(value, React)) {
	      continue;
	    }

	    if (Object.getOwnPropertyDescriptor(m.exports, key).writable) {
	      m.exports[key] = m.makeHot(value, '__MODULE_EXPORTS_' + key);
	      foundReactClasses = true;
	    } else {
	      console.warn("Can't make class " + key + " hot reloadable due to being read-only. To fix this you can try two solutions. First, you can exclude files or directories (for example, /node_modules/) using 'exclude' option in loader configuration. Second, if you are using Babel, you can enable loose mode for `es6.modules` using the 'loose' option. See: http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/#options-loose and http://babeljs.io/docs/usage/options/");
	    }
	  }

	  return foundReactClasses;
	}

	module.exports = makeExportsHot;


/***/ },

/***/ 198:
/***/ function(module, exports) {

	function hasRender(Class) {
	  var prototype = Class.prototype;
	  if (!prototype) {
	    return false;
	  }

	  return typeof prototype.render === 'function';
	}

	function descendsFromReactComponent(Class, React) {
	  if (!React.Component) {
	    return false;
	  }

	  var Base = Object.getPrototypeOf(Class);
	  while (Base) {
	    if (Base === React.Component) {
	      return true;
	    }

	    Base = Object.getPrototypeOf(Base);
	  }

	  return false;
	}

	function isReactClassish(Class, React) {
	  if (typeof Class !== 'function') {
	    return false;
	  }

	  // React 0.13
	  if (hasRender(Class) || descendsFromReactComponent(Class, React)) {
	    return true;
	  }

	  // React 0.12 and earlier
	  if (Class.type && hasRender(Class.type)) {
	    return true;
	  }

	  return false;
	}

	module.exports = isReactClassish;

/***/ },

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	var isReactClassish = __webpack_require__(198);

	function isReactElementish(obj, React) {
	  if (!obj) {
	    return false;
	  }

	  return Object.prototype.toString.call(obj.props) === '[object Object]' &&
	         isReactClassish(obj.type, React);
	}

	module.exports = isReactElementish;

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(98);

	var _react2 = _interopRequireDefault(_react);

	var _constants = __webpack_require__(196);

	var _eventservice = __webpack_require__(233);

	var _loading = __webpack_require__(234);

	var _loading2 = _interopRequireDefault(_loading);

	var _modal = __webpack_require__(235);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	            loading: false,
	            modals: []
	        };
	        return _this;
	    }

	    _createClass(Toast, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            // 加载loading
	            _eventservice.E.on(_constants.SHOW_LOADING, function () {
	                _this2.setState({ loading: true });
	            });

	            // 关闭loading
	            _eventservice.E.on(_constants.HIDE_LOADING, function () {
	                _this2.setState({ loading: false });
	            });

	            _eventservice.E.on(_constants.SHOW_ALERT, function (args) {
	                var modals = _this2.state.modals;
	                // 对象形式
	                // 对应的调用方式为
	                // T.alert({
	                //     title: 'hello world',
	                //     message: 'This is details for hello world his is details for hello world',
	                //     text: 'ok',
	                //     fn: () => console.log('ok')
	                // });
	                if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object') {
	                    modals.push({
	                        id: guid(),
	                        title: args.title,
	                        message: args.message,
	                        option: [{
	                            text: args.text || _constants.TEXT[0],
	                            fn: function fn() {
	                                return args.fn && args.fn();
	                            }
	                        }]
	                    });
	                } else {
	                    // 普通形式
	                    // 对应的调用方式为
	                    // T.alert('hello world')
	                    modals.push({
	                        id: guid(),
	                        title: '',
	                        message: args,
	                        option: [{
	                            text: _constants.TEXT[0]
	                        }]
	                    });
	                }
	                _this2.setState({
	                    loading: false,
	                    modals: modals
	                });
	            });

	            _eventservice.E.on(_constants.SHOW_CONFIRM, function (args) {
	                var modals = _this2.state.modals;
	                // 为每组数据添加一个guid
	                args.id = guid();
	                modals.push(args);
	                _this2.setState({
	                    loading: false,
	                    modals: modals
	                });
	            });

	            _eventservice.E.on(_constants.CLEAR, function () {
	                return _this2.setState({
	                    loading: false,
	                    modals: []
	                });
	            });
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            // 解绑事件
	            _eventservice.E.off(_constants.SHOW_LOADING);
	            _eventservice.E.off(_constants.SHOW_CONFIRM);
	            _eventservice.E.off(_constants.SHOW_ALERT);
	            _eventservice.E.off(_constants.SHOW_NOTICE);
	            _eventservice.E.off(_constants.CLEAR);
	        }

	        // 关闭指定的弹窗

	    }, {
	        key: 'close',
	        value: function close(id) {
	            var modals = this.state.modals.filter(function (item) {
	                return item.id !== id;
	            });
	            this.setState({ modals: modals });
	        }
	    }, {
	        key: '_renderLoading',
	        value: function _renderLoading() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'toast-root' },
	                _react2.default.createElement(_loading2.default, null)
	            );
	        }
	    }, {
	        key: '_renderConfirm',
	        value: function _renderConfirm() {
	            var modals = this.state.modals;
	            var item = modals[0];
	            if (!item) {
	                console.log(null);
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
	                    closefn: this.close.bind(this)
	                })
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            console.log(this.state);

	            if (this.state.loading) {
	                return this._renderLoading();
	            }

	            return this._renderConfirm();
	            // switch(this.state.type) {
	            // case SHOW_LOADING:
	            //     return this._renderLoading();
	            // case SHOW_CONFIRM:
	            //     return this._renderConfirm();
	            // }
	            // return null;
	        }
	    }]);

	    return Toast;
	}(_react.Component);

	exports.default = Toast;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "toast.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.T = exports.E = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(196);

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
	        return E.emit(_constants.SHOW_LOADING);
	    },
	    loaded: function loaded() {
	        return E.emit(_constants.HIDE_LOADING);
	    },
	    confirm: function confirm(args) {
	        return E.emit(_constants.SHOW_CONFIRM, args);
	    },
	    alert: function alert(args) {
	        return E.emit(_constants.SHOW_ALERT, args);
	    },
	    notify: function notify() {
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return E.emit(_constants.SHOW_NOTICE, args);
	    },
	    clear: function clear() {
	        return E.emit(_constants.CLEAR);
	    }
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "eventservice.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(98);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Loading = function (_Component) {
	    _inherits(Loading, _Component);

	    function Loading() {
	        _classCallCheck(this, Loading);

	        return _possibleConstructorReturn(this, (Loading.__proto__ || Object.getPrototypeOf(Loading)).apply(this, arguments));
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'loader' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'cui-grayload-text' },
	                    _react2.default.createElement('div', { className: 'g-m--c' }),
	                    _react2.default.createElement('div', { className: 'g-m--l' }),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'cui-grayload-bfont' },
	                        ' \u52A0\u8F7D\u4E2D... '
	                    )
	                )
	            );
	        }
	    }]);

	    return Loading;
	}(_react.Component);

	Loading.propTypes = {
	    type: _react.PropTypes.string,
	    color: _react.PropTypes.string
	};
	Loading.defaultProps = {
	    type: 'spin',
	    color: '#f60'
	};
	exports.default = Loading;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "loading.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(2), RootInstanceProvider = __webpack_require__(10), ReactMount = __webpack_require__(12), React = __webpack_require__(98); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(98);

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
	        key: "render",
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props,
	                title = _props.title,
	                message = _props.message,
	                option = _props.option,
	                closefn = _props.closefn;

	            var len = option.length;
	            return _react2.default.createElement(
	                "div",
	                { className: "toast-window" },
	                title && _react2.default.createElement(
	                    "div",
	                    { className: "toast-window-hd" },
	                    title
	                ),
	                _react2.default.createElement("div", { className: "toast-window-bd", dangerouslySetInnerHTML: { __html: message } }),
	                _react2.default.createElement(
	                    "div",
	                    { className: "toast-window-ft" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "toast-btn-group" },
	                        option && option.map(function (item, i) {
	                            return _react2.default.createElement(
	                                "div",
	                                { key: i, className: len === 2 ? 'toast-btn-item left-right' : 'toast-btn-item top-bottom', onClick: function onClick() {
	                                        item.fn && item.fn();
	                                        closefn(_this2.props.id);
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

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(197); if (makeExportsHot(module, __webpack_require__(98))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "modal.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }

});