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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/addClass.js":
/*!***********************************!*\
  !*** ./src/functions/addClass.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name = 'js-add';\n  var js_add = document.getElementsByClassName(js_name);\n\n  var _loop = function _loop(i) {\n    js_add[i].addEventListener(\"click\", function () {\n      if (js_add[i].classList.contains(A)) {\n        js_add[i].classList.remove(A);\n      } else {\n        js_add[i].classList.add(A);\n      }\n    });\n  };\n\n  for (var i = 0; i < js_add.length; i++) {\n    _loop(i);\n  }\n});\n;\n\n//# sourceURL=webpack:///./src/functions/addClass.js?");

/***/ }),

/***/ "./src/functions/current.js":
/*!**********************************!*\
  !*** ./src/functions/current.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name = 'js-current';\n  var js_current = document.getElementsByClassName(js_name);\n  var split = 1;\n  var url = location.pathname.split(\"/\")[split];\n\n  for (var i = 0; i < js_current.length; i++) {\n    for (var j = 0; j < js_current[i].children.length; j++) {\n      for (var k = 0; k < js_current[i].children[j].getElementsByTagName('a').length; k++) {\n        if (location.href.match(js_current[i].children[j].getElementsByTagName('a')[k].getAttribute('href'))) {\n          js_current[i].children[j].getElementsByTagName('a')[k].removeAttribute('href');\n          js_current[i].children[j].getElementsByTagName('a')[k].classList.add(A);\n        }\n      }\n    }\n  }\n});\n;\n\n//# sourceURL=webpack:///./src/functions/current.js?");

/***/ }),

/***/ "./src/functions/download.js":
/*!***********************************!*\
  !*** ./src/functions/download.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  if (document.documentMode && navigator.msSaveOrOpenBlob) {\n    window.addEventListener(\"click\", function (e) {\n      var a = e.target;\n      if (!a.hasAttribute(\"download\")) return;\n      e.preventDefault();\n      var filename = a.getAttribute(\"download\");\n      var xhr = new XMLHttpRequest();\n      xhr.open(\"GET\", a.href);\n      xhr.responseType = \"blob\";\n      xhr.send();\n\n      xhr.onload = function () {\n        navigator.msSaveOrOpenBlob(xhr.response, filename);\n      };\n    });\n  }\n});\n;\n\n//# sourceURL=webpack:///./src/functions/download.js?");

/***/ }),

/***/ "./src/functions/iossubmit.js":
/*!************************************!*\
  !*** ./src/functions/iossubmit.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var js_input = document.getElementsByTagName('input');\n\n  var _loop = function _loop(i) {\n    js_input[i].addEventListener(\"keypress\", function (e) {\n      if (e.keyCode === 13) {\n        e.preventDefault();\n        document.activeElement.blur();\n        js_input[i].blur();\n      }\n    });\n  };\n\n  for (var i = 0; i < js_input.length; i++) {\n    _loop(i);\n  }\n});\n;\n\n//# sourceURL=webpack:///./src/functions/iossubmit.js?");

/***/ }),

/***/ "./src/functions/limit.js":
/*!********************************!*\
  !*** ./src/functions/limit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var js_name01 = 'js-limit';\n  var js_limit = document.getElementsByClassName(js_name01);\n  var limit = 4718592;\n\n  var _loop = function _loop(i) {\n    js_limit[i].addEventListener(\"change\", function (e) {\n      var s = js_limit[i].files[0].size;\n\n      if (s > limit) {\n        e.preventDefault();\n        js_limit[i].value = \"\";\n      } else {}\n    });\n  };\n\n  for (var i = 0; i < js_limit.length; i++) {\n    _loop(i);\n  }\n});\n;\n\n//# sourceURL=webpack:///./src/functions/limit.js?");

/***/ }),

