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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _light_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./light-gallery */ \"./src/light-gallery.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n  new _light_gallery__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({element: document.getElementsByClassName('light-gallery')[0]});\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/light-gallery.js":
/*!******************************!*\
  !*** ./src/light-gallery.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LightGallery; });\nclass LightGallery {\r\n\r\n    constructor(config) {\r\n        this.config = Object.assign({\r\n            selector: 'light-gallery', //classname selector\r\n            thumbSelector: 'a',\r\n            defaultThumb: 'undefined.jpg.png',\r\n            element: null\r\n        }, config);\r\n\r\n        this.init();\r\n\r\n    }\r\n\r\n    init() {\r\n\r\n\r\n        this.current = 0;\r\n\r\n        this.container = this.config.element || document.querySelector(this.config.selector);\r\n        this.getStyles();\r\n\r\n        this.thumbs = this.getThumbs();\r\n\r\n        this.panes = [];\r\n\r\n        this.buildHTML();\r\n        this.bindEvents();\r\n\r\n    }\r\n\r\n    buildHTML() {\r\n\r\n        this.box = document.createElement('div');\r\n        this.box.classList.add('light-gallery-box');\r\n\r\n        this.buildPanes();\r\n\r\n        this.buildNavigation();\r\n\r\n        this.container.appendChild(this.box);\r\n\r\n        this.container.classList.add('light-gallery');\r\n    }\r\n\r\n    buildPanes() {\r\n\r\n      this.thumbs.map((thumb, i) => {\r\n\r\n          let pane = document.createElement('div');\r\n          pane.classList.add('light-gallery-box-pane');\r\n\r\n          let fig = document.createElement('figure');\r\n\r\n          let img = document.createElement('img');\r\n          img.setAttribute('data-light-gallery-src', thumb.getAttribute('href'));\r\n\r\n          fig.appendChild(img);\r\n          pane.appendChild(fig);\r\n          this.box.appendChild(pane);\r\n\r\n          this.panes.push(pane);\r\n          thumb.setAttribute('data-light-gallery-index', i);\r\n      })\r\n\r\n    }\r\n\r\n    getThumbs() {\r\n        var arrThumbs = [];\r\n\r\n\r\n        let thumbs = [...this.container.querySelectorAll(this.config.thumbSelector)]\r\n\r\n        thumbs.map(thumb => {\r\n          if ( thumb.querySelector('img') ) arrThumbs.push(thumb);\r\n        })\r\n\r\n        return thumbs;\r\n    }\r\n\r\n    getStyles() {\r\n\r\n        this.styles = document.createElement('style');\r\n        this.styles.innerHTML = '.light-gallery { /* nothing here ! */}';\r\n\r\n        this.styles.innerHTML += '.light-gallery-freeze { overflow: hidden !important }'; //off state\r\n\r\n        this.styles.innerHTML += '.light-gallery-box, .light-gallery-nav { z-index: 100000; opacity: 0; transition: all 0.5s ease; pointer-events: none; }'; //off state\r\n        this.styles.innerHTML += '.light-gallery .light-gallery-box { position: fixed; display: flex; flex-flow: nowrap; top: 0; left: 0; height: 100vh; background: rgba(0,0,0,0.8); }';\r\n\r\n        this.styles.innerHTML += '.light-gallery.active .light-gallery-box, .light-gallery.active .light-gallery-nav { opacity: 1; pointer-events: all }';\r\n\r\n        this.styles.innerHTML += '.light-gallery-box .light-gallery-box-pane { height: 100%; width: 100vw; display: flex; justify-content: center; align-items: center; }';\r\n        this.styles.innerHTML += '.light-gallery-box .light-gallery-box-pane figure { overflow: hidden }';\r\n\r\n        this.styles.innerHTML += '.light-gallery-nav { z-index: 100001; position: fixed; top: 50vh; left: 0; width: 100vw; display: flex; justify-content: space-between; align-items: center; transform: translate3d(0, -50%, 0); }';\r\n\r\n        this.styles.innerHTML += '.light-gallery-prev, .light-gallery-next { padding: 20px; cursor: pointer; }';\r\n        this.styles.innerHTML += '.light-gallery-next:before { content: \">\"; font-weight: bold; font-size: 30px; color: white; }';\r\n        this.styles.innerHTML += '.light-gallery-prev:before { content: \"<\"; font-weight: bold; font-size: 30px; color: white; }';\r\n        this.styles.innerHTML += '.light-gallery-prev:hover, .light-gallery-next:hover {  }';\r\n\r\n        this.container.appendChild(this.styles);\r\n\r\n    }\r\n\r\n    bindEvents() {\r\n        var self = this;\r\n\r\n        // BIND THUMBS\r\n        for (var i = 0; i < this.thumbs.length; i++) {\r\n            var thumb = this.thumbs[i];\r\n            thumb.addEventListener('click', function (e) {\r\n                e.preventDefault();\r\n                self.setActive(this);\r\n            });\r\n        }\r\n\r\n        //BIND BOX\r\n        this.box.addEventListener('click', function () {\r\n            self.setUnactive()\r\n        });\r\n\r\n        this.prev.addEventListener('click', function () {\r\n            self.prevPane()\r\n        });\r\n        this.next.addEventListener('click', function () {\r\n            self.nextPane()\r\n        });\r\n\r\n    }\r\n\r\n    buildNavigation() {\r\n        this.nav = document.createElement('div');\r\n        this.nav.classList.add('light-gallery-nav');\r\n\r\n        this.prev = document.createElement('div');\r\n        this.prev.classList.add('light-gallery-prev');\r\n        this.next = document.createElement('div');\r\n        this.next.classList.add('light-gallery-next');\r\n\r\n        this.nav.appendChild(this.prev);\r\n        this.nav.appendChild(this.next);\r\n\r\n        this.container.appendChild(this.nav);\r\n    }\r\n\r\n    nextPane() {\r\n        this.current++;\r\n        if (this.current >= this.thumbs.length) this.current = 0;\r\n        this.setActive();\r\n    }\r\n\r\n    prevPane() {\r\n        this.current--;\r\n        if (this.current < 0) this.current = this.thumbs.length - 1;\r\n        this.setActive();\r\n    }\r\n\r\n    setActive(el) {\r\n\r\n        var el = el || this.thumbs[this.current];\r\n        var index = el.getAttribute('data-light-gallery-index');\r\n        var pane = this.panes[index];\r\n        var thumb = this.thumbs[index];\r\n        var img = pane.getElementsByTagName('img')[0];\r\n\r\n        this.box.style.left = '-' + index + '00vw';\r\n\r\n        var dataSrc = img.getAttribute('data-light-gallery-src') || thumb.getAttribute('src') || this.config.defaultThumb;\r\n        img.setAttribute('src', dataSrc);\r\n\r\n        this.active = 1;\r\n        this.container.classList.add('active');\r\n        this.container.classList.remove('unactive');\r\n\r\n        document.body.classList.add('light-gallery-freeze');\r\n\r\n    }\r\n\r\n    setUnactive() {\r\n\r\n        this.active = 0;\r\n        this.container.classList.add('unactive');\r\n        this.container.classList.remove('active');\r\n\r\n        document.body.classList.remove('light-gallery-freeze');\r\n\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/light-gallery.js?");

/***/ })

/******/ });