/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/DancingScript-Bold.ttf */ "./src/fonts/DancingScript-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Medium.ttf */ "./src/fonts/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'BrandFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'contentFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\n:root{\n    --navbar-color : #DC4D3D;\n    --sidebar-color: #F7F7F7;\n    --content-color: #FEFEFE;\n    --brandName-color : #FEFEFE;\n    --toggleButtonHover-color:#E27065;\n    --sidebarHove-color:#dfdcdc;\n    --paddingBottom-color : #f0f0f0;\n    --inputBoarder-color:#CED4DA;\n    --inputFocus-color: #A7A7FD;\n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\np,ul,img{\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    list-style: none;\n}\n\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.hide-element{\n    display: none !important; \n\n}\n\n.left-padding{\n    padding-left: 40px !important;\n}\n\n.bottom-padding{\n    border-bottom: 2px solid var(--paddingBottom-color);\n    padding-bottom: 5px;\n}\n\n/***************************************************Navbar******************************************/\n\n#navbar{\n    background-color: var(--navbar-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 200px 10px 70px;\n    align-items: center;\n}\n\n#brand-name{\n    font-family: 'BrandFont';\n    font-size: 3rem;\n    color: var(--brandName-color);\n}\n\n#toggle-button{\n    padding: 1px 1px 0 1px;\n    border-radius: 10px;\n}\n\n#toggle-button:hover{\n    background-color: var(--toggleButtonHover-color);\n}\n\n/****************************************************Sidebar*****************************************/\n#container{\n    flex : 1;\n    background-color: var(--content-color);\n    display: flex;\n}\n\n#sidebar{\n    padding: 20px 30px 20px 40px;\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n}\n\n.selected{\n    background-color: var(--sidebarHove-color);\n}\n\n.sidebar-element{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-family: 'contentFont';\n    align-items: center;\n    font-size: 1.1rem;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.sidebar-element:hover{\n    background-color: var(--sidebarHove-color);\n    cursor: pointer;\n}\n\n#addProject:hover{\n    color: var(--navbar-color);\n    background-color: var(--sidebar-color);\n    cursor: pointer;\n}\n\n\n\n#projectList div{\n    display: flex;\n    align-items: center;\n    gap: 10px;  \n    font-family: 'contentFont';\n    font-size: 1.1rem;\n    padding: 5px;\n}\n\n#project-form{\n    padding: 0;\n    background-color: var(--sidebar-color);\n    gap: 5px;\n}\n\n#project-form .form-element{\n    width: 100%;\n}\n\n#project-form .form-element input{\n    text-indent: 10px;\n}\n\n#project-form .buttons{\n    display: flex;\n    justify-content: center;\n}\n\n.buttons button{\n    padding: 10px;\n    font-size: 0.9rem;\n    border-radius: 10px;\n    background-color: var(--brandName-color);\n    border: 1px solid var(--inputBoarder-color);\n    font-family: 'contentFont';\n}\n\n.buttons button:first-child:hover{\n    background-color: green;\n    color: var(--brandName-color);\n}\n\n.buttons button:last-child:hover{\n    background-color: red;\n    color: var(--brandName-color);\n}\n\n.tast-viewer{\n    margin-bottom: 5px;\n}\n\n.tast-viewer:hover{\n    background-color: var(--sidebarHove-color);\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n\n\n\n/**********************************************tasks***************************************/\n#content{\n    flex: 1;\n    padding: 50px 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#title{\n    font-family: \"contentFont\";\n    font-size: 2.5rem;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.task-info{\n    display: flex;\n    align-items: center;\n    font-family: 'contentFont';\n}\n\n.task-info:hover{\n    cursor: pointer;\n}\n\n.task-info img{\n    padding: 8px;\n    border-radius: 5px;\n    position: relative;\n}\n\n.task-info img:hover{\n    background-color: var(--sidebar-color);\n}\n\n.task-info p{\n    padding-left: 10px;\n    font-size: 1.2rem;\n}\n\n\n\n\n\n\n/*******************************************Add Task Button************************************/\n\n#content button{\n    font-size: 1.5rem;\n    padding: 10px;\n    background-color: var(--content-color);\n    border: none;\n    font-family: 'contentFont';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#content button:hover{\n    background-color: var(--sidebar-color);\n}\n\n/************************************Add Task form*****************************************/\n#overlayForm{\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    background-color: var(--content-color);\n    padding: 20px 30px;\n    border-radius: 20px;\n    gap : 15px;\n    font-size: 1rem;\n}\n\n\n#form-info{\n    display: flex;\n    justify-content: space-between;\n}\n\n#form-info p{\n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n#form-info img:hover{\n    cursor: pointer;\n}\n\n#form-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.form-element{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px;\n    width: 400px;\n}\n\n.form-element label{\n    font-family: 'contentFont';\n}\n\n.form-element input{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    font-size: 1rem;\n}\n\n.form-element input:focus ,.custome-select:focus , .form-element textarea:focus{\n    border-color: var(--inputFocus-color);\n    outline: none;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.custome-select{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    background-color: white;\n    font-size: 1rem;\n    padding: 0 0 0 10px;\n    -webkit-appearance: none;\n}\n\n.form-element textarea{\n    border: 1px solid var(--inputBoarder-color);\n    resize: vertical;\n    font-size: 1rem;\n}    \n\n.form-element input[type = date]{\n    padding: 0px 10px;\n}\n\n#form button{\n    padding: 10px 30px;\n    font-size: 1.2rem;\n    font-family: 'contentFont';\n    width: fit-content;\n    margin: 20px auto 0 auto;\n    background-color: white;\n    border-radius: 10px;\n    border: 1px solid var(--inputBoarder-color);\n}\n\n#form button:hover{\n    background-color: rgb(210, 183, 183);\n}\n\n\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'BrandFont';\n    src: url('./fonts/DancingScript-Bold.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'contentFont';\n    src: url('./fonts/Roboto-Medium.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\n:root{\n    --navbar-color : #DC4D3D;\n    --sidebar-color: #F7F7F7;\n    --content-color: #FEFEFE;\n    --brandName-color : #FEFEFE;\n    --toggleButtonHover-color:#E27065;\n    --sidebarHove-color:#dfdcdc;\n    --paddingBottom-color : #f0f0f0;\n    --inputBoarder-color:#CED4DA;\n    --inputFocus-color: #A7A7FD;\n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\np,ul,img{\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    list-style: none;\n}\n\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.hide-element{\n    display: none !important; \n\n}\n\n.left-padding{\n    padding-left: 40px !important;\n}\n\n.bottom-padding{\n    border-bottom: 2px solid var(--paddingBottom-color);\n    padding-bottom: 5px;\n}\n\n/***************************************************Navbar******************************************/\n\n#navbar{\n    background-color: var(--navbar-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 200px 10px 70px;\n    align-items: center;\n}\n\n#brand-name{\n    font-family: 'BrandFont';\n    font-size: 3rem;\n    color: var(--brandName-color);\n}\n\n#toggle-button{\n    padding: 1px 1px 0 1px;\n    border-radius: 10px;\n}\n\n#toggle-button:hover{\n    background-color: var(--toggleButtonHover-color);\n}\n\n/****************************************************Sidebar*****************************************/\n#container{\n    flex : 1;\n    background-color: var(--content-color);\n    display: flex;\n}\n\n#sidebar{\n    padding: 20px 30px 20px 40px;\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n}\n\n.selected{\n    background-color: var(--sidebarHove-color);\n}\n\n.sidebar-element{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-family: 'contentFont';\n    align-items: center;\n    font-size: 1.1rem;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.sidebar-element:hover{\n    background-color: var(--sidebarHove-color);\n    cursor: pointer;\n}\n\n#addProject:hover{\n    color: var(--navbar-color);\n    background-color: var(--sidebar-color);\n    cursor: pointer;\n}\n\n\n\n#projectList div{\n    display: flex;\n    align-items: center;\n    gap: 10px;  \n    font-family: 'contentFont';\n    font-size: 1.1rem;\n    padding: 5px;\n}\n\n#project-form{\n    padding: 0;\n    background-color: var(--sidebar-color);\n    gap: 5px;\n}\n\n#project-form .form-element{\n    width: 100%;\n}\n\n#project-form .form-element input{\n    text-indent: 10px;\n}\n\n#project-form .buttons{\n    display: flex;\n    justify-content: center;\n}\n\n.buttons button{\n    padding: 10px;\n    font-size: 0.9rem;\n    border-radius: 10px;\n    background-color: var(--brandName-color);\n    border: 1px solid var(--inputBoarder-color);\n    font-family: 'contentFont';\n}\n\n.buttons button:first-child:hover{\n    background-color: green;\n    color: var(--brandName-color);\n}\n\n.buttons button:last-child:hover{\n    background-color: red;\n    color: var(--brandName-color);\n}\n\n.tast-viewer{\n    margin-bottom: 5px;\n}\n\n.tast-viewer:hover{\n    background-color: var(--sidebarHove-color);\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n\n\n\n/**********************************************tasks***************************************/\n#content{\n    flex: 1;\n    padding: 50px 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#title{\n    font-family: \"contentFont\";\n    font-size: 2.5rem;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.task-info{\n    display: flex;\n    align-items: center;\n    font-family: 'contentFont';\n}\n\n.task-info:hover{\n    cursor: pointer;\n}\n\n.task-info img{\n    padding: 8px;\n    border-radius: 5px;\n    position: relative;\n}\n\n.task-info img:hover{\n    background-color: var(--sidebar-color);\n}\n\n.task-info p{\n    padding-left: 10px;\n    font-size: 1.2rem;\n}\n\n\n\n\n\n\n/*******************************************Add Task Button************************************/\n\n#content button{\n    font-size: 1.5rem;\n    padding: 10px;\n    background-color: var(--content-color);\n    border: none;\n    font-family: 'contentFont';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#content button:hover{\n    background-color: var(--sidebar-color);\n}\n\n/************************************Add Task form*****************************************/\n#overlayForm{\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    background-color: var(--content-color);\n    padding: 20px 30px;\n    border-radius: 20px;\n    gap : 15px;\n    font-size: 1rem;\n}\n\n\n#form-info{\n    display: flex;\n    justify-content: space-between;\n}\n\n#form-info p{\n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n#form-info img:hover{\n    cursor: pointer;\n}\n\n#form-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.form-element{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px;\n    width: 400px;\n}\n\n.form-element label{\n    font-family: 'contentFont';\n}\n\n.form-element input{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    font-size: 1rem;\n}\n\n.form-element input:focus ,.custome-select:focus , .form-element textarea:focus{\n    border-color: var(--inputFocus-color);\n    outline: none;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.custome-select{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    background-color: white;\n    font-size: 1rem;\n    padding: 0 0 0 10px;\n    -webkit-appearance: none;\n}\n\n.form-element textarea{\n    border: 1px solid var(--inputBoarder-color);\n    resize: vertical;\n    font-size: 1rem;\n}    \n\n.form-element input[type = date]{\n    padding: 0px 10px;\n}\n\n#form button{\n    padding: 10px 30px;\n    font-size: 1.2rem;\n    font-family: 'contentFont';\n    width: fit-content;\n    margin: 20px auto 0 auto;\n    background-color: white;\n    border-radius: 10px;\n    border: 1px solid var(--inputBoarder-color);\n}\n\n#form button:hover{\n    background-color: rgb(210, 183, 183);\n}\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Components.js":
/*!***********************************!*\
  !*** ./src/modules/Components.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOption": () => (/* binding */ createOption),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTask": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _taskViewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskViewer */ "./src/modules/taskViewer.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");