/***/ "./src/functions/loader.js":
/*!*********************************!*\
  !*** ./src/functions/loader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name01 = 'js-loader';\n  var js_name02 = 'js-loader__g';\n  var js_name03 = 'js-loader__p';\n  var js_name04 = 'js-done';\n  var js_loader01 = document.getElementsByClassName(js_name01);\n  var js_loader02 = document.getElementsByClassName(js_name02);\n  var js_loader03 = document.getElementsByClassName(js_name03);\n  var js_loader04 = document.getElementsByClassName(js_name04);\n  var images = document.getElementsByTagName('img'); // ページ内の画像取得\n\n  var imgCount = 0;\n  var baseCount = 0;\n  var gaugeMax = 100;\n  var time01 = 10;\n  var time02 = 1;\n  var current;\n\n  for (var i = 0; i < images.length; i++) {\n    var img = new Image();\n\n    img.onload = function () {\n      imgCount += 1;\n    };\n\n    img.onerror = function () {\n      imgCount += 1;\n    };\n\n    img.src = images[i].src;\n  }\n\n  ;\n  var loader = setInterval(function () {\n    if (baseCount <= imgCount) {\n      baseCount += 1;\n      current = Math.floor(baseCount / images.length * 100);\n\n      for (var _i = 0; _i < js_loader03.length; _i++) {\n        js_loader03[_i].innerHTML = current;\n      }\n\n      for (var _i2 = 0; _i2 < js_loader02.length; _i2++) {\n        js_loader02[_i2].style.width = Math.floor(gaugeMax / 100 * current) + '%';\n      }\n\n      if (baseCount == images.length) {\n        setTimeout(function () {\n          for (var _i3 = 0; _i3 < js_loader01.length; _i3++) {\n            js_loader01[_i3].classList.add(A);\n          }\n\n          for (var _i4 = 0; _i4 < js_loader04.length; _i4++) {\n            js_loader04[_i4].classList.add(A);\n          }\n        }, time02);\n        clearInterval(loader);\n      }\n    }\n  }, time01);\n});\n;\n\n//# sourceURL=webpack:///./src/functions/loader.js?");

/***/ }),

/***/ "./src/functions/onoff.js":
/*!********************************!*\
  !*** ./src/functions/onoff.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A, query) {\n  var js_name01 = 'js-open';\n  var js_name02 = 'js-onoff';\n  var js_name03 = 'js-close';\n  var js_open = document.getElementsByClassName(js_name01);\n  var js_onoff = document.getElementsByClassName(js_name02);\n  var js_close = document.getElementsByClassName(js_name03);\n  var data_name = 'data-onoff';\n\n  if (query.onoff) {\n    open(query.onoff);\n  }\n\n  var _loop = function _loop(i) {\n    js_open[i].addEventListener(\"click\", function () {\n      if (js_open[i].classList.contains(A)) close(js_open[i].getAttribute(data_name));else open(js_open[i].getAttribute(data_name));\n    });\n  };\n\n  for (var i = 0; i < js_open.length; i++) {\n    _loop(i);\n  }\n\n  var _loop2 = function _loop2(i) {\n    js_close[i].addEventListener(\"click\", function () {\n      close(js_close[i].getAttribute(data_name));\n    });\n  };\n\n  for (var i = 0; i < js_close.length; i++) {\n    _loop2(i);\n  }\n\n  var open = function open(_this) {\n    for (var i = 0; i < js_open.length; i++) {\n      if (js_open[i].getAttribute(data_name) == _this) {\n        js_open[i].classList.add(A);\n      }\n    }\n\n    for (var _i = 0; _i < js_onoff.length; _i++) {\n      if (js_onoff[_i].getAttribute(data_name) == _this) {\n        js_onoff[_i].classList.add(A);\n      }\n    }\n\n    for (var _i2 = 0; _i2 < js_close.length; _i2++) {\n      if (js_close[_i2].getAttribute(data_name) == _this) {\n        js_close[_i2].classList.add(A);\n      }\n    }\n  };\n\n  var close = function close(_this) {\n    for (var i = 0; i < js_open.length; i++) {\n      if (js_open[i].getAttribute(data_name) == _this) {\n        js_open[i].classList.remove(A);\n      }\n    }\n\n    for (var _i3 = 0; _i3 < js_onoff.length; _i3++) {\n      if (js_onoff[_i3].getAttribute(data_name) == _this) {\n        js_onoff[_i3].classList.remove(A);\n      }\n    }\n\n    for (var _i4 = 0; _i4 < js_close.length; _i4++) {\n      if (js_close[_i4].getAttribute(data_name) == _this) {\n        js_close[_i4].classList.remove(A);\n      }\n    }\n  };\n});\n;\n\n//# sourceURL=webpack:///./src/functions/onoff.js?");

/***/ }),

