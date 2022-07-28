/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/aplicacion.js":
/*!**************************!*\
  !*** ./js/aplicacion.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eliminar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eliminar.js */ \"./js/eliminar.js\");\n/* harmony import */ var _cobrar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cobrar.js */ \"./js/cobrar.js\");\n/* harmony import */ var _a_adir_iva_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./añadir_iva.js */ \"./js/añadir_iva.js\");\n\r\n\r\n\r\n\r\n(0,_eliminar_js__WEBPACK_IMPORTED_MODULE_0__.Eliminar)();\r\n(0,_cobrar_js__WEBPACK_IMPORTED_MODULE_1__.Cobrar)();\r\n(0,_a_adir_iva_js__WEBPACK_IMPORTED_MODULE_2__[\"AñadirIva\"])();\n\n//# sourceURL=webpack:///./js/aplicacion.js?");

/***/ }),

/***/ "./js/añadir_iva.js":
/*!**************************!*\
  !*** ./js/añadir_iva.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AñadirIva\": () => (/* binding */ AñadirIva)\n/* harmony export */ });\nlet AñadirIva = () =>{\r\n    let btnAñadir = document.querySelector('.añadir-iva-btn');\r\n    let Añadir = document.querySelector('.añadir-mesa');\r\n\r\n    if(btnAñadir){\r\n        btnAñadir.addEventListener('click', () =>{\r\n            Añadir.classList.add('activado');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/a%C3%B1adir_iva.js?");

/***/ }),

/***/ "./js/cobrar.js":
/*!**********************!*\
  !*** ./js/cobrar.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cobrar\": () => (/* binding */ Cobrar)\n/* harmony export */ });\nlet Cobrar = () =>{\r\n    let btnCobrar = document.querySelector('.boton-cobrar');\r\n    let ticket = document.querySelector('.cobrar-ticket');\r\n\r\n    if(btnCobrar){\r\n        btnCobrar.addEventListener('click', () =>{\r\n            ticket.classList.add('activado');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/cobrar.js?");

/***/ }),

/***/ "./js/eliminar.js":
/*!************************!*\
  !*** ./js/eliminar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Eliminar\": () => (/* binding */ Eliminar)\n/* harmony export */ });\nlet Eliminar = () =>{\r\n\r\n    let btnEliminar = document.querySelector('.boton-eliminar');\r\n    let ticket = document.querySelector('.eliminar-ticket');\r\n    if(btnEliminar){\r\n        btnEliminar.addEventListener('click', () =>{\r\n            ticket.classList.add('activado');\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/eliminar.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/aplicacion.js");
/******/ 	
/******/ })()
;