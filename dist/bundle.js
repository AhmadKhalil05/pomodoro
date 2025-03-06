/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ✅ إعادة تعيين القيم الافتراضية للمتصفح */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    text-align: center;\n    background: linear-gradient(135deg, #2A2A72, #009FFD); /* ✅ لون حديث */\n    color: white;\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* ✅ تحسين الهيدر */\nheader {\n    width: 100%;\n    padding: 15px;\n    background: rgba(0, 0, 0, 0.3);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1 {\n    font-size: 24px;\n    margin-left: 20px;\n    font-weight: bold;\n}\n\nnav button {\n    background: none;\n    border: 2px solid white;\n    color: white;\n    font-size: 16px;\n    padding: 8px 15px;\n    margin-left: 10px;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\nnav button:hover {\n    background: white;\n    color: #2A2A72;\n}\n\n/* ✅ تحسين عرض المؤقت */\n.timer-container {\n    background: rgba(255, 255, 255, 0.1);\n    color: white;\n    padding: 25px;\n    border-radius: 12px;\n    text-align: center;\n    width: 400px;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n/* ✅ تبويبات Pomodoro */\n.tabs {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 15px;\n}\n\n.tabs button {\n    flex: 1;\n    border: none;\n    background: rgba(255, 255, 255, 0.2);\n    color: white;\n    font-size: 16px;\n    padding: 10px;\n    cursor: pointer;\n    transition: 0.3s;\n    border-radius: 5px;\n}\n\n.tabs button.active {\n    background: white;\n    color: #2A2A72;\n    font-weight: bold;\n}\n\n/* ✅ عرض الوقت */\n.timer {\n    font-size: 55px;\n    font-weight: bold;\n    background: white;\n    color: #2A2A72;\n    padding: 20px;\n    border-radius: 10px;\n    display: inline-block;\n    min-width: 200px;\n}\n\n/* ✅ تحسين أزرار التحكم */\n.timer-controls {\n    margin-top: 15px;\n}\n\n.timer-controls button {\n    background: #FFD700;\n    color: black;\n    border: none;\n    padding: 14px 25px;\n    font-size: 18px;\n    font-weight: bold;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: 0.3s;\n    margin: 5px;\n}\n\n.timer-controls button:hover {\n    background: #ffeb3b;\n}\n\n/* ✅ زر التنقل بين فترات الراحة */\n#toggle-breaks {\n    background: #ff8c00;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n    transition: 0.3s;\n    margin-top: 20px;\n}\n\n#toggle-breaks:hover {\n    background: #ffb74d;\n}\n\n/* ✅ تحسين المسافة بين العناصر */\n#status-message {\n    margin-top: 25px;\n    font-size: 18px;\n    font-weight: bold;\n}\n\n/* ✅ تحسين منطقة المهام */\n.tasks {\n    background: white;\n    color: black;\n    padding: 20px;\n    border-radius: 10px;\n    margin-top: 20px;\n    width: 400px;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n}\n\n.tasks h2 {\n    margin-bottom: 10px;\n    font-weight: bold;\n}\n\n#task-input {\n    width: 80%;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\n#add-task {\n    background: #2A2A72;\n    color: white;\n    border: none;\n    padding: 10px 15px;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: 0.3s;\n}\n\n#add-task:hover {\n    background: #009FFD;\n    color: black;\n}\n\n/* ✅ تحسين التصميم ليكون متجاوبًا */\n@media (max-width: 600px) {\n    .timer-container, .tasks {\n        width: 90%;\n    }\n\n    .timer {\n        font-size: 45px;\n    }\n\n    nav button {\n        font-size: 14px;\n        padding: 5px 10px;\n    }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://pomodoro-timer/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/auth.js":
/*!*********************!*\
  !*** ./src/auth.js ***!
  \*********************/
/***/ (() => {

eval("document.getElementById(\"login\").addEventListener(\"click\", () => {\n    let user = prompt(\"Enter your username:\");\n    if (user) {\n        localStorage.setItem(\"user\", user);\n        updateLoginStatus();\n    }\n});\n\nfunction updateLoginStatus() {\n    let user = localStorage.getItem(\"user\");\n    if (user) {\n        document.getElementById(\"login\").textContent = `👤 ${user} (Logout)`;\n        document.getElementById(\"login\").addEventListener(\"click\", () => {\n            localStorage.removeItem(\"user\");\n            location.reload();\n        });\n    }\n}\n\nupdateLoginStatus();\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/auth.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer.js */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui.js */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/settings.js */ \"./src/modules/settings.js\");\n/* harmony import */ var _modules_notifications_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/notifications.js */ \"./src/modules/notifications.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.js */ \"./src/auth.js\");\n/* harmony import */ var _auth_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_auth_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tasks.js */ \"./src/modules/tasks.js\");\n/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_tasks_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nlet mode = \"work\";\nlet workDuration = (0,_modules_settings_js__WEBPACK_IMPORTED_MODULE_2__.getWorkDuration)();\nlet shortBreakDuration = (0,_modules_settings_js__WEBPACK_IMPORTED_MODULE_2__.getShortBreakDuration)();\nlet longBreakDuration = (0,_modules_settings_js__WEBPACK_IMPORTED_MODULE_2__.getLongBreakDuration)();\n\ndocument.querySelectorAll(\".tab\").forEach(tab => {\n    tab.addEventListener(\"click\", () => {\n        mode = tab.getAttribute(\"data-mode\");\n        (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.setActiveTab)(mode);\n        (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer)(_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateUI, mode === \"work\" ? workDuration : mode === \"shortBreak\" ? shortBreakDuration : longBreakDuration);\n        (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateStatusMessage)(mode === \"work\" ? \"Time to focus!\" : mode === \"shortBreak\" ? \"Take a short break!\" : \"Enjoy your long break!\");\n    });\n});\n\ndocument.getElementById(\"start\").addEventListener(\"click\", () => {\n    (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.startTimer)(_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateUI, () => {\n        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_3__.playSound)();\n        (0,_modules_notifications_js__WEBPACK_IMPORTED_MODULE_3__.showNotification)(\"Time's up!\");\n    });\n});\n\ndocument.getElementById(\"pause\").addEventListener(\"click\", () => {\n    (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.pauseTimer)();\n});\n\ndocument.getElementById(\"toggle-breaks\").addEventListener(\"click\", () => {\n    mode = mode === \"shortBreak\" ? \"longBreak\" : \"shortBreak\";\n    (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_0__.resetTimer)(_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateUI, mode === \"shortBreak\" ? shortBreakDuration : longBreakDuration);\n    (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.updateStatusMessage)(mode === \"shortBreak\" ? \"Take a short break!\" : \"Enjoy your long break!\");\n    (0,_modules_ui_js__WEBPACK_IMPORTED_MODULE_1__.setActiveTab)(mode);\n});\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/main.js?");

/***/ }),

/***/ "./src/modules/notifications.js":
/*!**************************************!*\
  !*** ./src/modules/notifications.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   playSound: () => (/* binding */ playSound),\n/* harmony export */   showNotification: () => (/* binding */ showNotification)\n/* harmony export */ });\nfunction playSound() {\n    const audio = new Audio(\"../sounds/notification.mp3\");\n    audio.play();\n}\n\nfunction showNotification(message) {\n    if (\"Notification\" in window) {\n        Notification.requestPermission().then(permission => {\n            if (permission === \"granted\") {\n                new Notification(\"Pomodoro Timer\", { body: message });\n            }\n        });\n    }\n}\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/modules/notifications.js?");

/***/ }),