/***/ "./src/functions/query.js":
/*!********************************!*\
  !*** ./src/functions/query.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var arg = {};\n  var pair = location.search.substring(1).split('&');\n\n  for (var i = 0; pair[i]; i++) {\n    var kv = pair[i].split('=');\n    arg[kv[0]] = kv[1];\n  }\n\n  return arg;\n});\n;\n\n//# sourceURL=webpack:///./src/functions/query.js?");

/***/ }),

/***/ "./src/functions/requestAnimationFrame.js":
/*!************************************************!*\
  !*** ./src/functions/requestAnimationFrame.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {\n    return setTimeout(callback, 1000 / 60);\n  };\n});\n;\n\n//# sourceURL=webpack:///./src/functions/requestAnimationFrame.js?");

/***/ }),

/***/ "./src/functions/scroll.js":
/*!*********************************!*\
  !*** ./src/functions/scroll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name = 'js-scroll';\n  var js_scroll = document.getElementsByClassName(js_name);\n  var data_name = 'data-scroll';\n\n  var scroll = function scroll() {\n    for (var i = 0; i < js_scroll.length; i++) {\n      if (window.pageYOffset + window.innerHeight > window.pageYOffset + js_scroll[i].getBoundingClientRect().top && window.pageYOffset < window.pageYOffset + js_scroll[i].getBoundingClientRect().bottom) {\n        js_scroll[i].classList.add(A);\n      } else {\n        if (!js_scroll[i].getAttribute(data_name)) {\n          js_scroll[i].classList.remove(A);\n        }\n      }\n    }\n  };\n\n  scroll();\n  window.addEventListener('scroll', function () {\n    scroll();\n  });\n});\n;\n\n//# sourceURL=webpack:///./src/functions/scroll.js?");

/***/ }),

/***/ "./src/functions/smooth.js":
/*!*********************************!*\
  !*** ./src/functions/smooth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var scrollElm = function () {\n    if ('scrollingElement' in document) return document.scrollingElement;\n    if (navigator.userAgent.indexOf('WebKit') != -1) return document.body;\n    return document.documentElement;\n  }();\n\n  var easing = function easing(t, b, c, d) {\n    return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b;\n  };\n\n  var duration = 500;\n  var ignore = 'js-noscroll';\n  var smoothScrollElm = document.querySelectorAll('a[href^=\"#\"]:not(' + ignore + ')');\n  var data_name = 'data-anchor';\n  Array.prototype.forEach.call(smoothScrollElm, function (elm) {\n    elm.addEventListener('click', function (e) {\n      e.preventDefault();\n      var targetElm = document.querySelector(elm.getAttribute('href'));\n      if (!targetElm) return;\n      var targetPos = targetElm.getBoundingClientRect().top;\n      if (this.getAttribute(data_name)) targetPos -= this.getAttribute(data_name);\n      var startTime = Date.now();\n      var scrollFrom = scrollElm.scrollTop;\n\n      (function loop() {\n        var currentTime = Date.now() - startTime;\n\n        if (currentTime < duration) {\n          scrollTo(0, easing(currentTime, scrollFrom, targetPos, duration));\n          window.requestAnimationFrame(loop);\n        } else {\n          scrollTo(0, targetPos + scrollFrom);\n        }\n      })();\n    });\n  });\n});\n;\n\n//# sourceURL=webpack:///./src/functions/smooth.js?");

/***/ }),

/***/ "./src/functions/sticky.js":
/*!*********************************!*\
  !*** ./src/functions/sticky.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name = 'js-sticky';\n  var y = 100;\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset > y) {\n      var js_sticky = document.getElementsByClassName(js_name);\n\n      for (var i = 0; i < js_sticky.length; i++) {\n        js_sticky[i].classList.add(A);\n      }\n    } else {\n      var _js_sticky = document.getElementsByClassName(js_name);\n\n      for (var _i = 0; _i < _js_sticky.length; _i++) {\n        _js_sticky[_i].classList.remove(A);\n      }\n    }\n  });\n});\n;\n\n//# sourceURL=webpack:///./src/functions/sticky.js?");

/***/ }),

