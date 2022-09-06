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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\nconst sidebar = document.getElementById('sidebar');\nconst main = document.getElementById('main');\n\nconst taskbtn = document.getElementById('taskBtn');\ntaskbtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(taskBtn);\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\n  function newTask() {\n    const task = document.createElement('div');\n    task.classList.add('task');\n\n  }\n\n  const addBtn = document.getElementById(\"addBtns\");\n  addBtn.addEventListener('click', (e) => {\n    hideBtn(e);\n    sideForm.style.display = 'grid';\n  });\n\n  const sideForm = document.getElementById('sideForm');\n\n  function hideBtn(e) {\n    const button = document.getElementById(e.target.id);\n    button.style.display = 'none';\n  }\n\n  function getTask() {\n    //get task from user\n  }\n\n  function addTaskToList() {\n    // add the task to a list of tasks\n  }\n\n  function updateListDisplay() {\n    // update displayed list so that it shows new tasks\n  }\n\n  function setActiveButton(button) {\n    const buttons = document.querySelectorAll('.defaultBtns');\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove('active');\n      }\n    });\n  \n    button.classList.add('active');\n  }\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTaskBox() {\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('id', 'taskContainer');\n\n    const title = document.createElement('p');\n    title.classList.add('title');\n    title.textContent = \"Tasks\";\n    taskContainer.appendChild(title);\n\n    return taskContainer;\n}\n\nfunction loadTaskContainer() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createTaskBox());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskContainer);\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;