//this file create the html code for new Task or new Project

function createTask(task){
    const tasks = document.querySelector('#tasks');

    const container = document.createElement('div');
    container.classList.add('task');
    container.classList.add('bottom-padding');
    container.setAttribute('id',task.id);

    const taskInfo1 = document.createElement('div');
    taskInfo1.classList.add('task-info');

    const input = document.createElement('input');
    input.setAttribute('type','checkbox');
    taskInfo1.appendChild(input);

    const p = document.createElement('p');
    p.textContent = task.title;
    taskInfo1.appendChild(p);

    const taskInfo2 = document.createElement('div');
    taskInfo2.classList.add('task-info');

    taskInfo2.appendChild(createimageField("SVGs/edit.svg","Edit","Edit"));
    taskInfo2.appendChild(createimageField("SVGs/flag.svg" ,"Change priority" ,"Change priority"))
    taskInfo2.appendChild(createimageField("SVGs/arrow-right-circle.svg","Move to project", "Move to project"));
    taskInfo2.appendChild(createimageField("SVGs/trash.svg","Delete" ,"Delete"));
    
    container.appendChild(taskInfo1);
    container.appendChild(taskInfo2);


    tasks.appendChild(container);

}

function createimageField(src,title){
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('title',title);
    img.setAttribute('alt',title);
    img.setAttribute('class',title);
    return img;
}