/***/ "./src/functions/toggle.js":
/*!*********************************!*\
  !*** ./src/functions/toggle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var js_name01 = 'js-toggle__btn';\n  var js_name02 = 'js-toggle__target';\n  var js_toggle01 = document.getElementsByClassName(js_name01);\n  var js_toggle02 = document.getElementsByClassName(js_name02);\n  var data_name = 'data-toggle';\n  var time01 = 300;\n  var time02 = '.3s';\n  var c = 'is-toggle';\n  var h;\n  var t;\n\n  var _loop = function _loop(i) {\n    js_toggle01[i].addEventListener(\"click\", function () {\n      toggle(js_toggle01[i].getAttribute(data_name));\n    });\n  };\n\n  for (var i = 0; i < js_toggle01.length; i++) {\n    _loop(i);\n  }\n\n  var toggle = function toggle(_data) {\n    for (var i = 0; i < js_toggle02.length; i++) {\n      if (js_toggle02[i].getAttribute(data_name) == _data) {\n        t = js_toggle02[i];\n\n        if (!t.classList.contains(c)) {\n          (function () {\n            var reset01 = function reset01() {\n              t.style.transition = 'height ' + time02;\n              t.style.overflow = 'hidden';\n              t.classList.add(c);\n            };\n\n            var reset02 = function reset02() {\n              t.removeAttribute('style');\n              t.style.overflow = 'hidden';\n              t.classList.remove(c);\n            };\n\n            if (document.defaultView.getComputedStyle(js_toggle02[i], null).height == '0px') {\n              t.style.height = 'auto';\n              h = t.clientHeight;\n              t.style.height = 0;\n              reset01();\n              setTimeout(function () {\n                t.style.height = h + 'px';\n                setTimeout(function () {\n                  reset02();\n                }, time01);\n              }, 1);\n            } else {\n              h = t.clientHeight;\n              t.style.height = h + 'px';\n              reset01();\n              setTimeout(function () {\n                t.style.height = 0 + 'px';\n                setTimeout(function () {\n                  reset02();\n                  t.style.height = 0;\n                }, time01);\n              }, 1);\n            }\n          })();\n        }\n      }\n    }\n  };\n});\n;\n\n//# sourceURL=webpack:///./src/functions/toggle.js?");

/***/ }),

/***/ "./src/functions/totop.js":
/*!********************************!*\
  !*** ./src/functions/totop.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var js_name = 'js-totop';\n  var sticky_name = 'is-sticky';\n  var bd = document.body.clientHeight;\n  var ft_elm = document.getElementsByClassName('ft');\n  var tt_elm = document.getElementsByClassName(js_name);\n  var y = 100;\n  var ft = 0;\n\n  for (var i = 0; i < ft_elm.length; i++) {\n    ft = bd - ft_elm[i].clientHeight;\n  }\n\n  window.addEventListener('scroll', function () {\n    var js_totop = document.getElementsByClassName(js_name);\n\n    if (window.pageYOffset > y) {\n      for (var _i = 0; _i < js_totop.length; _i++) {\n        js_totop[_i].classList.add(A);\n      }\n    } else {\n      for (var _i2 = 0; _i2 < js_totop.length; _i2++) {\n        js_totop[_i2].classList.remove(A);\n      }\n    }\n\n    if (window.pageYOffset + window.innerHeight > ft) {\n      for (var _i3 = 0; _i3 < js_totop.length; _i3++) {\n        js_totop[_i3].classList.add(A);\n      }\n    } else {\n      for (var _i4 = 0; _i4 < js_totop.length; _i4++) {\n        js_totop[_i4].classList.remove(A);\n      }\n    }\n  });\n});\n;\n\n//# sourceURL=webpack:///./src/functions/totop.js?");

/***/ }),

