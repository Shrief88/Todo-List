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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'BrandFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'contentFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\n:root{\n    --navbar-color : #DC4D3D;\n    --sidebar-color: #F7F7F7;\n    --content-color: #FEFEFE;\n    --brandName-color : #FEFEFE;\n    --toggleButtonHover-color:#E27065;\n    --sidebarHove-color:#dfdcdc;\n    --paddingBottom-color : #f0f0f0;\n    --inputBoarder-color:#CED4DA;\n    --inputFocus-color: #A7A7FD;\n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\np,ul,img{\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    list-style: none;\n}\n\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.hide-element{\n    display: none !important; \n\n}\n\n.left-padding{\n    padding-left: 40px !important;\n}\n\n.bottom-padding{\n    border-bottom: 2px solid var(--paddingBottom-color);\n    padding-bottom: 5px;\n}\n\n/***************************************************Navbar******************************************/\n\n#navbar{\n    background-color: var(--navbar-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 200px 10px 70px;\n    align-items: center;\n}\n\n#brand-name{\n    font-family: 'BrandFont';\n    font-size: 3rem;\n    color: var(--brandName-color);\n}\n\n#toggle-button{\n    padding: 1px 1px 0 1px;\n    border-radius: 10px;\n}\n\n#toggle-button:hover{\n    background-color: var(--toggleButtonHover-color);\n}\n\n/****************************************************Sidebar*****************************************/\n#container{\n    flex : 1;\n    background-color: var(--content-color);\n    display: flex;\n}\n\n#sidebar{\n    padding: 20px 30px 20px 40px;\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n}\n\n.sidebar-element{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-family: 'contentFont';\n    align-items: center;\n    font-size: 1.1rem;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.sidebar-element:hover{\n    background-color: var(--sidebarHove-color);\n    cursor: pointer;\n}\n\n#addProject:hover{\n    color: var(--navbar-color);\n    background-color: var(--sidebar-color);\n    cursor: pointer;\n}\n\n#projectList div{\n    display: flex;\n    align-items: center;\n    gap: 10px;  \n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n\n\n/**********************************************tasks***************************************/\n#content{\n    flex: 1;\n    padding: 50px 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#title{\n    font-family: \"contentFont\";\n    font-size: 2.5rem;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.task-info{\n    display: flex;\n    align-items: center;\n    font-family: 'contentFont';\n}\n\n.task-info:hover{\n    cursor: pointer;\n}\n\n.task-info img{\n    padding: 8px;\n    border-radius: 5px;\n    position: relative;\n}\n\n.task-info img:hover{\n    background-color: var(--sidebar-color);\n}\n\n.task-info p{\n    padding-left: 10px;\n    font-size: 1.2rem;\n}\n\n\n\n\n\n\n/*******************************************Add Task Button************************************/\n\n#content button{\n    font-size: 1.5rem;\n    padding: 10px;\n    background-color: var(--content-color);\n    border: none;\n    font-family: 'contentFont';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#content button:hover{\n    background-color: var(--sidebar-color);\n}\n\n/************************************Add note form*****************************************/\n#overlayForm{\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    background-color: var(--content-color);\n    padding: 20px 30px;\n    border-radius: 20px;\n    gap : 15px;\n    font-size: 1rem;\n}\n\n\n#form-info{\n    display: flex;\n    justify-content: space-between;\n}\n\n#form-info p{\n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n#form-info img:hover{\n    cursor: pointer;\n}\n\n#form-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.form-element{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px;\n    width: 400px;\n}\n\n.form-element label{\n    font-family: 'contentFont';\n}\n\n.form-element input{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    font-size: 1rem;\n}\n\n.form-element input:focus ,.custome-select:focus , .form-element textarea:focus{\n    border-color: var(--inputFocus-color);\n    outline: none;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.custome-select{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    background-color: white;\n    font-size: 1rem;\n    padding: 0 0 0 10px;\n    -webkit-appearance: none;\n}\n\n.form-element textarea{\n    border: 1px solid var(--inputBoarder-color);\n    resize: vertical;\n    font-size: 1rem;\n}    \n\n.form-element input[type = date]{\n    padding: 0px 10px;\n}\n\n#form button{\n    padding: 10px 30px;\n    font-size: 1.2rem;\n    font-family: 'contentFont';\n    width: fit-content;\n    margin: 20px auto 0 auto;\n    background-color: white;\n    border-radius: 10px;\n    border: 1px solid var(--inputBoarder-color);\n}\n\n#form button:hover{\n    background-color: rgb(210, 183, 183);\n}\n\n\n\n\n\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'BrandFont';\n    src: url('./fonts/DancingScript-Bold.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'contentFont';\n    src: url('./fonts/Roboto-Medium.ttf') format('truetype');\n    font-weight: 400;\n    font-style: normal;\n}\n\n\n:root{\n    --navbar-color : #DC4D3D;\n    --sidebar-color: #F7F7F7;\n    --content-color: #FEFEFE;\n    --brandName-color : #FEFEFE;\n    --toggleButtonHover-color:#E27065;\n    --sidebarHove-color:#dfdcdc;\n    --paddingBottom-color : #f0f0f0;\n    --inputBoarder-color:#CED4DA;\n    --inputFocus-color: #A7A7FD;\n}\n\nhtml,body{\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n    font-size: 18px;\n    box-sizing: border-box;\n}\n\np,ul,img{\n    margin: 0;\n    padding: 0;\n}\n\nli{\n    list-style: none;\n}\n\n\nbody{\n    display: flex;\n    flex-direction: column;\n}\n\n.hide-element{\n    display: none !important; \n\n}\n\n.left-padding{\n    padding-left: 40px !important;\n}\n\n.bottom-padding{\n    border-bottom: 2px solid var(--paddingBottom-color);\n    padding-bottom: 5px;\n}\n\n/***************************************************Navbar******************************************/\n\n#navbar{\n    background-color: var(--navbar-color);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding: 10px 200px 10px 70px;\n    align-items: center;\n}\n\n#brand-name{\n    font-family: 'BrandFont';\n    font-size: 3rem;\n    color: var(--brandName-color);\n}\n\n#toggle-button{\n    padding: 1px 1px 0 1px;\n    border-radius: 10px;\n}\n\n#toggle-button:hover{\n    background-color: var(--toggleButtonHover-color);\n}\n\n/****************************************************Sidebar*****************************************/\n#container{\n    flex : 1;\n    background-color: var(--content-color);\n    display: flex;\n}\n\n#sidebar{\n    padding: 20px 30px 20px 40px;\n    background-color: var(--sidebar-color);\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: stretch;\n}\n\n.sidebar-element{\n    display: flex;\n    flex-direction: row;\n    gap: 15px;\n    font-family: 'contentFont';\n    align-items: center;\n    font-size: 1.1rem;\n    padding: 5px;\n    border-radius: 5px;\n}\n\n\n.sidebar-element:hover{\n    background-color: var(--sidebarHove-color);\n    cursor: pointer;\n}\n\n#addProject:hover{\n    color: var(--navbar-color);\n    background-color: var(--sidebar-color);\n    cursor: pointer;\n}\n\n#projectList div{\n    display: flex;\n    align-items: center;\n    gap: 10px;  \n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n\n\n/**********************************************tasks***************************************/\n#content{\n    flex: 1;\n    padding: 50px 70px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n#title{\n    font-family: \"contentFont\";\n    font-size: 2.5rem;\n}\n\n.task{\n    display: flex;\n    justify-content: space-between;\n}\n\n\n\n.task-info{\n    display: flex;\n    align-items: center;\n    font-family: 'contentFont';\n}\n\n.task-info:hover{\n    cursor: pointer;\n}\n\n.task-info img{\n    padding: 8px;\n    border-radius: 5px;\n    position: relative;\n}\n\n.task-info img:hover{\n    background-color: var(--sidebar-color);\n}\n\n.task-info p{\n    padding-left: 10px;\n    font-size: 1.2rem;\n}\n\n\n\n\n\n\n/*******************************************Add Task Button************************************/\n\n#content button{\n    font-size: 1.5rem;\n    padding: 10px;\n    background-color: var(--content-color);\n    border: none;\n    font-family: 'contentFont';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n}\n\n#content button:hover{\n    background-color: var(--sidebar-color);\n}\n\n/************************************Add note form*****************************************/\n#overlayForm{\n    display: none;\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.5);\n    justify-content: center;\n    align-items: center;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    background-color: var(--content-color);\n    padding: 20px 30px;\n    border-radius: 20px;\n    gap : 15px;\n    font-size: 1rem;\n}\n\n\n#form-info{\n    display: flex;\n    justify-content: space-between;\n}\n\n#form-info p{\n    font-family: 'contentFont';\n    font-size: 1.1rem;\n}\n\n#form-info img:hover{\n    cursor: pointer;\n}\n\n#form-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n}\n\n.form-element{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    padding-top: 15px;\n    width: 400px;\n}\n\n.form-element label{\n    font-family: 'contentFont';\n}\n\n.form-element input{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    font-size: 1rem;\n}\n\n.form-element input:focus ,.custome-select:focus , .form-element textarea:focus{\n    border-color: var(--inputFocus-color);\n    outline: none;\n    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n}\n\n.custome-select{\n    border-radius: 10px;\n    height: 40px;\n    border: 1px solid var(--inputBoarder-color);\n    background-color: white;\n    font-size: 1rem;\n    padding: 0 0 0 10px;\n    -webkit-appearance: none;\n}\n\n.form-element textarea{\n    border: 1px solid var(--inputBoarder-color);\n    resize: vertical;\n    font-size: 1rem;\n}    \n\n.form-element input[type = date]{\n    padding: 0px 10px;\n}\n\n#form button{\n    padding: 10px 30px;\n    font-size: 1.2rem;\n    font-family: 'contentFont';\n    width: fit-content;\n    margin: 20px auto 0 auto;\n    background-color: white;\n    border-radius: 10px;\n    border: 1px solid var(--inputBoarder-color);\n}\n\n#form button:hover{\n    background-color: rgb(210, 183, 183);\n}\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const displayController = (()=>{
    const toggleButton = document.querySelector('#toggle-button');

    toggleButton.addEventListener('click',()=>{
        const sidebar = document.querySelector('#sidebar');
        sidebar.classList.toggle('hide-element')
    })


    const addNoteButton = document.querySelector('#addNoteButton');

    addNoteButton.addEventListener('click',()=>{
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
    })

    
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);

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
    constructor(name){
        this.name = name;
        this.id = Date.now();
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

/***/ "./src/modules/taskComponent.js":
/*!**************************************!*\
  !*** ./src/modules/taskComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createTask(task){
    const tasks = document.querySelector('#tasks');

    const container = document.createElement('div');
    container.classList.add('task');
    container.classList.add('bottom-padding');

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
    img.setAttribute('id',title);
    return img;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);



// <!-- <div class="task bottom-padding">
//                 <div class="task-info">
//                     <input type="checkbox">
//                     <p>Study the grid system</p>
//                 </div>
//                 <div class="task-info">
//                     <img src="SVGs/edit.svg" title="Edit" alt="Edit">
//                     <img src="SVGs/flag.svg" title="Change priority" alt="Change priority">
//                     <img src="SVGs/arrow-right-circle.svg" title="Move to project" alt="Move to project">
//                     <img src="SVGs/trash.svg" title="Delete" alt="Delete">
//                 </div>
// </div> --></img>

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
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/project */ "./src/modules/project.js");
/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/displayController */ "./src/modules/displayController.js");
/* harmony import */ var _modules_taskComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/taskComponent */ "./src/modules/taskComponent.js");