function createProject(projectTitle){
    const projectList = document.querySelector('#projectList');

    const container = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = projectTitle;
    container.appendChild(p);
    container.setAttribute('id',projectTitle);
    container.classList.add('tast-viewer');
    container.addEventListener('click',()=>{
        (0,_taskViewer__WEBPACK_IMPORTED_MODULE_0__.taskViewer)(container);
        (0,_taskViewer__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(_localStorage__WEBPACK_IMPORTED_MODULE_1__["default"].getData(container.querySelector('p').textContent));
    })
    projectList.insertBefore(container,projectList.firstChild);
}

function createOption(projectTitle){
    const projectList = document.querySelector('#project');
    const option  = document.createElement('option');
    option.setAttribute('value',projectTitle);
    option.textContent = projectTitle;
    projectList.appendChild(option);
}








/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//this file handle all user actions on the page that not related to entering new data

const displayController = (()=>{
    
    const toggleButton = document.querySelector('#toggle-button');
    toggleButton.addEventListener('click',()=>{
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('hide-element')
    })


    const addTaskButton = document.querySelector('#addTaskButton');
    addTaskButton.addEventListener('click',()=>{
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:flex');
    })

    const closeFormButton = document.querySelector('#closeForm');
    closeFormButton.addEventListener('click',()=>{
        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');
    })

    const projectButton = document.querySelector('#showProjects');
    projectButton.addEventListener('click',()=>{
        const projectList = document.querySelector('#projectList');
        projectList.classList.toggle('hide-element');
        const projectForm = document.querySelector('#project-form');
        if (!projectForm.classList.contains('hide-element')){
            projectForm.classList.add('hide-element');
        }
    })

    const projectFormButton = document.querySelector('#addProject');
    projectFormButton.addEventListener('click',()=>{
        const projectForm = document.querySelector('#project-form');
        projectForm.classList.toggle('hide-element');
    })

    const projectCancelButton = document.querySelector('#cancel');
    projectCancelButton.addEventListener('click',()=>{
        const projectForm = document.querySelector('#project-form');
        projectForm.classList.toggle('hide-element');
    })
    

    
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components */ "./src/modules/Components.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");






// this file handle submutting data to our two forms 

const formHandler = (()=>{
    const addTaskButton = document.querySelector('#addTaskButton');
    addTaskButton.addEventListener('click',()=>{
        const projectList = document.querySelector('#project');
        projectList.textContent="";
        let myKeysLength = _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getKeysLength();
        for(let i=0; i<myKeysLength;i++){
            (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createOption)(_localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getProjectByIndex(i));
        }
    })

    const taskForm = document.querySelector('#form');
    taskForm.addEventListener('submit',(e)=>{
        e.preventDefault(); //prevent the from reloading 

        let title = document.querySelector('#note-title').value;
        let description = document.querySelector('#description').value;
        let priority = document.querySelector('#priority').value;
        let dueDate = document.querySelector('#due_date').value;
        let project = document.querySelector('#project').value;

        const myProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"](project);
        myProject.tasks = _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].getData(project);
        const newTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title,description,dueDate,priority,project);
        myProject.add_task(newTask);
        _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].setData(myProject);

        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');

        const selectedProject = document.querySelector('.selected').querySelector('p').textContent;

        const todayObject = new Date();
        const today =  `${todayObject.getFullYear()}-${("0" + (todayObject.getMonth()+1)).slice(-2)
        }-${("0"+todayObject.getDate()).slice(-2)}`;
        if(selectedProject === project || dueDate == today){
            (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createTask)(newTask);
        }
    })

    const projectForm = document.querySelector('#project-form');
    projectForm.addEventListener('submit',(e)=>{
        e.preventDefault();
        let title = document.querySelector('#project-title').value;

        const newProject = new _project__WEBPACK_IMPORTED_MODULE_2__["default"](title);
        _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].setData(newProject);

        document.querySelector('#project-title').value = "";
        (0,_Components__WEBPACK_IMPORTED_MODULE_0__.createProject)(title);
    })
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formHandler);

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const localStorageHandler = (()=>{
    const setData = (project)=>{
        localStorage.setItem(project.title,JSON.stringify(project.tasks));
    }

    const getData = (key)=>{
        return JSON.parse(localStorage.getItem(key));
    }

    const getKeysLength = ()=>{
        return Object.keys(localStorage).length;
    }

    const getProjectByIndex = (index)=>{
        return localStorage.key(index);
    }

    const getTodayTasks = ()=>{
        const todayObject = new Date();
        const today =  `${todayObject.getFullYear()}-${("0" + (todayObject.getMonth()+1)).slice(-2)
    }-${("0"+todayObject.getDate()).slice(-2)}`;

        let myTodayTasks = [];
        let myKeysLength = getKeysLength();
        for(let i=0; i<myKeysLength;i++){
            const tasks = getData(getProjectByIndex(i));
            for(const task of tasks){
                if (today === task.dueDate){
                    myTodayTasks.push(task);
                }
            }
        }
        return myTodayTasks;
    }


    return {setData , getData , getKeysLength , getProjectByIndex , getTodayTasks};
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localStorageHandler);


/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
    constructor(title){
        this.title = title;
        this.tasks = [];
    }

    add_task(task){
        this.tasks.push(task);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task{
    constructor(title,description,dueDate,priority,project_id){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = Date.now();
        this.isDone = false;
        this.project_id = project_id;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/taskViewer.js":
/*!***********************************!*\
  !*** ./src/modules/taskViewer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "taskViewer": () => (/* binding */ taskViewer)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components */ "./src/modules/Components.js");




function taskViewer(projectDiv){
    const tasks = document.querySelector('#tasks');
    tasks.textContent="";
    
    const projects = document.querySelectorAll('.tast-viewer'); 
    projects.forEach((project)=>{
        project.classList.remove('selected');
    })
    projectDiv.classList.toggle('selected');
}





function displayTasks(tasksList){
    for (const task of tasksList){
        (0,_Components__WEBPACK_IMPORTED_MODULE_1__.createTask)(task);   
    }
}








/***/ }),