/***/ "./src/modules/settings.js":
/*!*********************************!*\
  !*** ./src/modules/settings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getLongBreakDuration: () => (/* binding */ getLongBreakDuration),\n/* harmony export */   getShortBreakDuration: () => (/* binding */ getShortBreakDuration),\n/* harmony export */   getWorkDuration: () => (/* binding */ getWorkDuration),\n/* harmony export */   setDurations: () => (/* binding */ setDurations)\n/* harmony export */ });\nfunction getWorkDuration() {\n    return parseInt(localStorage.getItem(\"workDuration\")) || 25;\n}\n\nfunction getShortBreakDuration() {\n    return parseInt(localStorage.getItem(\"shortBreakDuration\")) || 5;\n}\n\nfunction getLongBreakDuration() {\n    return parseInt(localStorage.getItem(\"longBreakDuration\")) || 15;\n}\n\nfunction setDurations(work, shortBreak, longBreak) {\n    localStorage.setItem(\"workDuration\", work);\n    localStorage.setItem(\"shortBreakDuration\", shortBreak);\n    localStorage.setItem(\"longBreakDuration\", longBreak);\n}\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/modules/settings.js?");

/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ (() => {

eval("document.getElementById(\"add-task\").addEventListener(\"click\", () => {\n    let taskInput = document.getElementById(\"task-input\");\n    let taskText = taskInput.value.trim();\n\n    if (taskText) {\n        let taskList = document.getElementById(\"task-list\");\n        let li = document.createElement(\"li\");\n        li.textContent = taskText;\n        taskList.appendChild(li);\n        taskInput.value = \"\";\n    }\n});\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/modules/tasks.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pauseTimer: () => (/* binding */ pauseTimer),\n/* harmony export */   resetTimer: () => (/* binding */ resetTimer),\n/* harmony export */   startTimer: () => (/* binding */ startTimer)\n/* harmony export */ });\nlet timer;\nlet isRunning = false;\nlet minutes = 25;\nlet seconds = 0;\n\nfunction startTimer(updateUI, onComplete) {\n    if (isRunning) return;\n    isRunning = true;\n\n    timer = setInterval(() => {\n        if (minutes === 0 && seconds === 0) {\n            clearInterval(timer);\n            isRunning = false;\n            onComplete();\n        } else {\n            if (seconds === 0) {\n                minutes--;\n                seconds = 59;\n            } else {\n                seconds--;\n            }\n            updateUI(minutes, seconds);\n        }\n    }, 1000);\n}\n\nfunction pauseTimer() {\n    clearInterval(timer);\n    isRunning = false;\n}\n\nfunction resetTimer(updateUI, defaultMinutes = 25) { // ✅ تمت إضافة resetTimer\n    clearInterval(timer);\n    isRunning = false;\n    minutes = defaultMinutes;\n    seconds = 0;\n    updateUI(minutes, seconds);\n}\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setActiveTab: () => (/* binding */ setActiveTab),\n/* harmony export */   updateStatusMessage: () => (/* binding */ updateStatusMessage),\n/* harmony export */   updateUI: () => (/* binding */ updateUI)\n/* harmony export */ });\nfunction updateUI(minutes, seconds) {\n    document.getElementById(\"minutes\").textContent = String(minutes).padStart(2, \"0\");\n    document.getElementById(\"seconds\").textContent = String(seconds).padStart(2, \"0\");\n}\n\nfunction setActiveTab(mode) {\n    document.querySelectorAll(\".tab\").forEach(tab => {\n        tab.classList.remove(\"active\");\n    });\n    document.querySelector(`[data-mode=\"${mode}\"]`).classList.add(\"active\");\n}\n\nfunction updateStatusMessage(message) {\n    document.getElementById(\"status-message\").textContent = message;\n}\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/modules/ui.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://pomodoro-timer/./src/style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;