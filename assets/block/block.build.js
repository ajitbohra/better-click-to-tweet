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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributes__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inspector__ = __webpack_require__(3);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n/**\n * Block dependencies\n */\n\n\n\n\n/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar _wp$blocks = wp.blocks,\n    registerBlockType = _wp$blocks.registerBlockType,\n    RichText = _wp$blocks.RichText;\n\n/**\n * Register block\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerBlockType('bctt/clicktotweet', {\n    title: __('Better Click to Tweet'),\n    description: __('The most popular click to tweet plugin for wordpress (by a mile), for good reason.'),\n    category: 'widgets',\n    icon: 'twitter',\n    keywords: [__('Twitter'), __('Tweet')],\n    attributes: __WEBPACK_IMPORTED_MODULE_1__attributes__[\"a\" /* default */],\n    edit: function edit(props) {\n\n        // Inspector control events\n        var onChangeTweet = function onChangeTweet(value) {\n            props.setAttributes({ tweet: value });\n        };\n        var onChangeUsername = function onChangeUsername(value) {\n            props.setAttributes({ username: value });\n        };\n        var toggleVia = function toggleVia() {\n            props.setAttributes({ via: !props.attributes.via });\n        };\n        var toggleUrl = function toggleUrl() {\n            props.setAttributes({ url: !props.attributes.url });\n        };\n        var onChangeUrlCustom = function onChangeUrlCustom(value) {\n            props.setAttributes({ urlcustom: value });\n        };\n        var toggleNoFollow = function toggleNoFollow() {\n            props.setAttributes({ nofollow: !props.attributes.nofollow });\n        };\n        var onChangePrompt = function onChangePrompt(value) {\n            props.setAttributes({ prompt: value });\n        };\n        var onClickPrompt = function onClickPrompt() {\n            return false;\n        };\n\n        return [\n        // Inspector Options\n        !!props.isSelected && wp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__inspector__[\"a\" /* default */], _extends({ onChangeTweet: onChangeTweet, onChangeUsername: onChangeUsername, toggleVia: toggleVia, toggleUrl: toggleUrl, onChangeUrlCustom: onChangeUrlCustom, toggleNoFollow: toggleNoFollow, onChangePrompt: onChangePrompt, onClickPrompt: onClickPrompt }, props)),\n\n        // Edit UI\n        wp.element.createElement(\n            'span',\n            { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default()(props.className, 'bctt-click-to-tweet'), key: props.className },\n            wp.element.createElement(\n                'span',\n                { 'class': 'bctt-ctt-text' },\n                wp.element.createElement(RichText, {\n                    tagName: 'div',\n                    placeholder: __('Enter text for readers to Tweet'),\n                    onChange: onChangeTweet,\n                    value: props.attributes.tweet\n                })\n            ),\n            wp.element.createElement(\n                'a',\n                { href: '#', onClick: onClickPrompt, 'class': 'bctt-ctt-btn' },\n                props.attributes.prompt\n            )\n        )];\n    },\n    save: function save() {\n        // Rendering shortcode using PHP callback\n        return null;\n    }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9ibG9jay9ibG9jay5qcz8yMDEyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbi8qKlxuICogQmxvY2sgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGJsb2NrQXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMnO1xuaW1wb3J0IEluc3BlY3RvciBmcm9tICcuL2luc3BlY3Rvcic7XG5cbi8qKlxuICogSW50ZXJuYWwgYmxvY2sgbGlicmFyaWVzXG4gKi9cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgX3dwJGJsb2NrcyA9IHdwLmJsb2NrcyxcbiAgICByZWdpc3RlckJsb2NrVHlwZSA9IF93cCRibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGUsXG4gICAgUmljaFRleHQgPSBfd3AkYmxvY2tzLlJpY2hUZXh0O1xuXG4vKipcbiAqIFJlZ2lzdGVyIGJsb2NrXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJCbG9ja1R5cGUoJ2JjdHQvY2xpY2t0b3R3ZWV0Jywge1xuICAgIHRpdGxlOiBfXygnQmV0dGVyIENsaWNrIHRvIFR3ZWV0JyksXG4gICAgZGVzY3JpcHRpb246IF9fKCdUaGUgbW9zdCBwb3B1bGFyIGNsaWNrIHRvIHR3ZWV0IHBsdWdpbiBmb3Igd29yZHByZXNzIChieSBhIG1pbGUpLCBmb3IgZ29vZCByZWFzb24uJyksXG4gICAgY2F0ZWdvcnk6ICd3aWRnZXRzJyxcbiAgICBpY29uOiAndHdpdHRlcicsXG4gICAga2V5d29yZHM6IFtfXygnVHdpdHRlcicpLCBfXygnVHdlZXQnKV0sXG4gICAgYXR0cmlidXRlczogYmxvY2tBdHRyaWJ1dGVzLFxuICAgIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblxuICAgICAgICAvLyBJbnNwZWN0b3IgY29udHJvbCBldmVudHNcbiAgICAgICAgdmFyIG9uQ2hhbmdlVHdlZXQgPSBmdW5jdGlvbiBvbkNoYW5nZVR3ZWV0KHZhbHVlKSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdHdlZXQ6IHZhbHVlIH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVXNlcm5hbWUodmFsdWUpIHtcbiAgICAgICAgICAgIHByb3BzLnNldEF0dHJpYnV0ZXMoeyB1c2VybmFtZTogdmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0b2dnbGVWaWEgPSBmdW5jdGlvbiB0b2dnbGVWaWEoKSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdmlhOiAhcHJvcHMuYXR0cmlidXRlcy52aWEgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciB0b2dnbGVVcmwgPSBmdW5jdGlvbiB0b2dnbGVVcmwoKSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdXJsOiAhcHJvcHMuYXR0cmlidXRlcy51cmwgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNoYW5nZVVybEN1c3RvbSA9IGZ1bmN0aW9uIG9uQ2hhbmdlVXJsQ3VzdG9tKHZhbHVlKSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgdXJsY3VzdG9tOiB2YWx1ZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRvZ2dsZU5vRm9sbG93ID0gZnVuY3Rpb24gdG9nZ2xlTm9Gb2xsb3coKSB7XG4gICAgICAgICAgICBwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgbm9mb2xsb3c6ICFwcm9wcy5hdHRyaWJ1dGVzLm5vZm9sbG93IH0pO1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb25DaGFuZ2VQcm9tcHQgPSBmdW5jdGlvbiBvbkNoYW5nZVByb21wdCh2YWx1ZSkge1xuICAgICAgICAgICAgcHJvcHMuc2V0QXR0cmlidXRlcyh7IHByb21wdDogdmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvbkNsaWNrUHJvbXB0ID0gZnVuY3Rpb24gb25DbGlja1Byb21wdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAvLyBJbnNwZWN0b3IgT3B0aW9uc1xuICAgICAgICAhIXByb3BzLmlzU2VsZWN0ZWQgJiYgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KEluc3BlY3RvciwgX2V4dGVuZHMoeyBvbkNoYW5nZVR3ZWV0OiBvbkNoYW5nZVR3ZWV0LCBvbkNoYW5nZVVzZXJuYW1lOiBvbkNoYW5nZVVzZXJuYW1lLCB0b2dnbGVWaWE6IHRvZ2dsZVZpYSwgdG9nZ2xlVXJsOiB0b2dnbGVVcmwsIG9uQ2hhbmdlVXJsQ3VzdG9tOiBvbkNoYW5nZVVybEN1c3RvbSwgdG9nZ2xlTm9Gb2xsb3c6IHRvZ2dsZU5vRm9sbG93LCBvbkNoYW5nZVByb21wdDogb25DaGFuZ2VQcm9tcHQsIG9uQ2xpY2tQcm9tcHQ6IG9uQ2xpY2tQcm9tcHQgfSwgcHJvcHMpKSxcblxuICAgICAgICAvLyBFZGl0IFVJXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzKHByb3BzLmNsYXNzTmFtZSwgJ2JjdHQtY2xpY2stdG8tdHdlZXQnKSwga2V5OiBwcm9wcy5jbGFzc05hbWUgfSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAnYmN0dC1jdHQtdGV4dCcgfSxcbiAgICAgICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfXygnRW50ZXIgdGV4dCBmb3IgcmVhZGVycyB0byBUd2VldCcpLFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZTogb25DaGFuZ2VUd2VldCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudHdlZXRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgeyBocmVmOiAnIycsIG9uQ2xpY2s6IG9uQ2xpY2tQcm9tcHQsICdjbGFzcyc6ICdiY3R0LWN0dC1idG4nIH0sXG4gICAgICAgICAgICAgICAgcHJvcHMuYXR0cmlidXRlcy5wcm9tcHRcbiAgICAgICAgICAgIClcbiAgICAgICAgKV07XG4gICAgfSxcbiAgICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgc2hvcnRjb2RlIHVzaW5nIFBIUCBjYWxsYmFja1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2016 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tclasses.push(classNames.apply(null, arg));\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif (typeof module !== 'undefined' && module.exports) {\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {\n\t\twindow.classNames = classNames;\n\t}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzPzFkNmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\n\n\nvar blockAttributes = {\n    tweet: {\n        type: 'string'\n    },\n    username: {\n        type: 'string',\n        default: bctt_options_js.username\n    },\n    via: {\n        type: 'boolean',\n        default: true\n    },\n    url: {\n        type: 'boolean',\n        default: true\n    },\n    urlcustom: {\n        type: 'string'\n    },\n    nofollow: {\n        type: 'boolean',\n        default: false\n    },\n    prompt: {\n        type: 'string',\n        default: __('Click To Tweet')\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (blockAttributes);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9ibG9jay9hdHRyaWJ1dGVzLmpzPzJlZGIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBibG9jayBsaWJyYXJpZXNcbiAqL1xudmFyIF9fID0gd3AuaTE4bi5fXztcblxuXG52YXIgYmxvY2tBdHRyaWJ1dGVzID0ge1xuICAgIHR3ZWV0OiB7XG4gICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVmYXVsdDogYmN0dF9vcHRpb25zX2pzLnVzZXJuYW1lXG4gICAgfSxcbiAgICB2aWE6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB1cmw6IHtcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgfSxcbiAgICB1cmxjdXN0b206IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICB9LFxuICAgIG5vZm9sbG93OiB7XG4gICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICB9LFxuICAgIHByb21wdDoge1xuICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgZGVmYXVsdDogX18oJ0NsaWNrIFRvIFR3ZWV0JylcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBibG9ja0F0dHJpYnV0ZXM7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvYmxvY2svYXR0cmlidXRlcy5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar InspectorControls = wp.blocks.InspectorControls;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl;\n\n/**\n* Create an Inspector Controls wrapper Component\n*/\n\nvar Inspector = function Inspector(props) {\n    return wp.element.createElement(\n        InspectorControls,\n        { key: 'inspector' },\n        wp.element.createElement(\n            PanelBody,\n            { Title: __('Tweet Settings') },\n            wp.element.createElement(TextControl, {\n                label: __('Twitter Username'),\n                value: props.attributes.username,\n                onChange: props.onChangeUsername\n            }),\n            wp.element.createElement(ToggleControl, {\n                label: __('Include the username in Tweet?'),\n                checked: !!props.attributes.via,\n                onChange: props.toggleVia\n            }),\n            wp.element.createElement(ToggleControl, {\n                label: __('Include URL in tweet?'),\n                checked: !!props.attributes.url,\n                onChange: props.toggleUrl\n            }),\n            wp.element.createElement(TextControl, {\n                label: __('Custom URL'),\n                value: props.attributes.urlcustom,\n                onChange: props.onChangeUrlCustom,\n                help: __('Custom URL to use instead of post')\n            }),\n            wp.element.createElement(ToggleControl, {\n                label: __('Nofollow'),\n                checked: !!props.attributes.nofollow,\n                onChange: props.toggleNoFollow,\n                help: __('Make links nofollow')\n            }),\n            wp.element.createElement(TextControl, {\n                label: __('Prompt'),\n                value: props.attributes.prompt,\n                onChange: props.onChangePrompt,\n                help: __('Text for action/prompt link')\n            })\n        )\n    );\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Inspector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9ibG9jay9pbnNwZWN0b3IuanM/ZGQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGJsb2NrIGxpYnJhcmllc1xuICovXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIEluc3BlY3RvckNvbnRyb2xzID0gd3AuYmxvY2tzLkluc3BlY3RvckNvbnRyb2xzO1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHksXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBUb2dnbGVDb250cm9sID0gX3dwJGNvbXBvbmVudHMuVG9nZ2xlQ29udHJvbDtcblxuLyoqXG4qIENyZWF0ZSBhbiBJbnNwZWN0b3IgQ29udHJvbHMgd3JhcHBlciBDb21wb25lbnRcbiovXG5cbnZhciBJbnNwZWN0b3IgPSBmdW5jdGlvbiBJbnNwZWN0b3IocHJvcHMpIHtcbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBJbnNwZWN0b3JDb250cm9scyxcbiAgICAgICAgeyBrZXk6ICdpbnNwZWN0b3InIH0sXG4gICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBhbmVsQm9keSxcbiAgICAgICAgICAgIHsgVGl0bGU6IF9fKCdUd2VldCBTZXR0aW5ncycpIH0sXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX18oJ1R3aXR0ZXIgVXNlcm5hbWUnKSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy51c2VybmFtZSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcHJvcHMub25DaGFuZ2VVc2VybmFtZVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9nZ2xlQ29udHJvbCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfXygnSW5jbHVkZSB0aGUgdXNlcm5hbWUgaW4gVHdlZXQ/JyksXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogISFwcm9wcy5hdHRyaWJ1dGVzLnZpYSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogcHJvcHMudG9nZ2xlVmlhXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUb2dnbGVDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdJbmNsdWRlIFVSTCBpbiB0d2VldD8nKSxcbiAgICAgICAgICAgICAgICBjaGVja2VkOiAhIXByb3BzLmF0dHJpYnV0ZXMudXJsLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy50b2dnbGVVcmxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IF9fKCdDdXN0b20gVVJMJyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMudXJsY3VzdG9tLFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZVVybEN1c3RvbSxcbiAgICAgICAgICAgICAgICBoZWxwOiBfXygnQ3VzdG9tIFVSTCB0byB1c2UgaW5zdGVhZCBvZiBwb3N0JylcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRvZ2dsZUNvbnRyb2wsIHtcbiAgICAgICAgICAgICAgICBsYWJlbDogX18oJ05vZm9sbG93JyksXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogISFwcm9wcy5hdHRyaWJ1dGVzLm5vZm9sbG93LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy50b2dnbGVOb0ZvbGxvdyxcbiAgICAgICAgICAgICAgICBoZWxwOiBfXygnTWFrZSBsaW5rcyBub2ZvbGxvdycpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuICAgICAgICAgICAgICAgIGxhYmVsOiBfXygnUHJvbXB0JyksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMucHJvbXB0LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZVByb21wdCxcbiAgICAgICAgICAgICAgICBoZWxwOiBfXygnVGV4dCBmb3IgYWN0aW9uL3Byb21wdCBsaW5rJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zcGVjdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2Jsb2NrL2luc3BlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);