/***/ "./src/fonts/DancingScript-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/DancingScript-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72fc35f38c2864ca2cd5.ttf";

/***/ }),

/***/ "./src/fonts/Roboto-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayController */ "./src/modules/displayController.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/form */ "./src/modules/form.js");
/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _modules_Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Components */ "./src/modules/Components.js");
/* harmony import */ var _modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/taskViewer */ "./src/modules/taskViewer.js");








init();


function init(){
    //this code will only run at the first time a user open the website
    if (!_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getData('inbox')){
        const defaultProject = new _modules_project__WEBPACK_IMPORTED_MODULE_1__["default"]('inbox');
        _modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].setData(defaultProject);
        const inbox = document.querySelector('.selected');
        inbox.setAttribute('id',defaultProject.title);
    }

    // update the date in today icon 
    const today = document.querySelector('#todayDate');
    const day = new Date();
    today.textContent = day.getDate();

    //display all tasks in inbox project
    (0,_modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__.displayTasks)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getData('inbox'));
    const inbox = document.querySelector('.selected');
    inbox.addEventListener('click',()=>{
        (0,_modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__.taskViewer)(inbox);
        (0,_modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__.displayTasks)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getData('inbox'));
    })
    
    //display all project in local storage
    let myKeysLength = _modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getKeysLength();
    for(let i=0; i<myKeysLength;i++){
       if(_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectByIndex(i)==="inbox"){
            continue;
        } 
       (0,_modules_Components__WEBPACK_IMPORTED_MODULE_5__.createProject)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getProjectByIndex(i));
    }

    const todayDiv = document.querySelector('#today');
    todayDiv.addEventListener('click',()=>{
        (0,_modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__.taskViewer)(todayDiv);
        (0,_modules_taskViewer__WEBPACK_IMPORTED_MODULE_6__.displayTasks)(_modules_localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].getTodayTasks())
    })

    
    ;(0,_modules_displayController__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_form__WEBPACK_IMPORTED_MODULE_3__["default"])();
}











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLHNDQUFzQywrQkFBK0Is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YnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvQ29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9mb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza1ZpZXdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9EYW5jaW5nU2NyaXB0LUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmFuZEZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5cXG46cm9vdHtcXG4gICAgLS1uYXZiYXItY29sb3IgOiAjREM0RDNEO1xcbiAgICAtLXNpZGViYXItY29sb3I6ICNGN0Y3Rjc7XFxuICAgIC0tY29udGVudC1jb2xvcjogI0ZFRkVGRTtcXG4gICAgLS1icmFuZE5hbWUtY29sb3IgOiAjRkVGRUZFO1xcbiAgICAtLXRvZ2dsZUJ1dHRvbkhvdmVyLWNvbG9yOiNFMjcwNjU7XFxuICAgIC0tc2lkZWJhckhvdmUtY29sb3I6I2RmZGNkYztcXG4gICAgLS1wYWRkaW5nQm90dG9tLWNvbG9yIDogI2YwZjBmMDtcXG4gICAgLS1pbnB1dEJvYXJkZXItY29sb3I6I0NFRDREQTtcXG4gICAgLS1pbnB1dEZvY3VzLWNvbG9yOiAjQTdBN0ZEO1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCx1bCxpbWd7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oaWRlLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgXFxuXFxufVxcblxcbi5sZWZ0LXBhZGRpbmd7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm90dG9tLXBhZGRpbmd7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYWRkaW5nQm90dG9tLWNvbG9yKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk5hdmJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jbmF2YmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggMjAwcHggMTBweCA3MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYnJhbmQtbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmFuZEZvbnQnO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1icmFuZE5hbWUtY29sb3IpO1xcbn1cXG5cXG4jdG9nZ2xlLWJ1dHRvbntcXG4gICAgcGFkZGluZzogMXB4IDFweCAwIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RvZ2dsZS1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZUJ1dHRvbkhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipTaWRlYmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI2NvbnRhaW5lcntcXG4gICAgZmxleCA6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckhvdmUtY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhci1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbi5zaWRlYmFyLWVsZW1lbnQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJIb3ZlLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWRkUHJvamVjdDpob3ZlcntcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcbiNwcm9qZWN0TGlzdCBkaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDsgIFxcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGdhcDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIC5mb3JtLWVsZW1lbnR7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXR7XFxuICAgIHRleHQtaW5kZW50OiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtIC5idXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnJhbmROYW1lLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpmaXJzdC1jaGlsZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1icmFuZE5hbWUtY29sb3IpO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246bGFzdC1jaGlsZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICBjb2xvcjogdmFyKC0tYnJhbmROYW1lLWNvbG9yKTtcXG59XFxuXFxuLnRhc3Qtdmlld2Vye1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi50YXN0LXZpZXdlcjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckhvdmUtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKip0YXNrcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogNTBweCA3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb250ZW50Rm9udFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG5cXG4udGFzay1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG59XFxuXFxuLnRhc2staW5mbzpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pbmZvIGltZ3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2staW5mbyBpbWc6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4udGFzay1pbmZvIHB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQWRkIFRhc2sgQnV0dG9uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNjb250ZW50IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQWRkIFRhc2sgZm9ybSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNvdmVybGF5Rm9ybXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGdhcCA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuXFxuI2Zvcm0taW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZm9ybS1pbmZvIHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2Zvcm0taW5mbyBpbWc6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCBsYWJlbHtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0OmZvY3VzICwuY3VzdG9tZS1zZWxlY3Q6Zm9jdXMgLCAuZm9ybS1lbGVtZW50IHRleHRhcmVhOmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0Rm9jdXMtY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbn1cXG5cXG4uY3VzdG9tZS1zZWxlY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvYXJkZXItY29sb3IpO1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufSAgICBcXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0W3R5cGUgPSBkYXRlXXtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbiNmb3JtIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAxODMsIDE4Myk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0RBQTZEO0lBQzdELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsK0RBQXdEO0lBQ3hELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksd0JBQXdCOztBQUU1Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1EQUFtRDtJQUNuRCxtQkFBbUI7QUFDdkI7O0FBRUEsb0dBQW9HOztBQUVwRztJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0RBQWdEO0FBQ3BEOztBQUVBLHFHQUFxRztBQUNyRztJQUNJLFFBQVE7SUFDUixzQ0FBc0M7SUFD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aURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmFuZEZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9EYW5jaW5nU2NyaXB0LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUm9ib3RvLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuXFxuOnJvb3R7XFxuICAgIC0tbmF2YmFyLWNvbG9yIDogI0RDNEQzRDtcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjRjdGN0Y3O1xcbiAgICAtLWNvbnRlbnQtY29sb3I6ICNGRUZFRkU7XFxuICAgIC0tYnJhbmROYW1lLWNvbG9yIDogI0ZFRkVGRTtcXG4gICAgLS10b2dnbGVCdXR0b25Ib3Zlci1jb2xvcjojRTI3MDY1O1xcbiAgICAtLXNpZGViYXJIb3ZlLWNvbG9yOiNkZmRjZGM7XFxuICAgIC0tcGFkZGluZ0JvdHRvbS1jb2xvciA6ICNmMGYwZjA7XFxuICAgIC0taW5wdXRCb2FyZGVyLWNvbG9yOiNDRUQ0REE7XFxuICAgIC0taW5wdXRGb2N1cy1jb2xvcjogI0E3QTdGRDtcXG59XFxuXFxuaHRtbCxib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnAsdWwsaW1ne1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbmxpe1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGlkZS1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IFxcblxcbn1cXG5cXG4ubGVmdC1wYWRkaW5ne1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcXG59XFxuXFxuLmJvdHRvbS1wYWRkaW5ne1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFkZGluZ0JvdHRvbS1jb2xvcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipOYXZiYXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI25hdmJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwMHB4IDEwcHggNzBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2JyYW5kLW5hbWV7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnJhbmRGb250JztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tYnJhbmROYW1lLWNvbG9yKTtcXG59XFxuXFxuI3RvZ2dsZS1idXR0b257XFxuICAgIHBhZGRpbmc6IDFweCAxcHggMCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiN0b2dnbGUtYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGVCdXR0b25Ib3Zlci1jb2xvcik7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqU2lkZWJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNjb250YWluZXJ7XFxuICAgIGZsZXggOiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXJ7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAyMHB4IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG4uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJIb3ZlLWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXItZWxlbWVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4uc2lkZWJhci1lbGVtZW50OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFySG92ZS1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG5cXG4jcHJvamVjdExpc3QgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7ICBcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm17XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAuZm9ybS1lbGVtZW50e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAuZm9ybS1lbGVtZW50IGlucHV0e1xcbiAgICB0ZXh0LWluZGVudDogMTBweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybSAuYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJyYW5kTmFtZS1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9hcmRlci1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b246Zmlyc3QtY2hpbGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgICBjb2xvcjogdmFyKC0tYnJhbmROYW1lLWNvbG9yKTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmxhc3QtY2hpbGQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6IHZhcigtLWJyYW5kTmFtZS1jb2xvcik7XFxufVxcblxcbi50YXN0LXZpZXdlcntcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4udGFzdC12aWV3ZXI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJIb3ZlLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqdGFza3MqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI2NvbnRlbnR7XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmc6IDUwcHggNzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiY29udGVudEZvbnRcXFwiO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLnRhc2t7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuXFxuXFxuLnRhc2staW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxufVxcblxcbi50YXNrLWluZm86aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2staW5mbyBpbWd7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50YXNrLWluZm8gaW1nOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLnRhc2staW5mbyBwe1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFkZCBUYXNrIEJ1dHRvbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jY29udGVudCBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI2NvbnRlbnQgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKkFkZCBUYXNrIGZvcm0qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jb3ZlcmxheUZvcm17XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBnYXAgOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcblxcbiNmb3JtLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2Zvcm0taW5mbyBwe1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbiNmb3JtLWluZm8gaW1nOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgbGFiZWx7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9hcmRlci1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCBpbnB1dDpmb2N1cyAsLmN1c3RvbWUtc2VsZWN0OmZvY3VzICwgLmZvcm0tZWxlbWVudCB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbnB1dEZvY3VzLWNvbG9yKTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg5OSwgOTksIDk5LCAwLjIpIDBweCAycHggOHB4IDBweDtcXG59XFxuXFxuLmN1c3RvbWUtc2VsZWN0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9hcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAgMCAwIDEwcHg7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCB0ZXh0YXJlYXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn0gICAgXFxuXFxuLmZvcm0tZWxlbWVudCBpbnB1dFt0eXBlID0gZGF0ZV17XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbn1cXG5cXG4jZm9ybSBidXR0b257XFxuICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9hcmRlci1jb2xvcik7XFxufVxcblxcbiNmb3JtIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxMCwgMTgzLCAxODMpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdGFza1ZpZXdlcixkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi90YXNrVmlld2VyXCI7XG5pbXBvcnQgbG9jYWxTdG9yYWdlSGFuZGxlciBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy90aGlzIGZpbGUgY3JlYXRlIHRoZSBodG1sIGNvZGUgZm9yIG5ldyBUYXNrIG9yIG5ldyBQcm9qZWN0XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFzayl7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza3MnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbS1wYWRkaW5nJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLHRhc2suaWQpO1xuXG4gICAgY29uc3QgdGFza0luZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8xLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XG4gICAgdGFza0luZm8xLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0luZm8xLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgdGFza0luZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8yLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL2VkaXQuc3ZnXCIsXCJFZGl0XCIsXCJFZGl0XCIpKTtcbiAgICB0YXNrSW5mbzIuYXBwZW5kQ2hpbGQoY3JlYXRlaW1hZ2VGaWVsZChcIlNWR3MvZmxhZy5zdmdcIiAsXCJDaGFuZ2UgcHJpb3JpdHlcIiAsXCJDaGFuZ2UgcHJpb3JpdHlcIikpXG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL2Fycm93LXJpZ2h0LWNpcmNsZS5zdmdcIixcIk1vdmUgdG8gcHJvamVjdFwiLCBcIk1vdmUgdG8gcHJvamVjdFwiKSk7XG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL3RyYXNoLnN2Z1wiLFwiRGVsZXRlXCIgLFwiRGVsZXRlXCIpKTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8yKTtcblxuXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVpbWFnZUZpZWxkKHNyYyx0aXRsZSl7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJyxzcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJyx0aXRsZSk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0Jyx0aXRsZSk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLHRpdGxlKTtcbiAgICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IHByb2plY3RUaXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLHByb2plY3RUaXRsZSk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc3Qtdmlld2VyJyk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0YXNrVmlld2VyKGNvbnRhaW5lcik7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhsb2NhbFN0b3JhZ2VIYW5kbGVyLmdldERhdGEoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCkpO1xuICAgIH0pXG4gICAgcHJvamVjdExpc3QuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lcixwcm9qZWN0TGlzdC5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT3B0aW9uKHByb2plY3RUaXRsZSl7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgIGNvbnN0IG9wdGlvbiAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScscHJvamVjdFRpdGxlKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbn1cblxuXG5cbmV4cG9ydCB7Y3JlYXRlVGFzayxjcmVhdGVQcm9qZWN0LGNyZWF0ZU9wdGlvbn07XG5cblxuIiwiLy90aGlzIGZpbGUgaGFuZGxlIGFsbCB1c2VyIGFjdGlvbnMgb24gdGhlIHBhZ2UgdGhhdCBub3QgcmVsYXRlZCB0byBlbnRlcmluZyBuZXcgZGF0YVxuXG5jb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKT0+e1xuICAgIFxuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYnV0dG9uJyk7XG4gICAgdG9nZ2xlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXInKTtcbiAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWVsZW1lbnQnKVxuICAgIH0pXG5cblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVGFza0J1dHRvbicpO1xuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheUZvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpmbGV4Jyk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNsb3NlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZUZvcm0nKTtcbiAgICBjbG9zZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheUZvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd1Byb2plY3RzJyk7XG4gICAgcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdExpc3QnKTtcbiAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1lbGVtZW50Jyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICAgICAgICBpZiAoIXByb2plY3RGb3JtLmNsYXNzTGlzdC5jb250YWlucygnaGlkZS1lbGVtZW50Jykpe1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZS1lbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcHJvamVjdEZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkUHJvamVjdCcpO1xuICAgIHByb2plY3RGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgcHJvamVjdEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZS1lbGVtZW50Jyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsJyk7XG4gICAgcHJvamVjdENhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtZWxlbWVudCcpO1xuICAgIH0pXG4gICAgXG5cbiAgICBcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlDb250cm9sbGVyOyIsImltcG9ydCB7Y3JlYXRlVGFzayAsIGNyZWF0ZVByb2plY3QgLCBjcmVhdGVPcHRpb259IGZyb20gJy4vQ29tcG9uZW50cydcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzayc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5cbi8vIHRoaXMgZmlsZSBoYW5kbGUgc3VibXV0dGluZyBkYXRhIHRvIG91ciB0d28gZm9ybXMgXG5cbmNvbnN0IGZvcm1IYW5kbGVyID0gKCgpPT57XG4gICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUYXNrQnV0dG9uJyk7XG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpO1xuICAgICAgICBwcm9qZWN0TGlzdC50ZXh0Q29udGVudD1cIlwiO1xuICAgICAgICBsZXQgbXlLZXlzTGVuZ3RoID0gbG9jYWxTdG9yYWdlSGFuZGxlci5nZXRLZXlzTGVuZ3RoKCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG15S2V5c0xlbmd0aDtpKyspe1xuICAgICAgICAgICAgY3JlYXRlT3B0aW9uKGxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0UHJvamVjdEJ5SW5kZXgoaSkpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcbiAgICB0YXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCB0aGUgZnJvbSByZWxvYWRpbmcgXG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVfZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG5cbiAgICAgICAgY29uc3QgbXlQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIG15UHJvamVjdC50YXNrcyA9IGxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0RGF0YShwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkscHJvamVjdCk7XG4gICAgICAgIG15UHJvamVjdC5hZGRfdGFzayhuZXdUYXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlSGFuZGxlci5zZXREYXRhKG15UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Rm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKS5xdWVyeVNlbGVjdG9yKCdwJykudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgY29uc3QgdG9kYXlPYmplY3QgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9ICBgJHt0b2RheU9iamVjdC5nZXRGdWxsWWVhcigpfS0keyhcIjBcIiArICh0b2RheU9iamVjdC5nZXRNb250aCgpKzEpKS5zbGljZSgtMilcbiAgICAgICAgfS0keyhcIjBcIit0b2RheU9iamVjdC5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuICAgICAgICBpZihzZWxlY3RlZFByb2plY3QgPT09IHByb2plY3QgfHwgZHVlRGF0ZSA9PSB0b2RheSl7XG4gICAgICAgICAgICBjcmVhdGVUYXNrKG5ld1Rhc2spO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtZm9ybScpO1xuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKGUpPT57XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcblxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xuICAgICAgICBsb2NhbFN0b3JhZ2VIYW5kbGVyLnNldERhdGEobmV3UHJvamVjdCk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNyZWF0ZVByb2plY3QodGl0bGUpO1xuICAgIH0pXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtSGFuZGxlcjsiLCJjb25zdCBsb2NhbFN0b3JhZ2VIYW5kbGVyID0gKCgpPT57XG4gICAgY29uc3Qgc2V0RGF0YSA9IChwcm9qZWN0KT0+e1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0LnRpdGxlLEpTT04uc3RyaW5naWZ5KHByb2plY3QudGFza3MpKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXREYXRhID0gKGtleSk9PntcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0S2V5c0xlbmd0aCA9ICgpPT57XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QnlJbmRleCA9IChpbmRleCk9PntcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZGF5VGFza3MgPSAoKT0+e1xuICAgICAgICBjb25zdCB0b2RheU9iamVjdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gIGAke3RvZGF5T2JqZWN0LmdldEZ1bGxZZWFyKCl9LSR7KFwiMFwiICsgKHRvZGF5T2JqZWN0LmdldE1vbnRoKCkrMSkpLnNsaWNlKC0yKVxuICAgIH0tJHsoXCIwXCIrdG9kYXlPYmplY3QuZ2V0RGF0ZSgpKS5zbGljZSgtMil9YDtcblxuICAgICAgICBsZXQgbXlUb2RheVRhc2tzID0gW107XG4gICAgICAgIGxldCBteUtleXNMZW5ndGggPSBnZXRLZXlzTGVuZ3RoKCk7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPG15S2V5c0xlbmd0aDtpKyspe1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBnZXREYXRhKGdldFByb2plY3RCeUluZGV4KGkpKTtcbiAgICAgICAgICAgIGZvcihjb25zdCB0YXNrIG9mIHRhc2tzKXtcbiAgICAgICAgICAgICAgICBpZiAodG9kYXkgPT09IHRhc2suZHVlRGF0ZSl7XG4gICAgICAgICAgICAgICAgICAgIG15VG9kYXlUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbXlUb2RheVRhc2tzO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtzZXREYXRhICwgZ2V0RGF0YSAsIGdldEtleXNMZW5ndGggLCBnZXRQcm9qZWN0QnlJbmRleCAsIGdldFRvZGF5VGFza3N9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBsb2NhbFN0b3JhZ2VIYW5kbGVyO1xuIiwiY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IodGl0bGUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRfdGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkscHJvamVjdF9pZCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2plY3RfaWQgPSBwcm9qZWN0X2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJpbXBvcnQgbG9jYWxTdG9yYWdlSGFuZGxlciBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcbmltcG9ydCB7Y3JlYXRlVGFza30gZnJvbSAnLi9Db21wb25lbnRzJztcblxuXG5mdW5jdGlvbiB0YXNrVmlld2VyKHByb2plY3REaXYpe1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XG4gICAgdGFza3MudGV4dENvbnRlbnQ9XCJcIjtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXN0LXZpZXdlcicpOyBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xuICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSlcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJyk7XG59XG5cblxuXG5cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHRhc2tzTGlzdCl7XG4gICAgZm9yIChjb25zdCB0YXNrIG9mIHRhc2tzTGlzdCl7XG4gICAgICAgIGNyZWF0ZVRhc2sodGFzayk7ICAgXG4gICAgfVxufVxuXG5leHBvcnQge2Rpc3BsYXlUYXNrcyAsIHRhc2tWaWV3ZXJ9O1xuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCdcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXInXG5pbXBvcnQgZm9ybUhhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL2Zvcm0nO1xuaW1wb3J0IGxvY2FsU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZSc7XG5pbXBvcnQge2NyZWF0ZVByb2plY3R9IGZyb20gJy4vbW9kdWxlcy9Db21wb25lbnRzJztcbmltcG9ydCB7ZGlzcGxheVRhc2tzICwgdGFza1ZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3Rhc2tWaWV3ZXInO1xuXG5pbml0KCk7XG5cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIC8vdGhpcyBjb2RlIHdpbGwgb25seSBydW4gYXQgdGhlIGZpcnN0IHRpbWUgYSB1c2VyIG9wZW4gdGhlIHdlYnNpdGVcbiAgICBpZiAoIWxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0RGF0YSgnaW5ib3gnKSl7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ2luYm94Jyk7XG4gICAgICAgIGxvY2FsU3RvcmFnZUhhbmRsZXIuc2V0RGF0YShkZWZhdWx0UHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgICAgIGluYm94LnNldEF0dHJpYnV0ZSgnaWQnLGRlZmF1bHRQcm9qZWN0LnRpdGxlKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgdGhlIGRhdGUgaW4gdG9kYXkgaWNvbiBcbiAgICBjb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheURhdGUnKTtcbiAgICBjb25zdCBkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5LnRleHRDb250ZW50ID0gZGF5LmdldERhdGUoKTtcblxuICAgIC8vZGlzcGxheSBhbGwgdGFza3MgaW4gaW5ib3ggcHJvamVjdFxuICAgIGRpc3BsYXlUYXNrcyhsb2NhbFN0b3JhZ2VIYW5kbGVyLmdldERhdGEoJ2luYm94JykpO1xuICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgaW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIHRhc2tWaWV3ZXIoaW5ib3gpO1xuICAgICAgICBkaXNwbGF5VGFza3MobG9jYWxTdG9yYWdlSGFuZGxlci5nZXREYXRhKCdpbmJveCcpKTtcbiAgICB9KVxuICAgIFxuICAgIC8vZGlzcGxheSBhbGwgcHJvamVjdCBpbiBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IG15S2V5c0xlbmd0aCA9IGxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0S2V5c0xlbmd0aCgpO1xuICAgIGZvcihsZXQgaT0wOyBpPG15S2V5c0xlbmd0aDtpKyspe1xuICAgICAgIGlmKGxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0UHJvamVjdEJ5SW5kZXgoaSk9PT1cImluYm94XCIpe1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gXG4gICAgICAgY3JlYXRlUHJvamVjdChsb2NhbFN0b3JhZ2VIYW5kbGVyLmdldFByb2plY3RCeUluZGV4KGkpKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RheScpO1xuICAgIHRvZGF5RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICB0YXNrVmlld2VyKHRvZGF5RGl2KTtcbiAgICAgICAgZGlzcGxheVRhc2tzKGxvY2FsU3RvcmFnZUhhbmRsZXIuZ2V0VG9kYXlUYXNrcygpKVxuICAgIH0pXG5cbiAgICBcbiAgICBkaXNwbGF5Q29udHJvbGxlcigpO1xuICAgIGZvcm1IYW5kbGVyKCk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==