/***/ "./src/functions/webcomponent.js":
/*!***************************************!*\
  !*** ./src/functions/webcomponent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (A) {\n  var LigBtn =\n  /*#__PURE__*/\n  function (_HTMLElement) {\n    _inherits(LigBtn, _HTMLElement);\n\n    _createClass(LigBtn, null, [{\n      key: \"template\",\n      get: function get() {\n        return \"\\n      <style>\\n        .btn {\\n          display: inline-block;\\n          height: 48px;\\n          line-height: 48px;\\n          padding: 0 20px;\\n          box-sizing: border-box;\\n          border-radius: 4px;\\n          box-shadow: 0 3px 0 rgba(0,0,0,0.1);\\n          background: #25c04a;\\n          letter-spacing: 0.025em;\\n          text-align: center;\\n          text-decoration: none;\\n          color: #fff;\\n          border: 1px solid #25c04a;\\n          transition: background-color .35s,color .35s;\\n        }\\n        .btn:hover {\\n          background: #fff;\\n          color: #25c04a;\\n        }\\n      </style>\\n      <div class=\\\"btn\\\">\\n        <slot></slot>\\n      </div>\\n    \";\n      }\n    }]);\n\n    function LigBtn() {\n      var _this;\n\n      _classCallCheck(this, LigBtn);\n\n      _this = _possibleConstructorReturn(this, _getPrototypeOf(LigBtn).call(this)); // attachShadowはshadowRootを返す\n      // const shadowRoot = this.attachShadow({mode: 'open'});\n      // shadowRoot.innerHTML = LigBtn.template;\n\n      _this.attachShadow({\n        mode: 'open'\n      }).innerHTML = LigBtn.template;\n      return _this;\n    }\n\n    return LigBtn;\n  }(_wrapNativeSuper(HTMLElement));\n\n  customElements.define('lig-btn', LigBtn);\n});\n;\n\n//# sourceURL=webpack:///./src/functions/webcomponent.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_requestAnimationFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/requestAnimationFrame */ \"./src/functions/requestAnimationFrame.js\");\n/* harmony import */ var _functions_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/query */ \"./src/functions/query.js\");\n/* harmony import */ var _functions_addClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/addClass */ \"./src/functions/addClass.js\");\n/* harmony import */ var _functions_current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/current */ \"./src/functions/current.js\");\n/* harmony import */ var _functions_download__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/download */ \"./src/functions/download.js\");\n/* harmony import */ var _functions_iossubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/iossubmit */ \"./src/functions/iossubmit.js\");\n/* harmony import */ var _functions_limit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions/limit */ \"./src/functions/limit.js\");\n/* harmony import */ var _functions_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./functions/loader */ \"./src/functions/loader.js\");\n/* harmony import */ var _functions_onoff__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./functions/onoff */ \"./src/functions/onoff.js\");\n/* harmony import */ var _functions_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./functions/scroll */ \"./src/functions/scroll.js\");\n/* harmony import */ var _functions_smooth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functions/smooth */ \"./src/functions/smooth.js\");\n/* harmony import */ var _functions_sticky__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./functions/sticky */ \"./src/functions/sticky.js\");\n/* harmony import */ var _functions_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./functions/toggle */ \"./src/functions/toggle.js\");\n/* harmony import */ var _functions_totop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./functions/totop */ \"./src/functions/totop.js\");\n/* harmony import */ var _functions_webcomponent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./functions/webcomponent */ \"./src/functions/webcomponent.js\");\nvar HASH = location.hash;\nvar PATH = location.pathname;\nvar A = 'is-active';\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.onload = function () {\n  Object(_functions_requestAnimationFrame__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  Object(_functions_addClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(A);\n  Object(_functions_current__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(A);\n  Object(_functions_download__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  Object(_functions_iossubmit__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  Object(_functions_limit__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n  Object(_functions_loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(A);\n  Object(_functions_onoff__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(A, Object(_functions_query__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  Object(_functions_scroll__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(A);\n  Object(_functions_smooth__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n  Object(_functions_sticky__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(A);\n  Object(_functions_toggle__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n  Object(_functions_totop__WEBPACK_IMPORTED_MODULE_13__[\"default\"])();\n  Object(_functions_webcomponent__WEBPACK_IMPORTED_MODULE_14__[\"default\"])();\n};\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });