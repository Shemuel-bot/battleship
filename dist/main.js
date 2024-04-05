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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Noto_Sans/static/NotoSans-Medium.ttf */ \"./src/fonts/Noto_Sans/static/NotoSans-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/16397036_2012.i518.032_sea_ocean_wave_sky.jpg */ \"./src/images/16397036_2012.i518.032_sea_ocean_wave_sky.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n    font-family: battle-ship;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\nbody{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: battle-ship;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n}\n#boards{\n    display: flex;\n    align-items: center;\n    margin-top: 200px;\n}\n#head{\n    display: flex;\n    align-items: center;\n    gap:  8px;\n}\n\n#ai-board, #player-board{\n    display: flex;\n    flex-wrap: wrap;\n    width: 320px;\n    height: 320px;\n    background-color: #e2e8f0ab;\n    padding: 8px;\n}\n#ai-board > div, #player-board > div {\n    background-color: aliceblue;\n}\n#ai-board > div:hover, #player-board > div:hover {\n    background-color: rgba(124, 124, 124, 0.37);\n}\nbutton{\n    font-size: large;\n    border-style: none;\n    background-color: #e2e8f0;\n    border-radius: 2px;\n    height: 30px;\n    box-shadow: 0px 5px 10px rgba(134, 134, 134, 0.473);\n\n}\n\nh1{\n    color: #3f5063;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMinteractions.js":
/*!********************************!*\
  !*** ./src/DOMinteractions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHoveringShips: () => (/* binding */ displayHoveringShips),\n/* harmony export */   displayPlayerShips: () => (/* binding */ displayPlayerShips),\n/* harmony export */   displayWinner: () => (/* binding */ displayWinner),\n/* harmony export */   updateAiBoardsHitTargets: () => (/* binding */ updateAiBoardsHitTargets),\n/* harmony export */   updateAiBoardsMissedShots: () => (/* binding */ updateAiBoardsMissedShots),\n/* harmony export */   updatePlayerBoardsHitTargets: () => (/* binding */ updatePlayerBoardsHitTargets),\n/* harmony export */   updatePlayerBoardsMissedShots: () => (/* binding */ updatePlayerBoardsMissedShots)\n/* harmony export */ });\n/* harmony import */ var _gameManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameManager */ \"./src/gameManager.js\");\n\n\nconst updateAiBoardsMissedShots = (array) => {\n  const aiBoard = Array.from(document.getElementById(\"ai-board\").childNodes);\n  for (let i = 0; i < aiBoard.length; i += 1) {\n    const id = `${aiBoard[i].id}`;\n    array.forEach((x) => {\n      if (x[0] === id.at(0) && x[1] === id.at(2)) {\n        aiBoard[i].style.backgroundColor = \"#f87171\";\n      }\n    });\n  }\n};\n\nconst updateAiBoardsHitTargets = (array) => {\n  const aiBoard = Array.from(document.getElementById(\"ai-board\").childNodes);\n  for (let i = 0; i < aiBoard.length; i += 1) {\n    const id = `${aiBoard[i].id}`;\n    array.forEach((b) => {\n      if (b[0] === id.at(0) && b[1] === id.at(2)) {\n        aiBoard[i].style.backgroundColor = \"#22d3ee\";\n      }\n    });\n  }\n};\n\nconst updatePlayerBoardsMissedShots = (array) => {\n  const playerBoard = Array.from(\n    document.getElementById(\"player-board\").childNodes,\n  );\n  for (let i = 0; i < playerBoard.length; i += 1) {\n    const id = `${playerBoard[i].id}`;\n    array.forEach((x) => {\n      if (Number(x[0]) === Number(id.at(0)) && Number(x[1]) === Number(id.at(2))) {\n        playerBoard[i].style.backgroundColor = \"#f87171\";\n      }\n    });\n  }\n};\n\nconst updatePlayerBoardsHitTargets = (array) => {\n  const playerBoard = Array.from(\n    document.getElementById(\"player-board\").childNodes,\n  );\n  for (let i = 0; i < playerBoard.length; i += 1) {\n    const id = `${playerBoard[i].id}`;\n    array.forEach((b) => {\n      if (Number(b[0]) === Number(id.at(0)) && Number(b[1]) === Number(id.at(2))) {\n        playerBoard[i].style.backgroundColor = \"#22d3ee\";\n      }\n    });\n  }\n};\n\nconst displayPlayerShips = (array) => {\n  const playerBoard = Array.from(\n    document.getElementById(\"player-board\").childNodes,\n  );\n  const ids = [];\n  playerBoard.forEach((a) => ids.push(a.id));\n  array.forEach((a) => {\n    if (ids.includes(`${a[0]},${a[1]}`))\n      playerBoard[ids.indexOf(`${a[0]},${a[1]}`)].style.backgroundColor =\n        \"black\";\n  });\n};\n\nconst displayHoveringShips = (array) => {\n  const playerBoard = Array.from(\n    document.getElementById(\"player-board\").childNodes,\n  );\n  const ids = [];\n  playerBoard.forEach((a) => ids.push(a.id));\n  playerBoard.forEach((b) => {\n      b.style.backgroundColor = \"white\";\n  });\n  array.forEach((a) => {\n    if (ids.includes(`${a[0]},${a[1]}`))\n      playerBoard[ids.indexOf(`${a[0]},${a[1]}`)].style.backgroundColor =\n        \"#a1a1aa\";\n  });\n};\n\nconst displayWinner = (winner) =>{\n    document.getElementById('winner-banner').textContent = `${winner}, Won!`\n}\n\nconst remakeSquares = () => {\n  let y = 8;\n  let x = 1;\n  for (let i = 0; i < 64; i += 1) {\n    if (x > 8) {\n      y -= 1;\n      x = 1;\n    }\n    const square0 = document.createElement(\"div\");\n    const square1 = document.createElement(\"div\");\n\n    square0.style.width = \"40px\";\n    square0.style.height = \"40px\";\n    square1.style.width = \"40px\";\n    square1.style.height = \"40px\";\n\n    square0.id = [x, y];\n    square1.id = [x, y];\n    x += 1;\n\n    document.getElementById(\"ai-board\").appendChild(square0);\n    document.getElementById(\"player-board\").appendChild(square1);\n\n    square0.addEventListener(\"click\", () => {\n      (0,_gameManager__WEBPACK_IMPORTED_MODULE_0__.attackBoard)([`${square0.id}`.at(0), `${square0.id}`.at(2)]);\n    });\n    square1.addEventListener(\"click\", () =>\n      (0,_gameManager__WEBPACK_IMPORTED_MODULE_0__.placePlayerShips)([`${square1.id}`.at(0), `${square1.id}`.at(2)]),\n    );\n    square1.addEventListener(\"mouseenter\", () =>\n      (0,_gameManager__WEBPACK_IMPORTED_MODULE_0__.displayHoveringPlayerShips)([\n        `${square1.id}`.at(0),\n        `${square1.id}`.at(2),\n      ]),\n    );\n  }\n};\n\nconst removeSquare = () => {\n  const aiBoard = Array.from(document.getElementById(\"ai-board\").childNodes);\n  const playerBoard = Array.from(\n    document.getElementById(\"player-board\").childNodes,\n  );\n  aiBoard.forEach((x) => x.remove());\n  playerBoard.forEach((x) => x.remove());\n};\n\ndocument.querySelector(\"button\").addEventListener(\"click\", () => {\n  removeSquare();\n  remakeSquares();\n  (0,_gameManager__WEBPACK_IMPORTED_MODULE_0__.newGame)();\n});\n\n//# sourceURL=webpack://battleship/./src/DOMinteractions.js?");

/***/ }),

/***/ "./src/ai.js":
/*!*******************!*\
  !*** ./src/ai.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass AI {\n  constructor(bot = false) {\n    this.bot = bot;\n  }\n\n  allBoardCoordinates(){\n    const positions = [];\n    let y = 8;\n    let x = 1;\n    for (let i = 0; i < 64; i+=1) {\n        if (x > 8) {\n            y -= 1;\n            x = 1;\n        }\n        positions.push([x, y])\n        x+=1;\n    }\n    return positions;\n  }\n\n  IndexOf(positions, element){\n    for (let i = 0; i < positions.length; i+=1) {\n      if(`${positions[i]}` === `${element}`)\n        return i\n    }\n  }\n\n  aiShot(board) {\n    const positions = this.allBoardCoordinates();\n    console.clear()\n    board.missedAttacks.forEach(element => {\n      if(`${positions}`.includes(`${element}`)){\n        positions.splice(this.IndexOf(positions, element), 1)\n      }\n    });\n    board.hitShipsAttacks.forEach(element => {\n      if(`${positions}`.includes(`${element}`)){\n        positions.splice(this.IndexOf(positions, element), 1)\n      }\n    });\n    return positions[Math.floor(Math.random() * positions.length)];\n  }\n\n  \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AI);\n\n\n//# sourceURL=webpack://battleship/./src/ai.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass GameBoard {\n  constructor() {\n    this.ships = [];\n    this.missedAttacks = [];\n    this.hitShipsAttacks = [];\n    this.allShipCoordinates = [];\n  }\n\n  specificShipCoodinates(coordinate, length) {\n    const coordinates = [];\n    if (length > 1) {\n      for (let i = 0; i < length; i += 1) {\n        if (i < length / 2)\n          coordinates.unshift([\n            Number(coordinate[0]) + -i,\n            Number(coordinate[1]),\n          ]);\n        else {\n          const array = [];\n          coordinates.forEach((x) => {\n            array.push(x[0]);\n          });\n          coordinates.push([Math.max(...array) + 1, coordinate[1]]);\n        }\n      }\n    } else if (length === 1) coordinates.push(coordinate);\n    return coordinates;\n  }\n\n  placeShip(coordinate, length) {\n    const object = {};\n    object.ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](length);\n    object.coordinates = [];\n\n    if (length > 1) {\n      for (let i = 0; i < length; i += 1) {\n        if (i < length / 2)\n          object.coordinates.unshift([\n            Number(coordinate[0]) + -i,\n            Number(coordinate[1]),\n          ]);\n        else {\n          const array = [];\n          object.coordinates.forEach((x) => {\n            array.push(x[0]);\n          });\n          object.coordinates.push([Math.max(...array) + 1, coordinate[1]]);\n        }\n      }\n    } else if (length === 1) object.coordinates.push(coordinate);\n\n    this.ships.push(object);\n    this.allShipCoordinates.push(...object.coordinates);\n  }\n\n  recieveAttack(coordinate) {\n    let contains = false;\n    this.ships.forEach((x) => {\n      x.coordinates.forEach((y) => {\n        if (\n          Number(y[0]) === Number(coordinate[0]) &&\n          Number(y[1]) === Number(coordinate[1])\n        ) {\n          if (!`${this.hitShipsAttacks}`.includes(`${coordinate}`)) {\n            this.hitShipsAttacks.push(coordinate);\n            contains = true;\n          }\n          // eslint-disable-next-line no-useless-return\n          return;\n        }\n      });\n    });\n    if (!contains) this.missedAttacks.push(coordinate);\n  }\n\n\n\n  haveLost() {\n    if (this.hitShipsAttacks.length === this.allShipCoordinates.length)\n      return true;\n    return false;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameManager.js":
/*!****************************!*\
  !*** ./src/gameManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   attackBoard: () => (/* binding */ attackBoard),\n/* harmony export */   displayHoveringPlayerShips: () => (/* binding */ displayHoveringPlayerShips),\n/* harmony export */   newGame: () => (/* binding */ newGame),\n/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips)\n/* harmony export */ });\n/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai */ \"./src/ai.js\");\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n/* harmony import */ var _DOMinteractions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMinteractions */ \"./src/DOMinteractions.js\");\n\n\n\n\nlet playerGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nlet botGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst botPlayer = new _ai__WEBPACK_IMPORTED_MODULE_0__[\"default\"](true);\n\nconst randomCoordNumber = (max) => {\n  const num = Math.floor(Math.random() * max);\n  if (num <= 0) return 1;\n  return num;\n};\n\nconst placeBotShips = () => {\n  botGameBoard.placeShip([randomCoordNumber(4), randomCoordNumber(8)], 1);\n  botGameBoard.placeShip([5, randomCoordNumber(8)], 4);\n  botGameBoard.placeShip([4, randomCoordNumber(8)], 3);\n  botGameBoard.placeShip([7, randomCoordNumber(8)], 2);\n};\n\nconst newGame = () => {\n  playerGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  botGameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  placeBotShips();\n};\n\nconst attackBoard = (coordinate) => {\n  if (!botGameBoard.haveLost() && !playerGameBoard.haveLost()) {\n    botGameBoard.recieveAttack(coordinate);\n    playerGameBoard.recieveAttack(botPlayer.aiShot(playerGameBoard));\n    (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.updateAiBoardsMissedShots)(botGameBoard.missedAttacks);\n    (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.updateAiBoardsHitTargets)(botGameBoard.hitShipsAttacks);\n\n    (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.updatePlayerBoardsHitTargets)(playerGameBoard.hitShipsAttacks);\n    (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.updatePlayerBoardsMissedShots)(playerGameBoard.missedAttacks);\n  }\n  if(botGameBoard.haveLost())\n        (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.displayWinner)('You')\n  if(playerGameBoard.haveLost())\n        (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.displayWinner)('CPU')\n};\n\nconst placePlayerShips = (coordinate) => {\n  if (playerGameBoard.ships.length < 4) {\n    playerGameBoard.placeShip(coordinate, playerGameBoard.ships.length + 1);\n    (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.displayPlayerShips)(playerGameBoard.allShipCoordinates);\n  }\n};\n\nconst displayHoveringPlayerShips = (coordinate) =>{\n    if (playerGameBoard.ships.length < 4) {\n        (0,_DOMinteractions__WEBPACK_IMPORTED_MODULE_2__.displayHoveringShips)(playerGameBoard.specificShipCoodinates(coordinate, playerGameBoard.ships.length + 1))\n    }\n}\n\n\n//# sourceURL=webpack://battleship/./src/gameManager.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOMinteractions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMinteractions */ \"./src/DOMinteractions.js\");\n\n\n// import './gameManager'\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship{\n    constructor(length){\n        this.length = length\n        this.hits = 0;\n        this.sunk = false\n    }\n\n    hit(){\n        this.hits+=1\n        this.isSunk()\n    }\n\n    isSunk(){\n        if(this.hits >= this.length) this.sunk = true;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ }),

/***/ "./src/fonts/Noto_Sans/static/NotoSans-Medium.ttf":
/*!********************************************************!*\
  !*** ./src/fonts/Noto_Sans/static/NotoSans-Medium.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ddf8f340fd643ba75a2.ttf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/Noto_Sans/static/NotoSans-Medium.ttf?");

/***/ }),

/***/ "./src/images/16397036_2012.i518.032_sea_ocean_wave_sky.jpg":
/*!******************************************************************!*\
  !*** ./src/images/16397036_2012.i518.032_sea_ocean_wave_sky.jpg ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"682775a9ad16fe39ea56.jpg\";\n\n//# sourceURL=webpack://battleship/./src/images/16397036_2012.i518.032_sea_ocean_wave_sky.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;