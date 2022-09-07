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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./week */ \"./src/week.js\");\n\n\n\n\nlet myTasks = [];\n\nfunction Task(task, date) {\n    this.task = task;\n    this.date = date;\n}\n\nconst sidebar = document.getElementById('sidebar');\nconst main = document.getElementById('main');\n\nconst taskBtn = document.getElementById('taskBtn');\ntaskBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(taskBtn);\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n\nconst todayBtn = document.getElementById('todayBtn');\ntodayBtn.addEventListener('click', (e) => {\n    if (e.target.classList.contains('active')) return;\n    setActiveButton(todayBtn);\n    (0,_today__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n\nconst weekBtn = document.getElementById('weekBtn');\n  weekBtn.addEventListener('click', (e) => {\n  if (e.target.classList.contains('active')) return;\n  setActiveButton(weekBtn);\n  (0,_week__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\nfunction newTask() {\n    const task = document.createElement('div');\n    task.classList.add('task');\n}\n\nconst addBtn = document.getElementById(\"addProjects\");\naddBtn.addEventListener('click', (e) => {\n    const button = document.getElementById(e.target.id);\n    button.style.display = 'none';\n    sideForm.style.display = 'grid';\n});\n\nconst sideForm = document.getElementById('sideForm');\nfunction getTask() {\n    //get task from user\n}\n\nfunction addTaskToList() {\n    // add the task to a list of tasks\n}\n\nfunction updateListDisplay() {\n    // update displayed list so that it shows new tasks\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.defaultBtns');\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n        button.classList.remove('active');\n    }\n    });\n\n    button.classList.add('active');\n}\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTaskBox() {\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('id', 'taskContainer');\n\n    const title = document.createElement('p');\n    title.classList.add('title');\n    title.textContent = \"Tasks\";\n    taskContainer.appendChild(title);\n\n    const allTasks = document.createElement('div');\n    allTasks.classList.add('tasklist');\n    taskContainer.appendChild(allTasks);\n\n    const addBtns = document.createElement('button');\n    addBtns.setAttribute('id', 'addTasks');\n    addBtns.textContent = \"+ New Tasks\"\n    addBtns.addEventListener('click', (e) => {\n        const button = document.getElementById(e.target.id);\n        button.style.display = 'none';\n        const form = document.getElementById('taskFormInput');\n        form.style.display = 'grid';\n    });\n\n    taskContainer.appendChild(addBtns);\n\n    taskContainer.appendChild(createForm());\n\n    return taskContainer;\n}\n\nfunction createForm() {\n    const form = document.createElement('form');\n    form.classList.add('taskForm');\n    form.setAttribute('id', 'taskFormInput');\n\n    const input = document.createElement('input');\n    input.type = 'text';\n    form.appendChild(input);\n\n    const addBtn = document.createElement('button');\n    addBtn.classList.add('add');\n    addBtn.textContent = \"Add\";\n    form.appendChild(addBtn);\n\n    const cancelBtn = document.createElement('button');\n    cancelBtn.classList.add('cancel');\n    cancelBtn.textContent = \"Cancel\"\n    form.appendChild(cancelBtn);\n\n    form.style.display = \"none\";\n\n    return form;\n}\n\nfunction loadTaskContainer() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createTaskBox());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadTaskContainer);\n\n//# sourceURL=webpack://todo-list/./src/tasks.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createToday() {\n    const today = document.createElement('div');\n    today.setAttribute('id', 'today');\n\n    const title = document.createElement('p');\n    title.classList.add('title');\n    title.textContent = \"Today's Tasks\";\n    today.appendChild(title);\n\n    const dailyTask = document.createElement('div');\n    dailyTask.classList.add('tasklist');\n    today.appendChild(dailyTask);\n\n    return today;\n}\n\nfunction loadToday() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createToday());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\n\n//# sourceURL=webpack://todo-list/./src/today.js?");

/***/ }),

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createWeek() {\n    const week = document.createElement('div');\n    week.setAttribute('id', 'week');\n\n    const title = document.createElement('p');\n    title.classList.add('title');\n    title.textContent = \"This Week's Tasks\";\n    week.appendChild(title);\n\n    const weeklyTask = document.createElement('div');\n    weeklyTask.classList.add('tasklist');\n    week.appendChild(weeklyTask);\n\n    return week;\n}\n\nfunction loadWeek() {\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createWeek());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWeek);\n\n//# sourceURL=webpack://todo-list/./src/week.js?");

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