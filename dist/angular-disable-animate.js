(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("angular-disable-animate", [], factory);
	else if(typeof exports === 'object')
		exports["angular-disable-animate"] = factory();
	else
		root["angular-disable-animate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _disableAnimate = __webpack_require__(1);
	
	angular.module('bc.AngularDisableAnimate', []).directive('bcDisableAnimate', _disableAnimate.DisableAnimateDirective);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	DisableAnimateDirective.$inject = ["$animate"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DisableAnimateDirective = DisableAnimateDirective;
	function DisableAnimateDirective($animate) {
	    'ngInject';
	
	    var directive = {
	        restrict: 'A',
	        replace: true,
	        link: linkFunction
	    };
	
	    return directive;
	
	    /**
	     * Link
	     */
	    function linkFunction($scope, $element, $attrs, vm) {
	
	        // Disable $animate for this element
	        $animate.enabled($element, false);
	    }
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=angular-disable-animate.js.map