init();





function init(){
    (0,_modules_displayController__WEBPACK_IMPORTED_MODULE_3__["default"])();
    
    const form = document.querySelector('#form');
    form.addEventListener('submit',(e)=>{

        e.preventDefault(); //prevent the from submitting 

        let title = document.querySelector('#note-title').value;
        let description = document.querySelector('#description').value;
        let priority = document.querySelector('#priority').value;
        let dueDate = document.querySelector('#due_date').value;
        let project = document.querySelector('#project').value;

        const newTask = new _modules_task__WEBPACK_IMPORTED_MODULE_1__["default"](title,description,dueDate,priority,project);

        const form = document.querySelector('#overlayForm');
        form.setAttribute('style','display:none');

        console.log('fdfdf');

        (0,_modules_taskComponent__WEBPACK_IMPORTED_MODULE_4__["default"])(newTask);
    })


    
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsdUJBQXVCLDJDQUEyQyxHQUFHLDJCQUEyQixnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFNBQVMsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksYUFBYSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZ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QUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNZO0FBQ007QUFDb0I7QUFDWDs7O0FBR2hEOzs7Ozs7QUFNQTtBQUNBLElBQUksc0VBQWlCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLHFEQUFJOztBQUVoQztBQUNBOztBQUVBOztBQUVBLFFBQVEsa0VBQVU7QUFDbEIsS0FBSzs7O0FBR0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrQ29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL0RhbmNpbmdTY3JpcHQtQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JyYW5kRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcblxcbjpyb290e1xcbiAgICAtLW5hdmJhci1jb2xvciA6ICNEQzREM0Q7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogI0Y3RjdGNztcXG4gICAgLS1jb250ZW50LWNvbG9yOiAjRkVGRUZFO1xcbiAgICAtLWJyYW5kTmFtZS1jb2xvciA6ICNGRUZFRkU7XFxuICAgIC0tdG9nZ2xlQnV0dG9uSG92ZXItY29sb3I6I0UyNzA2NTtcXG4gICAgLS1zaWRlYmFySG92ZS1jb2xvcjojZGZkY2RjO1xcbiAgICAtLXBhZGRpbmdCb3R0b20tY29sb3IgOiAjZjBmMGYwO1xcbiAgICAtLWlucHV0Qm9hcmRlci1jb2xvcjojQ0VENERBO1xcbiAgICAtLWlucHV0Rm9jdXMtY29sb3I6ICNBN0E3RkQ7XFxufVxcblxcbmh0bWwsYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5wLHVsLGltZ3tcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5saXtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmhpZGUtZWxlbWVudHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyBcXG5cXG59XFxuXFxuLmxlZnQtcGFkZGluZ3tcXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5ib3R0b20tcGFkZGluZ3tcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXBhZGRpbmdCb3R0b20tY29sb3IpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqTmF2YmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNuYXZiYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweCAyMDBweCAxMHB4IDcwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNicmFuZC1uYW1le1xcbiAgICBmb250LWZhbWlseTogJ0JyYW5kRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgY29sb3I6IHZhcigtLWJyYW5kTmFtZS1jb2xvcik7XFxufVxcblxcbiN0b2dnbGUtYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxcHggMXB4IDAgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jdG9nZ2xlLWJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlQnV0dG9uSG92ZXItY29sb3IpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlNpZGViYXIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jY29udGFpbmVye1xcbiAgICBmbGV4IDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNzaWRlYmFye1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMjBweCA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG59XFxuXFxuLnNpZGViYXItZWxlbWVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5cXG4uc2lkZWJhci1lbGVtZW50OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFySG92ZS1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FkZFByb2plY3Q6aG92ZXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdExpc3QgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7ICBcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKnRhc2tzKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNjb250ZW50e1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiA1MHB4IDcwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBmb250LWZhbWlseTogXFxcImNvbnRlbnRGb250XFxcIjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi50YXNre1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcblxcblxcbi50YXNrLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbn1cXG5cXG4udGFzay1pbmZvOmhvdmVye1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrLWluZm8gaW1ne1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udGFzay1pbmZvIGltZzpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi50YXNrLWluZm8gcHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBZGQgVGFzayBCdXR0b24qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI2NvbnRlbnQgYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNjb250ZW50IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipBZGQgbm90ZSBmb3JtKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI292ZXJsYXlGb3Jte1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgZ2FwIDogMTVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5cXG4jZm9ybS1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNmb3JtLWluZm8gcHtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4jZm9ybS1pbmZvIGltZzpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jZm9ybS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IGxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG59XFxuXFxuLmZvcm0tZWxlbWVudCBpbnB1dHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvYXJkZXItY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgaW5wdXQ6Zm9jdXMgLC5jdXN0b21lLXNlbGVjdDpmb2N1cyAsIC5mb3JtLWVsZW1lbnQgdGV4dGFyZWE6Zm9jdXN7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW5wdXRGb2N1cy1jb2xvcik7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoOTksIDk5LCA5OSwgMC4yKSAwcHggMnB4IDhweCAwcHg7XFxufVxcblxcbi5jdXN0b21lLXNlbGVjdHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvYXJkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgdGV4dGFyZWF7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlucHV0Qm9hcmRlci1jb2xvcik7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59ICAgIFxcblxcbi5mb3JtLWVsZW1lbnQgaW5wdXRbdHlwZSA9IGRhdGVde1xcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuXFxuI2Zvcm0gYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvYXJkZXItY29sb3IpO1xcbn1cXG5cXG4jZm9ybSBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTAsIDE4MywgMTgzKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrREFBNkQ7SUFDN0QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQiwrREFBd0Q7SUFDeEQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQiwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7O0FBRTVCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbURBQW1EO0lBQ25ELG1CQUFtQjtBQUN2Qjs7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Q2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0JyYW5kRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL0RhbmNpbmdTY3JpcHQtQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9Sb2JvdG8tTWVkaXVtLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5cXG46cm9vdHtcXG4gICAgLS1uYXZiYXItY29sb3IgOiAjREM0RDNEO1xcbiAgICAtLXNpZGViYXItY29sb3I6ICNGN0Y3Rjc7XFxuICAgIC0tY29udGVudC1jb2xvcjogI0ZFRkVGRTtcXG4gICAgLS1icmFuZE5hbWUtY29sb3IgOiAjRkVGRUZFO1xcbiAgICAtLXRvZ2dsZUJ1dHRvbkhvdmVyLWNvbG9yOiNFMjcwNjU7XFxuICAgIC0tc2lkZWJhckhvdmUtY29sb3I6I2RmZGNkYztcXG4gICAgLS1wYWRkaW5nQm90dG9tLWNvbG9yIDogI2YwZjBmMDtcXG4gICAgLS1pbnB1dEJvYXJkZXItY29sb3I6I0NFRDREQTtcXG4gICAgLS1pbnB1dEZvY3VzLWNvbG9yOiAjQTdBN0ZEO1xcbn1cXG5cXG5odG1sLGJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxucCx1bCxpbWd7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxubGl7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbmJvZHl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oaWRlLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgXFxuXFxufVxcblxcbi5sZWZ0LXBhZGRpbmd7XFxuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYm90dG9tLXBhZGRpbmd7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1wYWRkaW5nQm90dG9tLWNvbG9yKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKk5hdmJhcioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jbmF2YmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHggMjAwcHggMTBweCA3MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYnJhbmQtbmFtZXtcXG4gICAgZm9udC1mYW1pbHk6ICdCcmFuZEZvbnQnO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1icmFuZE5hbWUtY29sb3IpO1xcbn1cXG5cXG4jdG9nZ2xlLWJ1dHRvbntcXG4gICAgcGFkZGluZzogMXB4IDFweCAwIDFweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3RvZ2dsZS1idXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZUJ1dHRvbkhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipTaWRlYmFyKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI2NvbnRhaW5lcntcXG4gICAgZmxleCA6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jc2lkZWJhcntcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDIwcHggNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbi5zaWRlYmFyLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMTVweDtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuXFxuLnNpZGViYXItZWxlbWVudDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckhvdmUtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhZGRQcm9qZWN0OmhvdmVye1xcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RMaXN0IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4OyAgXFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKip0YXNrcyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jY29udGVudHtcXG4gICAgZmxleDogMTtcXG4gICAgcGFkZGluZzogNTBweCA3MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbiN0aXRsZXtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJjb250ZW50Rm9udFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5cXG5cXG4udGFzay1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ2NvbnRlbnRGb250JztcXG59XFxuXFxuLnRhc2staW5mbzpob3ZlcntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1pbmZvIGltZ3tcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRhc2staW5mbyBpbWc6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4udGFzay1pbmZvIHB7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcblxcblxcblxcblxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQWRkIFRhc2sgQnV0dG9uKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNjb250ZW50IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jY29udGVudCBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqQWRkIG5vdGUgZm9ybSoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNvdmVybGF5Rm9ybXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvcm17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGdhcCA6IDE1cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuXFxuI2Zvcm0taW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jZm9ybS1pbmZvIHB7XFxuICAgIGZvbnQtZmFtaWx5OiAnY29udGVudEZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuI2Zvcm0taW5mbyBpbWc6aG92ZXJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudCBsYWJlbHtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxufVxcblxcbi5mb3JtLWVsZW1lbnQgaW5wdXR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0OmZvY3VzICwuY3VzdG9tZS1zZWxlY3Q6Zm9jdXMgLCAuZm9ybS1lbGVtZW50IHRleHRhcmVhOmZvY3Vze1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWlucHV0Rm9jdXMtY29sb3IpO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDk5LCA5OSwgOTksIDAuMikgMHB4IDJweCA4cHggMHB4O1xcbn1cXG5cXG4uY3VzdG9tZS1zZWxlY3R7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMCAwIDAgMTBweDtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50IHRleHRhcmVhe1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnB1dEJvYXJkZXItY29sb3IpO1xcbiAgICByZXNpemU6IHZlcnRpY2FsO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufSAgICBcXG5cXG4uZm9ybS1lbGVtZW50IGlucHV0W3R5cGUgPSBkYXRlXXtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxufVxcblxcbiNmb3JtIGJ1dHRvbntcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdjb250ZW50Rm9udCc7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW5wdXRCb2FyZGVyLWNvbG9yKTtcXG59XFxuXFxuI2Zvcm0gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEwLCAxODMsIDE4Myk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKT0+e1xuICAgIGNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2dnbGUtYnV0dG9uJyk7XG5cbiAgICB0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcicpO1xuICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtZWxlbWVudCcpXG4gICAgfSlcblxuXG4gICAgY29uc3QgYWRkTm90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGROb3RlQnV0dG9uJyk7XG5cbiAgICBhZGROb3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXlGb3JtJyk7XG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6ZmxleCcpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjbG9zZUZvcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2VGb3JtJyk7XG5cbiAgICBjbG9zZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheUZvcm0nKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTpub25lJyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvd1Byb2plY3RzJyk7XG5cbiAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0TGlzdCcpO1xuICAgICAgICBwcm9qZWN0TGlzdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWVsZW1lbnQnKTtcbiAgICB9KVxuXG4gICAgXG59KVxuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5Q29udHJvbGxlcjsiLCJjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRfdGFzayh0YXNrKXtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUYXNre1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkscHJvamVjdF9pZCl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnByb2plY3RfaWQgPSBwcm9qZWN0X2lkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzazsiLCJmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2spe1xuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tzJyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib3R0b20tcGFkZGluZycpO1xuXG4gICAgY29uc3QgdGFza0luZm8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8xLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jyk7XG4gICAgdGFza0luZm8xLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgdGFza0luZm8xLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgdGFza0luZm8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0luZm8yLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL2VkaXQuc3ZnXCIsXCJFZGl0XCIsXCJFZGl0XCIpKTtcbiAgICB0YXNrSW5mbzIuYXBwZW5kQ2hpbGQoY3JlYXRlaW1hZ2VGaWVsZChcIlNWR3MvZmxhZy5zdmdcIiAsXCJDaGFuZ2UgcHJpb3JpdHlcIiAsXCJDaGFuZ2UgcHJpb3JpdHlcIikpXG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL2Fycm93LXJpZ2h0LWNpcmNsZS5zdmdcIixcIk1vdmUgdG8gcHJvamVjdFwiLCBcIk1vdmUgdG8gcHJvamVjdFwiKSk7XG4gICAgdGFza0luZm8yLmFwcGVuZENoaWxkKGNyZWF0ZWltYWdlRmllbGQoXCJTVkdzL3RyYXNoLnN2Z1wiLFwiRGVsZXRlXCIgLFwiRGVsZXRlXCIpKTtcbiAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8xKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm8yKTtcblxuXG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVpbWFnZUZpZWxkKHNyYyx0aXRsZSl7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJyxzcmMpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJyx0aXRsZSk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnYWx0Jyx0aXRsZSk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnaWQnLHRpdGxlKTtcbiAgICByZXR1cm4gaW1nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuXG5cblxuLy8gPCEtLSA8ZGl2IGNsYXNzPVwidGFzayBib3R0b20tcGFkZGluZ1wiPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWluZm9cIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8cD5TdHVkeSB0aGUgZ3JpZCBzeXN0ZW08L3A+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staW5mb1wiPlxuLy8gICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlNWR3MvZWRpdC5zdmdcIiB0aXRsZT1cIkVkaXRcIiBhbHQ9XCJFZGl0XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiU1ZHcy9mbGFnLnN2Z1wiIHRpdGxlPVwiQ2hhbmdlIHByaW9yaXR5XCIgYWx0PVwiQ2hhbmdlIHByaW9yaXR5XCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiU1ZHcy9hcnJvdy1yaWdodC1jaXJjbGUuc3ZnXCIgdGl0bGU9XCJNb3ZlIHRvIHByb2plY3RcIiBhbHQ9XCJNb3ZlIHRvIHByb2plY3RcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJTVkdzL3RyYXNoLnN2Z1wiIHRpdGxlPVwiRGVsZXRlXCIgYWx0PVwiRGVsZXRlXCI+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyA8L2Rpdj4gLS0+PC9pbWc+IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2snXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdCdcbmltcG9ydCBkaXNwbGF5Q29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvZGlzcGxheUNvbnRyb2xsZXInXG5pbXBvcnQgY3JlYXRlVGFzayBmcm9tICcuL21vZHVsZXMvdGFza0NvbXBvbmVudCdcblxuXG5pbml0KCk7XG5cblxuXG5cblxuZnVuY3Rpb24gaW5pdCgpe1xuICAgIGRpc3BsYXlDb250cm9sbGVyKCk7XG4gICAgXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy9wcmV2ZW50IHRoZSBmcm9tIHN1Ym1pdHRpbmcgXG5cbiAgICAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVfZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0JykudmFsdWU7XG5cbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkscHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Rm9ybScpO1xuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5Om5vbmUnKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnZmRmZGYnKTtcblxuICAgICAgICBjcmVhdGVUYXNrKG5ld1Rhc2spO1xuICAgIH0pXG5cblxuICAgIFxufVxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=