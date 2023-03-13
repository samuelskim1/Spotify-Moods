/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/samuelskim1/js_project/src/index.js: Identifier 'svg' has already been declared. (25:6)\n\n\u001b[0m \u001b[90m 23 |\u001b[39m \u001b[36mconst\u001b[39m height \u001b[33m=\u001b[39m \u001b[35m450\u001b[39m \u001b[33m-\u001b[39m margin\u001b[33m.\u001b[39mtop \u001b[33m-\u001b[39m margin\u001b[33m.\u001b[39mbottom\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 24 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 25 |\u001b[39m \u001b[36mconst\u001b[39m svg \u001b[33m=\u001b[39m d3\u001b[33m.\u001b[39mselect(\u001b[32m\"svg\"\u001b[39m)\u001b[33m;\u001b[39m \u001b[90m//selecting the element with the HTML tag \"svg\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 |\u001b[39m svg\u001b[33m.\u001b[39mattr(\u001b[32m\"id\"\u001b[39m\u001b[33m,\u001b[39m\u001b[32m\"myGraph\"\u001b[39m)\u001b[33m;\u001b[39m \u001b[90m//giving svg the attribute of id = \"id arg\"\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 |\u001b[39m svg\u001b[33m.\u001b[39mattr(\u001b[32m\"width\"\u001b[39m\u001b[33m,\u001b[39m width \u001b[33m+\u001b[39m margin\u001b[33m.\u001b[39mleft \u001b[33m+\u001b[39m margin\u001b[33m.\u001b[39mright)\u001b[0m\n\u001b[0m \u001b[90m 28 |\u001b[39m svg\u001b[33m.\u001b[39mattr(\u001b[32m\"height\"\u001b[39m\u001b[33m,\u001b[39m height \u001b[33m+\u001b[39m margin\u001b[33m.\u001b[39mtop \u001b[33m+\u001b[39m margin\u001b[33m.\u001b[39mbottom)\u001b[0m\n    at instantiate (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:64:32)\n    at constructor (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:364:12)\n    at Parser.raise (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:3253:19)\n    at ScopeHandler.checkRedeclarationInScope (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:1542:19)\n    at ScopeHandler.declareName (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:1513:12)\n    at Parser.declareNameFromIdentifier (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:7531:16)\n    at Parser.checkIdentifier (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:7527:12)\n    at Parser.checkLVal (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:7466:12)\n    at Parser.parseVarId (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:13218:10)\n    at Parser.parseVar (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:13191:12)\n    at Parser.parseVarStatement (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:13031:10)\n    at Parser.parseStatementContent (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:12628:23)\n    at Parser.parseStatementLike (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:12548:17)\n    at Parser.parseModuleItem (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:12525:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:13120:36)\n    at Parser.parseBlockBody (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:13113:10)\n    at Parser.parseProgram (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:12439:10)\n    at Parser.parseTopLevel (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:12429:25)\n    at Parser.parse (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:14250:10)\n    at parse (/home/samuelskim1/js_project/node_modules/@babel/parser/lib/index.js:14292:38)\n    at parser (/home/samuelskim1/js_project/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/samuelskim1/js_project/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/samuelskim1/js_project/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/home/samuelskim1/js_project/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/home/samuelskim1/js_project/node_modules/gensync/index.js:261:32)\n    at /home/samuelskim1/js_project/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/samuelskim1/js_project/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;