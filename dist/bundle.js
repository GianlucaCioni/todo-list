/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-LightItalic.ttf */ "./src/Roboto-LightItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n}\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\theight: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\theight: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 90%;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n}\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\theight: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\theight: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n}\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
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
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
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
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
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
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
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
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "quickAdd": () => (/* binding */ quickAdd),
/* harmony export */   "createCardBtn": () => (/* binding */ createCardBtn),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "toggleTaskDone": () => (/* binding */ toggleTaskDone),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "showEditProjectPopUp": () => (/* binding */ showEditProjectPopUp)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






// Create Tasks button opens pop-up and allows a full task to be added
const createTaskBtn = document.getElementById('create-task-btn');
createTaskBtn.addEventListener('click', () => showTaskPopUp('Create New Task'));

// Quickly add a task with only the title, but no other information
const quickAddInput = document.getElementById('quick-add-input');
const quickAddBtn = document.getElementById('quick-add-btn');
quickAddBtn.addEventListener('click', (e) => quickAdd(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject, e));

// Add a task with title, description, due date and priority
const fullAddBtn = document.getElementById('full-add-btn');
fullAddBtn.addEventListener('click', () => createOrEditTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject));

// Cancel new/edit task pop-up
const taskPopUpCancel = document.getElementById('cancel-full-add-btn');
taskPopUpCancel.addEventListener('click', () => hidePopUp('task-popup'));
// Opens edit task pop-up
const editTaskBtn = document.getElementById('edit-task-btn');
editTaskBtn.addEventListener('click', () => showTaskPopUp('Edit Task'));

// Add a new Project
const newProjectInput = document.getElementById('new-project-input');
const newProjectBtn = document.getElementById('new-project-btn');
newProjectBtn.addEventListener('click', (e) =>
	quickAddProject(newProjectInput.value, e)
);

// Pop-up confirmation to delete a project
const cancelProjectYesBtn = document.getElementById('delete-project-yes');
cancelProjectYesBtn.addEventListener('click', (e) => deleteProject(e));

const cancelProjectNoBtn = document.getElementById('delete-project-no');
cancelProjectNoBtn.addEventListener(
	'click',
	() =>
		(document.getElementById('delete-project-prompt').style.display = 'none')
);

// Edit project name
const editProjectNameSubmit = document.getElementById(
	'edit-project-name-submit'
);
const editProjectNameInput = document.getElementById('edit-project-name-input');
editProjectNameSubmit.addEventListener('click', (e) => editProjectName(e));

// Cancel edit Project name
const cancelEditProjectName = document.getElementById(
	'edit-project-name-cancel'
);
cancelEditProjectName.addEventListener('click', () =>
	hidePopUp('edit-project-popup')
);

// All Tasks Project
const allTasksProjectCard = document.getElementById('all-tasks-project');
allTasksProjectCard.addEventListener('click', () => renderAllTasksProject());

// Quickly add a project
function quickAddProject(projectName, e) {
	e.preventDefault();
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.quickAddValidation)(projectName, 'add-project-errors');
	if (newProjectInput.value !== '' && newProjectInput.value.length < 26) {
		newProject(projectName);
	}
}
// Creates a new Project
function newProject(projectName) {
	_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.push((0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)((0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.capitilize)(projectName), []));
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.length - 1]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(newProjectInput);
}

// Uses input to edit project name
function editProjectName(e) {
	const input = document.getElementById('edit-project-name-input');
	_project_js__WEBPACK_IMPORTED_MODULE_2__.hiddenActiveProject.editName(input.value);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(input);
	hidePopUp('edit-project-popup');
}

function hidePopUp(id) {
	const popUp = document.getElementById(id);
	popUp.style.display = 'none';
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(
		document.getElementById('pop-up-title-input'),
		document.getElementById('pop-up-description-input'),
		document.getElementById('pop-up-due-date-input')
	);
}

// Create a card. Can be used for a task or a project
function createCardBtn(type, elClass, func) {
	const button = (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)(type, elClass);
	button.addEventListener('click', (e) => func(e));
	return button;
}

// Makes the "Create new task pop-up" visible
function showTaskPopUp(title) {
	changePopUpTitle(title);
	const popUp = document.getElementById('task-popup');
	if (popUp.style.display != 'block') {
		document.querySelector(`input[value="0"`).checked = true;
		popUp.style.display = 'block';
	} else popUp.style.display = 'none';
	if (title === 'Edit Task') {
		document.getElementById('pop-up-title-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.title;
		document.getElementById('pop-up-description-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.description;
		document.getElementById('pop-up-due-date-input').value =
			_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.dueDate;
		checkRadioBtn(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
	}
}

// Change pop-up title

function changePopUpTitle(newTitle) {
	const title = document.getElementById('pop-up-title');
	title.textContent = newTitle;
}
// Makes the "Create edit project pop-up" visible
function showEditProjectPopUp(e) {
	const popUp = document.getElementById('edit-project-popup');
	const input = document.getElementById('edit-project-name-input');
	if (popUp.style.display != 'block') {
		const index = e.composedPath()[0].dataset.editProjectBtn;

		input.value = _project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index].title;
		popUp.style.display = 'block';
		(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]);
	} else popUp.style.display = 'none';
}

// Deletes a the relative task
function deleteTask(e) {
	e.stopPropagation();
	const index = e.composedPath()[0].dataset.deleteBtn;
	if (_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask === _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]) {
		document.getElementById('details-panel').style.display = 'none';
	}
	globalDeleteTask(index);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index]);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Deletes a task globally if working from "All Tasks" Project
function globalDeleteTask(index) {
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title === 'All Tasks') {
		const id = _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index].id;
		_project_js__WEBPACK_IMPORTED_MODULE_2__.projects.forEach((project) => {
			project.tasks.forEach((task) => {
				if (task.id === id) {
					project.removeTask(task);
				}
			});
		});
	}
}

// Deletes the relative Project
function deleteProject(e) {
	const index = parseInt(e.composedPath()[0].dataset.event);
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject === _project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index]) {
		document.getElementById('details-panel').style.display = 'none';
		index === 0
			? (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index + 1])
			: (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[index - 1]);
	}
	(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.removeProject)(index);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderProjects)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject !== undefined
		? (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)
		: renderAllTasksProject();
	document.getElementById('delete-project-prompt').style.display = 'none';
}

// NOT WORKING YET. Toggles a task as "Done"
function toggleTaskDone(e) {
	e.stopPropagation();
	const index = e.composedPath()[0].dataset.doneBtn;
	const task = _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[index];
	task.toggleDone();
	if (task.isDone) {
		_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.addTask(task);
		_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(task);
	} else {
		for (let i = 0; i < _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.length; i++) {
			if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[i].isDone) {
				_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.removeTask(task);
				if (i !== 0 && _project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks[i - 1].isDone) {
					_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.splice(i - 1, 0, task);
				} else {
					_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks.splice(i, 0, task);
				}
				break;
			}
		}
	}
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
}

// Use quickAdd text input to create a new task with only a title
function quickAdd(project, e) {
	e.preventDefault();
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.quickAddValidation)(quickAddInput.value, 'add-task-errors');
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title !== 'All Tasks') {
		if (quickAddInput.value !== '' && quickAddInput.value.length < 26) {
			if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
				newProject('Personal');
				(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
			}
			const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
				quickAddInput.value,
				undefined,
				undefined,
				'0',
				undefined,
				Math.random(1)
			);
			project.addTask(task);
			(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
			(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
			(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(quickAddInput);
		}
	}
}

// Decides to create a new task or edit an existing one
function createOrEditTask(project) {
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.popUpFormValidation)();
	const errors = document.getElementById('pop-up-errors');
	if (errors.textContent === '') {
		const title = document.getElementById('pop-up-title').textContent;
		title === 'Create New Task' ? fullAdd(project) : editTask(project);
		hidePopUp('task-popup');
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.resetTextInput)(
			document.getElementById('pop-up-title-input'),
			document.getElementById('pop-up-description-input'),
			document.getElementById('pop-up-due-date-input')
		);
	}
}

// Creates a task with a title, description, due date and priority
function fullAdd(project) {
	if (_project_js__WEBPACK_IMPORTED_MODULE_2__.activeProject.title !== 'All Tasks') {
		if (_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
			newProject('Personal');
			(0,_project_js__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects[0]);
		}
		const task = (0,_task_js__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			document.getElementById('pop-up-title-input').value,
			document.getElementById('pop-up-description-input').value,
			document.getElementById('pop-up-due-date-input').value,
			document.querySelector('input[name="priority"]:checked').value,
			undefined,
			Math.random(1)
		);
		project.addTask(task);
		(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
		(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(task);
	}
}

// Edit the task
function editTask(project) {
	const checkedPriority = document.querySelector(
		'input[name="priority"]:checked'
	);

	const title = document.getElementById('pop-up-title-input').value;
	const description = document.getElementById('pop-up-description-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	const priority = checkedPriority === null ? 0 : checkedPriority.value;

	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editTitle(title);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDescription(description);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editDueDate(dueDate);
	_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask.editPriority(priority);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.save)(_project_js__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTasks)(project.tasks);
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskDetails)(_task_js__WEBPACK_IMPORTED_MODULE_1__.hiddenActiveTask);
}

// Checks radio button with tasks previous selection
function checkRadioBtn(task) {
	document.querySelector(`input[value="${task.priority}"`).checked = true;
}

// Renders "All Tasks" project
function renderAllTasksProject() {
	const allTasksProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createProject)('All Tasks', (0,_project_js__WEBPACK_IMPORTED_MODULE_2__.createAllTasksArray)());
	(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.renderActiveProject)(allTasksProject);
}


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "renderTasks": () => (/* binding */ renderTasks),
/* harmony export */   "selectProject": () => (/* binding */ selectProject),
/* harmony export */   "resetTextInput": () => (/* binding */ resetTextInput),
/* harmony export */   "createDomElement": () => (/* binding */ createDomElement),
/* harmony export */   "renderTaskDetails": () => (/* binding */ renderTaskDetails),
/* harmony export */   "popUpFormValidation": () => (/* binding */ popUpFormValidation),
/* harmony export */   "renderActiveProject": () => (/* binding */ renderActiveProject),
/* harmony export */   "capitilize": () => (/* binding */ capitilize),
/* harmony export */   "quickAddValidation": () => (/* binding */ quickAddValidation)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");





// Assign Dataset to Project Card
function assignProjectDataIndex(index, card, editBtn, deleteBtn) {
	card.dataset.project = index;
	editBtn.dataset.editProjectBtn = index;
	deleteBtn.dataset.deleteProjectBtn = index;
}

// Create a Project Card
function createProjectCard(project) {
	const index = document.getElementById('project-list').children.length - 1;
	const card = createDomElement('div', 'project-card');
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', showDeleteProject);
	const title = createDomElement('div', 'project-title');
	const editBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.showEditProjectPopUp);
	deleteBtn.innerHTML = '&#10007;';
	editBtn.innerHTML = '&#9998';
	title.textContent = project.title;
	appendToParent(card, editBtn, title, deleteBtn);
	assignProjectDataIndex(index, card, editBtn, deleteBtn);
	card.addEventListener('click', () => {
		renderActiveProject(project);
	});
	return card;
}

// Appends Project Card to Project List
function appendProject(project) {
	const list = document.getElementById('project-list');
	const card = createProjectCard(project);
	list.appendChild(card);
}

// Appends all Project Card to Project List
function appendAllProjects(project) {
	_project__WEBPACK_IMPORTED_MODULE_0__.projects.forEach((project) => appendProject(project));
}

// Renders Projects
function renderProjects(projects) {
	resetElements('.project-card');
	appendAllProjects();
}

// Renders the active projects tasks
function renderActiveProject(project) {
	(0,_project__WEBPACK_IMPORTED_MODULE_0__.setActiveProject)(project);
	selectProject(project);
	renderTasks(project.tasks);
}

// Renders the active projects
function selectProject(project) {
	const projectTitle = document.getElementById('project-title');
	projectTitle.textContent = project.title;
}

// Assigns dataset to task card
function assignTaskDataIndex(index, card, doneBtn, deleteBtn, title) {
	card.dataset.task = index;
	doneBtn.dataset.doneBtn = index;
	deleteBtn.dataset.deleteBtn = index;
	title.dataset.title = index;
}

// Create a new Task Card
function createTaskCard(task) {
	const index = document.getElementById('task-list').children.length;
	const card = createDomElement('div', 'task-card');
	const doneBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.toggleTaskDone);
	const deleteBtn = (0,_buttons__WEBPACK_IMPORTED_MODULE_1__.createCardBtn)('button', 'small-btn', _buttons__WEBPACK_IMPORTED_MODULE_1__.deleteTask);
	const title = createDomElement('div', 'task-title');
	card.classList.add(`priority-${task.priority}`);
	taskDone(task, card, title);
	doneBtn.innerHTML = '&#10003';
	deleteBtn.innerHTML = '&#10007;';
	title.textContent = task.title;
	appendToParent(card, doneBtn, title, deleteBtn);
	assignTaskDataIndex(index, card, doneBtn, deleteBtn, title);
	card.addEventListener('click', () => renderTaskDetails(task));
	return card;
}

// Append a task card
function appendTask(task) {
	const list = document.getElementById('task-list');
	const card = createTaskCard(task);
	list.appendChild(card);
}

// Append all task cards
function appendAllTasks(tasks) {
	if (tasks !== undefined) {
		tasks.forEach((task) => appendTask(task));
	}
}

// Renders Projects
function renderTasks(tasks) {
	resetElements('.task-card');
	appendAllTasks(tasks);
}

// Renders Task Details on details panel
function renderTaskDetails(task) {
	const title = document.getElementById('details-title');
	const description = document.getElementById('details-description');
	const dueDate = document.getElementById('details-due-date');
	const priority = document.getElementById('details-priority');
	document.getElementById('details-panel').style.display = 'block';
	title.textContent = task.title;
	description.textContent = task.description ? `${task.description}` : '';
	dueDate.textContent = task.dueDate ? `Due Date: ${task.dueDate}` : '';
	if (task.priority === '1') {
		priority.textContent = 'Priority: !';
	} else if (task.priority === '2') {
		priority.textContent = 'Priority: !!';
	} else if (task.priority === '3') {
		priority.textContent = 'Priority: !!!';
	}
	(0,_task__WEBPACK_IMPORTED_MODULE_2__.setHiddenActiveTask)(task);
}

// Appends multiple elements to a div
function appendToParent(parent, ...args) {
	args.forEach((arg) => parent.appendChild(arg));
}

// Create a DOM element with relative class
function createDomElement(type, elClass) {
	const element = document.createElement(`${type}`);
	element.classList.add(`${elClass}`);
	return element;
}

// Resets all elements with a certain class
function resetElements(elClass) {
	let elements = document.querySelectorAll(elClass);
	elements.forEach((element) => element.remove());
}

// Resets text input
function resetTextInput(...args) {
	args.forEach((arg) => (arg.value = ''));
}

// Adds task-done and 'task-title-done' class to task card and title

function taskDone(task, card, title) {
	if (task.isDone === true) {
		card.classList.add('task-done');
		title.classList.add('task-title-done');
	} else {
		card.classList.remove('task-done');
		title.classList.remove('task-title-done');
	}
}

// Form validation

function popUpFormValidation() {
	const errorList = [];
	const popUpTitle = document.getElementById('pop-up-title').textContent;
	const title = document.getElementById('pop-up-title-input').value;
	const dueDate = document.getElementById('pop-up-due-date-input').value;
	_project__WEBPACK_IMPORTED_MODULE_0__.activeProject.title === 'All Tasks' && popUpTitle === 'Create New Task'
		? errorList.push('Cannot add tasks to "All Tasks"')
		: errorList.push(titleValidation(title));
	errorList.push(dueDateValidation(dueDate));
	showErrors(errorList, 'pop-up-errors');
}

function quickAddValidation(title, errorsId) {
	const errors = document.getElementById(errorsId);
	errors.textContent =
		_project__WEBPACK_IMPORTED_MODULE_0__.activeProject.title === 'All Tasks' && errorsId === 'add-task-errors'
			? 'Cannot add tasks to "All Tasks"'
			: titleValidation(title);
}
// Title validation
function titleValidation(title) {
	if (title === '') {
		return 'Insert title';
	} else if (title.length > 25) {
		return 'Title max 25 characters';
	}
}

// Due Date not in past
function dueDateValidation(dueDate) {
	const today = new Date().toISOString().slice(0, 10);
	const inputDate =
		dueDate !== '' ? new Date(dueDate).toISOString().slice(0, 10) : '';
	if (inputDate !== '' && inputDate < today) {
		return 'Due Date is in the past';
	}
}
// Show form Validation errors
function showErrors(errorList, id) {
	const errors = document.getElementById(id);
	errors.textContent = errorList.join(' | ');
	if (errors.textContent === ' | ') {
		errors.textContent = '';
	}
	if (errorList.includes(undefined)) {
		errors.textContent = errors.textContent.replaceAll('|', '');
	}
}

// Capitilize first letter
function capitilize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

// Show delete project prompt pop-up
function showDeleteProject(e) {
	e.stopPropagation();
	// assigns the "yes" button on the delete project prompt the dataset of the project intended to be deleted
	document.getElementById('delete-project-yes').dataset.event =
		e.composedPath()[0].dataset.deleteProjectBtn;

	document.getElementById('delete-project-prompt').style.display = 'block';
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "save": () => (/* binding */ save),
/* harmony export */   "load": () => (/* binding */ load)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");



// Saves to localStorage
function save(projects) {
	localStorage.setItem('projects', JSON.stringify(projects));
}

// Loads from localStorage
function load() {
	let projects = JSON.parse(localStorage.getItem('projects'));
	return projects === null ? [] : projects;
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "hiddenActiveProject": () => (/* binding */ hiddenActiveProject),
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "setActiveProject": () => (/* binding */ setActiveProject),
/* harmony export */   "setHiddenActiveProject": () => (/* binding */ setHiddenActiveProject),
/* harmony export */   "removeProject": () => (/* binding */ removeProject),
/* harmony export */   "allTasksProject": () => (/* binding */ allTasksProject),
/* harmony export */   "createAllTasksArray": () => (/* binding */ createAllTasksArray)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");





// Project Factory Function
function createProject(title, tasks) {
	const proto = {
		addTask: function (task) {
			this.tasks.push(task);
		},

		removeTask: function (task) {
			const index = this.tasks.indexOf(task);
			this.tasks.splice(index, 1);
		},
		editName: function (newTitle) {
			this.title = newTitle;
		},
	};
	const project = Object.assign(Object.create(proto), {
		title,
		tasks,
	});
	return project;
}

// Sets the Active Project
function setActiveProject(project) {
	activeProject = project;
}
// Removes project from Projects array
function removeProject(index) {
	projects.splice(index, 1);
}

// Loads localStorage
let projects = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.load)();

// Returns an array with all tasks
function createAllTasksArray() {
	return projects.reduce((array, project) => {
		project.tasks.forEach((task) => {
			(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(task.title);
			array.push(task);
		});
		return array;
	}, []);
}

// Creates allTasksProject
let allTasksProject = createProject('All Tasks', createAllTasksArray());

// Defines the active Project
let activeProject;

// Hidden active project

let hiddenActiveProject;

// Sets the Hidden active project (needed to edit project)

function setHiddenActiveProject(project) {
	hiddenActiveProject = project;
}


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hiddenActiveTask": () => (/* binding */ hiddenActiveTask),
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "setHiddenActiveTask": () => (/* binding */ setHiddenActiveTask)
/* harmony export */ });


// Task Factory Function
function createTask(title, description, dueDate, priority, isDone, id) {
	const proto = {
		editTitle: function (newTitle) {
			this.title = newTitle;
		},
		editDescription: function (newDescription) {
			this.description = newDescription;
		},
		editDueDate: function (newDueDate) {
			this.dueDate = newDueDate;
		},
		editPriority: function (newPriority) {
			this.priority = newPriority;
		},
		toggleDone: function () {
			this.isDone = !this.isDone;
		},
	};
	const task = Object.assign(Object.create(proto), {
		title,
		description,
		dueDate,
		priority,
		isDone,
		id,
	});
	return task;
}

// Hidden active task

let hiddenActiveTask;

// Sets the Hidden task project (needed to edit task)

function setHiddenActiveTask(task) {
	hiddenActiveTask = task;
}


/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75371f53f06181df75f1.ttf";

/***/ }),

/***/ "./src/Roboto-LightItalic.ttf":
/*!************************************!*\
  !*** ./src/Roboto-LightItalic.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43cbee784f9194c54b2c.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./src/buttons.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");







// Recreates all Projects and Tasks with working __proto__ after loading it from localStorage
for (let i = 0; i < _project__WEBPACK_IMPORTED_MODULE_2__.projects.length; i++) {
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[i] = (0,_project__WEBPACK_IMPORTED_MODULE_2__.createProject)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].title, _project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks);
	for (let a = 0; a < _project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks.length; a++) {
		_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a] = (0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].title,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].description,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].dueDate,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].priority,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].isDone,
			_project__WEBPACK_IMPORTED_MODULE_2__.projects[i].tasks[a].id
		);
	}
}

// Creates default "Personal" project if projects array is empty when loading app
if (_project__WEBPACK_IMPORTED_MODULE_2__.projects[0] === undefined) {
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Instructions');
	(0,_buttons__WEBPACK_IMPORTED_MODULE_4__.newProject)('Personal');
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Projects',
			'You can create new projects and edit their names from the Projects Panel',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Tasks',
			'You can create tasks for each project to stay more organized. Either add a task quickly or click on "+ Create Task"',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Complete and delete tasks',
			'You can also set a task to done or completely remove a task by clicking the buttons on the relative task. Try it out now! first set this task to done and then delete it.',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Details',
			'In the panel from which you are currently reading you can view all the details of a selected task and also edit it. The only required field is the title',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].addTask(
		(0,_task__WEBPACK_IMPORTED_MODULE_1__.createTask)(
			'Delete instructions',
			'You are all set. Go ahead and delete the instructions project and start using the todo list!',
			undefined,
			'0',
			false,
			Math.random(1)
		)
	);
	(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.save)(_project__WEBPACK_IMPORTED_MODULE_2__.projects);
	(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTasks)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[0].tasks);
}

// Sets Active Project to the first one in projects array
(0,_project__WEBPACK_IMPORTED_MODULE_2__.setActiveProject)(_project__WEBPACK_IMPORTED_MODULE_2__.projects[0]);

// Renders Projects upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)(_project__WEBPACK_IMPORTED_MODULE_2__.projects);

// Renders Tasks upon loading the app
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderTasks)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject.tasks);

// Selects the active project and shows it on the Tasks-Panel
(0,_dom__WEBPACK_IMPORTED_MODULE_3__.selectProject)(_project__WEBPACK_IMPORTED_MODULE_2__.activeProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxZQUFZLE9BQU8sS0FBSyxZQUFZLHFCQUFxQixPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxh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QUU1QjtBQUNBLG9EQUFjLENBQUMsOENBQVE7O0FBRXZCO0FBQ0EsaURBQVcsQ0FBQyx5REFBbUI7O0FBRS9CO0FBQ0EsbURBQWEsQ0FBQyxtREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUxpZ2h0SXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSxcXG5cXHRcXHR1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG5odG1sIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnLiBtYWluIC4nXFxuXFx0XFx0Jy4gLiAuICc7XFxuXFx0c2Nyb2xsYmFyLWNvbG9yOiAjZmZiODU1ICMyZDMxNDI0OTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IDAuM2VtO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRncmlkLWFyZWE6IG1haW47XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdCcuIC4gLidcXG5cXHRcXHQnc2lkZWJhciB0YXNrLXBhbmVsIGRldGFpbHMtcGFuZWwnXFxuXFx0XFx0Jy4gLiAuICc7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRoZWlnaHQ6IDk4dmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGdhcDogMWVtO1xcblxcdHdpZHRoOiBtYXgtY29udGVudDtcXG5cXHRhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmgzIHtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGdyaWQtYXJlYTogc2lkZWJhcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuMWVtIDFlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG5cXHRtYXJnaW46IDEuNWVtIDFlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzQ3O1xcblxcdGJvcmRlcjogMHB4IHNvbGlkICNhNTQ2NTc7XFxuXFx0Y29sb3I6ICMyZDMxNDI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnNtYWxsLWJ0biB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcblxcdHdpZHRoOiAyZW07XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Zm9udC1zaXplOiAwLjhlbTtcXG5cXHRwYWRkaW5nOiAwO1xcbn1cXG4ucG9wLXVwLWJ0bnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHR3aWR0aDogOTAlO1xcbn1cXG5cXG4ucG9wLXVwLWJ0biB7XFxuXFx0cGFkZGluZzogMC40ZW0gMWVtO1xcbn1cXG5cXG4jY3JlYXRlLXRhc2stYnRuIHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogNTAlO1xcblxcdG1hcmdpbjogLTFlbSA1ZW0gMS4yZW0gNWVtO1xcbn1cXG5cXG4jZWRpdC10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZzogMCAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHJlc2l6ZTogbm9uZTtcXG59XFxuXFxub3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogI2ZkZmZmYzljO1xcblxcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dCxcXG4jcXVpY2stYWRkLWlucHV0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XFxuLnBvcC11cC1pbnB1dCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQge1xcblxcdGhlaWdodDogNmVtO1xcbn1cXG4jcG9wLXVwLXByaW9yaXR5LWlucHV0IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0d2lkdGg6IDg4JTtcXG5cXHRtYXJnaW4tbGVmdDogMC40ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XFxufVxcblxcbi5wb3AtdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDFlbSAxZW0gMS41ZW0gMmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZXJyb3JzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogI2ZmYjM0NztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5xdWljay1hZGQtZXJyb3JzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogI2ZmYjM0NztcXG5cXHRoZWlnaHQ6IDEuNWVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxZW07XFxufVxcblxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucGFuZWwge1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYTU0NjU3O1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjJlbSAxZW0gMC4xZW0gMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI3Rhc2stcGFuZWwge1xcblxcdGdyaWQtYXJlYTogdGFzay1wYW5lbDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1heC13aWR0aDogMTZlbTtcXG59XFxuLnBhbmVsLXRpdGxlIHtcXG5cXHRtYXJnaW46IDFlbSAwLjdlbSAwLjdlbSAwLjdlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0Z3JpZC1hcmVhOiBkZXRhaWxzLXBhbmVsO1xcblxcdHdpZHRoOiAyMGVtO1xcbn1cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNpbnRlcm5hbC1kZXRhaWxzLXBhbmVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2RldGFpbHMtdGl0bGUge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbiNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRoZWlnaHQ6IDIyZW07XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4jZGV0YWlscy1kdWUtZGF0ZSxcXG4jZGV0YWlscy1wcmlvcml0eSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0YXNrLWRldGFpbHMtbGlzdCxcXG4jdGFzay1saXN0LFxcbiNwcm9qZWN0LWxpc3Qge1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IGF1dG87XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC4zZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC4zZW07XFxufVxcblxcbiN0YXNrLWRldGFpbHMtbGlzdCB7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4udGFzay1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXRpdGxlIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAwLjNlbTtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FsbC10YXNrcy1wcm9qZWN0IHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZmYjM0NztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJpb3JpdHktMSB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwIHJnYmEoMCwgMTI4LCAwLCAwLjM0OSk7XFxufVxcbi5wcmlvcml0eS0yIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZmYjI0NzhlO1xcbn1cXG4ucHJpb3JpdHktMyB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwIHJnYmEoMTQxLCAwLCAwLCAwLjUzNCk7XFxufVxcblxcbi50YXNrLXRpdGxlLWRvbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG4udGFzay1kb25lIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjODM0YzU2O1xcbn1cXG5cXG4udGFzay1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjY1NDY2O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2FsbC10YXNrcy1wcm9qZWN0OmhvdmVyLFxcbi5wcm9qZWN0LWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM1NzljYjY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHR3aWR0aDogMC4zZW07XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcblxcdGJhY2tncm91bmQ6ICMyZDMxNDI0OTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6IDFlbTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuXFx0YmFja2dyb3VuZDogI2ZmYjg1NTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZhYjM2O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHJpZ2h0OiAxLjVlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyIHNpZGViYXIgdGFzay1wYW5lbCB0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcuIGRldGFpbHMtcGFuZWwgZGV0YWlscy1wYW5lbCAuICAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IDQwdmg7XFxuXFx0XFx0bWF4LWhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0fVxcblxcdCNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRcXHRoZWlnaHQ6IDkuNWVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHFCQUFxQjtDQUNyQjt5Q0FDZ0M7QUFDakM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2I7OztVQUdTO0NBQ1Qsa0NBQWtDO0NBQ2xDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixhQUFhO0NBQ2I7OztVQUdTO0NBQ1QseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1Qiw2QkFBNkI7Q0FDN0IsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixVQUFVO0FBQ1g7QUFDQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsV0FBVztDQUNYLHdCQUF3QjtBQUN6Qjs7QUFFQTs7O0NBR0Msd0NBQXdDO0NBQ3hDLHlCQUF5QjtDQUN6QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsYUFBYTtDQUNiLGFBQWE7Q0FDYixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVSxFQUFFLFlBQVk7QUFDekI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7O0NBRUMsb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxVQUFVO0NBQ1YsV0FBVztDQUNYLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsYUFBYTtDQUNiLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtDQUNuQixXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsYUFBYTtDQUNiLFNBQVM7Q0FDVCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZiw0QkFBNEI7Q0FDNUIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qiw4QkFBOEI7Q0FDOUIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyx3QkFBd0I7Q0FDeEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7QUFDQTs7Q0FFQyxpQkFBaUI7QUFDbEI7O0FBRUE7OztDQUdDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsb0JBQW9CO0NBQ3BCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9CLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLDZCQUE2QjtDQUM3QixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyw0Q0FBNEM7QUFDN0M7QUFDQTtDQUNDLCtCQUErQjtBQUNoQztBQUNBO0NBQ0MsNENBQTRDO0FBQzdDOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyx5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsWUFBWTtDQUNiO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDOztzQ0FFb0M7RUFDcEMsTUFBTTtDQUNQO0NBQ0E7RUFDQyxZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxZQUFZO0VBQ1osdUJBQXVCO0NBQ3hCO0NBQ0E7RUFDQyxhQUFhO0VBQ2Isa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDOzs7b0JBR2tCO0VBQ2xCLE1BQU07Q0FDUDtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpLCB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJyksXFxuXFx0XFx0dXJsKCcuL1JvYm90by1MaWdodEl0YWxpYy50dGYnKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRmb250LWZhbWlseTogUm9ib3RvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdHNjcm9sbGJhci1jb2xvcjogI2ZmYjg1NSAjMmQzMTQyNDk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiAwLjNlbTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiA5OHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuMmVtIDFlbSAwLjFlbSAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDkwJTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IC0xZW0gNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuI2VkaXQtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmc6IDAgMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNmZGZmZmM5YztcXG5cXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtaW5wdXQsXFxuI3F1aWNrLWFkZC1pbnB1dCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDZlbTtcXG59XFxuI3BvcC11cC1wcmlvcml0eS1pbnB1dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmRmZmZjO1xcblxcdHdpZHRoOiA4OCU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNGVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuLmVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucXVpY2stYWRkLWVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0aGVpZ2h0OiAxLjVlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuMWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcbi5wYW5lbC10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gMC43ZW0gMC43ZW0gMC43ZW07XFxufVxcbiNkZXRhaWxzLXBhbmVsLXdyYXBwZXIge1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR3aWR0aDogMjBlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW50ZXJuYWwtZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkZXRhaWxzLXRpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG4jZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0aGVpZ2h0OiAyMmVtO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuI2RldGFpbHMtZHVlLWRhdGUsXFxuI2RldGFpbHMtcHJpb3JpdHkge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLWxpc3QsXFxuI3Rhc2stbGlzdCxcXG4jcHJvamVjdC1saXN0IHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogLTAuM2VtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLWxpc3Qge1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FsbC10YXNrcy10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMC4zZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtcHJvamVjdCB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCByZ2JhKDAsIDEyOCwgMCwgMC4zNDkpO1xcbn1cXG4ucHJpb3JpdHktMiB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZmIyNDc4ZTtcXG59XFxuLnByaW9yaXR5LTMge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCByZ2JhKDE0MSwgMCwgMCwgMC41MzQpO1xcbn1cXG5cXG4udGFzay10aXRsZS1kb25lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2stZG9uZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzgzNGM1NjtcXG59XFxuXFxuLnRhc2stY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I2NTQ2NjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5Y2I2O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDAuM2VtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQzMTQyNDk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxZW07XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6ICNmZmI4NTU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZDogI2ZmYWIzNjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xcblxcdGJvZHkge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRyaWdodDogMS41ZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0XFx0aGVpZ2h0OiA5LjVlbTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjM1cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCdzaWRlYmFyJ1xcblxcdFxcdFxcdCd0YXNrLXBhbmVsJ1xcblxcdFxcdFxcdCcgZGV0YWlscy1wYW5lbCAnO1xcblxcdFxcdGdhcDogMDtcXG5cXHR9XFxuXFx0LnBhbmVsIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1heC13aWR0aDogMTZlbTtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAyNWVtO1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcblxcdCNkZXRhaWxzLXBhbmVsLXdyYXBwZXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAyNWVtO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclRhc2tzLFxuXHRyZXNldFRleHRJbnB1dCxcblx0Y3JlYXRlRG9tRWxlbWVudCxcblx0cmVuZGVyVGFza0RldGFpbHMsXG5cdHBvcFVwRm9ybVZhbGlkYXRpb24sXG5cdHJlbmRlckFjdGl2ZVByb2plY3QsXG5cdGNhcGl0aWxpemUsXG5cdHF1aWNrQWRkVmFsaWRhdGlvbixcbn0gZnJvbSAnLi9kb20uanMnO1xuaW1wb3J0IHsgaGlkZGVuQWN0aXZlVGFzaywgY3JlYXRlVGFzaywgc2V0SGlkZGVuQWN0aXZlVGFzayB9IGZyb20gJy4vdGFzay5qcyc7XG5pbXBvcnQge1xuXHRhY3RpdmVQcm9qZWN0LFxuXHRwcm9qZWN0cyxcblx0Y3JlYXRlUHJvamVjdCxcblx0cmVtb3ZlUHJvamVjdCxcblx0c2V0SGlkZGVuQWN0aXZlUHJvamVjdCxcblx0aGlkZGVuQWN0aXZlUHJvamVjdCxcblx0c2V0QWN0aXZlUHJvamVjdCxcblx0YWxsVGFza3NQcm9qZWN0LFxuXHRjcmVhdGVBbGxUYXNrc0FycmF5LFxufSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgc2F2ZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmV4cG9ydCB7XG5cdG5ld1Byb2plY3QsXG5cdHF1aWNrQWRkLFxuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59O1xuXG4vLyBDcmVhdGUgVGFza3MgYnV0dG9uIG9wZW5zIHBvcC11cCBhbmQgYWxsb3dzIGEgZnVsbCB0YXNrIHRvIGJlIGFkZGVkXG5jb25zdCBjcmVhdGVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS10YXNrLWJ0bicpO1xuY3JlYXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0NyZWF0ZSBOZXcgVGFzaycpKTtcblxuLy8gUXVpY2tseSBhZGQgYSB0YXNrIHdpdGggb25seSB0aGUgdGl0bGUsIGJ1dCBubyBvdGhlciBpbmZvcm1hdGlvblxuY29uc3QgcXVpY2tBZGRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWljay1hZGQtaW5wdXQnKTtcbmNvbnN0IHF1aWNrQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1idG4nKTtcbnF1aWNrQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHF1aWNrQWRkKGFjdGl2ZVByb2plY3QsIGUpKTtcblxuLy8gQWRkIGEgdGFzayB3aXRoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5jb25zdCBmdWxsQWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Z1bGwtYWRkLWJ0bicpO1xuZnVsbEFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNyZWF0ZU9yRWRpdFRhc2soYWN0aXZlUHJvamVjdCkpO1xuXG4vLyBDYW5jZWwgbmV3L2VkaXQgdGFzayBwb3AtdXBcbmNvbnN0IHRhc2tQb3BVcENhbmNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtZnVsbC1hZGQtYnRuJyk7XG50YXNrUG9wVXBDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKSk7XG4vLyBPcGVucyBlZGl0IHRhc2sgcG9wLXVwXG5jb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRhc2stYnRuJyk7XG5lZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUYXNrUG9wVXAoJ0VkaXQgVGFzaycpKTtcblxuLy8gQWRkIGEgbmV3IFByb2plY3RcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1pbnB1dCcpO1xuY29uc3QgbmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKTtcbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT5cblx0cXVpY2tBZGRQcm9qZWN0KG5ld1Byb2plY3RJbnB1dC52YWx1ZSwgZSlcbik7XG5cbi8vIFBvcC11cCBjb25maXJtYXRpb24gdG8gZGVsZXRlIGEgcHJvamVjdFxuY29uc3QgY2FuY2VsUHJvamVjdFllc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC15ZXMnKTtcbmNhbmNlbFByb2plY3RZZXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG5cbmNvbnN0IGNhbmNlbFByb2plY3ROb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1ubycpO1xuY2FuY2VsUHJvamVjdE5vQnRuLmFkZEV2ZW50TGlzdGVuZXIoXG5cdCdjbGljaycsXG5cdCgpID0+XG5cdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKVxuKTtcblxuLy8gRWRpdCBwcm9qZWN0IG5hbWVcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZVN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtc3VibWl0J1xuKTtcbmNvbnN0IGVkaXRQcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5lZGl0UHJvamVjdE5hbWVTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZWRpdFByb2plY3ROYW1lKGUpKTtcblxuLy8gQ2FuY2VsIGVkaXQgUHJvamVjdCBuYW1lXG5jb25zdCBjYW5jZWxFZGl0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcblx0J2VkaXQtcHJvamVjdC1uYW1lLWNhbmNlbCdcbik7XG5jYW5jZWxFZGl0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpXG4pO1xuXG4vLyBBbGwgVGFza3MgUHJvamVjdFxuY29uc3QgYWxsVGFza3NQcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtdGFza3MtcHJvamVjdCcpO1xuYWxsVGFza3NQcm9qZWN0Q2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlckFsbFRhc2tzUHJvamVjdCgpKTtcblxuLy8gUXVpY2tseSBhZGQgYSBwcm9qZWN0XG5mdW5jdGlvbiBxdWlja0FkZFByb2plY3QocHJvamVjdE5hbWUsIGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRxdWlja0FkZFZhbGlkYXRpb24ocHJvamVjdE5hbWUsICdhZGQtcHJvamVjdC1lcnJvcnMnKTtcblx0aWYgKG5ld1Byb2plY3RJbnB1dC52YWx1ZSAhPT0gJycgJiYgbmV3UHJvamVjdElucHV0LnZhbHVlLmxlbmd0aCA8IDI2KSB7XG5cdFx0bmV3UHJvamVjdChwcm9qZWN0TmFtZSk7XG5cdH1cbn1cbi8vIENyZWF0ZXMgYSBuZXcgUHJvamVjdFxuZnVuY3Rpb24gbmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuXHRwcm9qZWN0cy5wdXNoKGNyZWF0ZVByb2plY3QoY2FwaXRpbGl6ZShwcm9qZWN0TmFtZSksIFtdKSk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3RzW3Byb2plY3RzLmxlbmd0aCAtIDFdKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChuZXdQcm9qZWN0SW5wdXQpO1xufVxuXG4vLyBVc2VzIGlucHV0IHRvIGVkaXQgcHJvamVjdCBuYW1lXG5mdW5jdGlvbiBlZGl0UHJvamVjdE5hbWUoZSkge1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LmVkaXROYW1lKGlucHV0LnZhbHVlKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcblx0cmVzZXRUZXh0SW5wdXQoaW5wdXQpO1xuXHRoaWRlUG9wVXAoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xufVxuXG5mdW5jdGlvbiBoaWRlUG9wVXAoaWQpIHtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdHJlc2V0VGV4dElucHV0KFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JyksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpXG5cdCk7XG59XG5cbi8vIENyZWF0ZSBhIGNhcmQuIENhbiBiZSB1c2VkIGZvciBhIHRhc2sgb3IgYSBwcm9qZWN0XG5mdW5jdGlvbiBjcmVhdGVDYXJkQnRuKHR5cGUsIGVsQ2xhc3MsIGZ1bmMpIHtcblx0Y29uc3QgYnV0dG9uID0gY3JlYXRlRG9tRWxlbWVudCh0eXBlLCBlbENsYXNzKTtcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGZ1bmMoZSkpO1xuXHRyZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgbmV3IHRhc2sgcG9wLXVwXCIgdmlzaWJsZVxuZnVuY3Rpb24gc2hvd1Rhc2tQb3BVcCh0aXRsZSkge1xuXHRjaGFuZ2VQb3BVcFRpdGxlKHRpdGxlKTtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1wb3B1cCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIwXCJgKS5jaGVja2VkID0gdHJ1ZTtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdGlmICh0aXRsZSA9PT0gJ0VkaXQgVGFzaycpIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay50aXRsZTtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kZXNjcmlwdGlvbjtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWUgPVxuXHRcdFx0aGlkZGVuQWN0aXZlVGFzay5kdWVEYXRlO1xuXHRcdGNoZWNrUmFkaW9CdG4oaGlkZGVuQWN0aXZlVGFzayk7XG5cdH1cbn1cblxuLy8gQ2hhbmdlIHBvcC11cCB0aXRsZVxuXG5mdW5jdGlvbiBjaGFuZ2VQb3BVcFRpdGxlKG5ld1RpdGxlKSB7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IG5ld1RpdGxlO1xufVxuLy8gTWFrZXMgdGhlIFwiQ3JlYXRlIGVkaXQgcHJvamVjdCBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93RWRpdFByb2plY3RQb3BVcChlKSB7XG5cdGNvbnN0IHBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1wb3B1cCcpO1xuXHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXByb2plY3QtbmFtZS1pbnB1dCcpO1xuXHRpZiAocG9wVXAuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuZWRpdFByb2plY3RCdG47XG5cblx0XHRpbnB1dC52YWx1ZSA9IHByb2plY3RzW2luZGV4XS50aXRsZTtcblx0XHRwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0KHByb2plY3RzW2luZGV4XSk7XG5cdH0gZWxzZSBwb3BVcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBEZWxldGVzIGEgdGhlIHJlbGF0aXZlIHRhc2tcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRjb25zdCBpbmRleCA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5kZWxldGVCdG47XG5cdGlmIChoaWRkZW5BY3RpdmVUYXNrID09PSBhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XSkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0fVxuXHRnbG9iYWxEZWxldGVUYXNrKGluZGV4KTtcblx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdKTtcblx0cmVuZGVyVGFza3MoYWN0aXZlUHJvamVjdC50YXNrcyk7XG5cdHNhdmUocHJvamVjdHMpO1xufVxuXG4vLyBEZWxldGVzIGEgdGFzayBnbG9iYWxseSBpZiB3b3JraW5nIGZyb20gXCJBbGwgVGFza3NcIiBQcm9qZWN0XG5mdW5jdGlvbiBnbG9iYWxEZWxldGVUYXNrKGluZGV4KSB7XG5cdGlmIChhY3RpdmVQcm9qZWN0LnRpdGxlID09PSAnQWxsIFRhc2tzJykge1xuXHRcdGNvbnN0IGlkID0gYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0uaWQ7XG5cdFx0cHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuXHRcdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRcdGlmICh0YXNrLmlkID09PSBpZCkge1xuXHRcdFx0XHRcdHByb2plY3QucmVtb3ZlVGFzayh0YXNrKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRGVsZXRlcyB0aGUgcmVsYXRpdmUgUHJvamVjdFxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChlKSB7XG5cdGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LmV2ZW50KTtcblx0aWYgKGFjdGl2ZVByb2plY3QgPT09IHByb2plY3RzW2luZGV4XSkge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRpbmRleCA9PT0gMFxuXHRcdFx0PyBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzW2luZGV4ICsgMV0pXG5cdFx0XHQ6IHNldEFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXggLSAxXSk7XG5cdH1cblx0cmVtb3ZlUHJvamVjdChpbmRleCk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cdGFjdGl2ZVByb2plY3QgIT09IHVuZGVmaW5lZFxuXHRcdD8gcmVuZGVyQWN0aXZlUHJvamVjdChhY3RpdmVQcm9qZWN0KVxuXHRcdDogcmVuZGVyQWxsVGFza3NQcm9qZWN0KCk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuXG4vLyBOT1QgV09SS0lORyBZRVQuIFRvZ2dsZXMgYSB0YXNrIGFzIFwiRG9uZVwiXG5mdW5jdGlvbiB0b2dnbGVUYXNrRG9uZShlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IGluZGV4ID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LmRvbmVCdG47XG5cdGNvbnN0IHRhc2sgPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XTtcblx0dGFzay50b2dnbGVEb25lKCk7XG5cdGlmICh0YXNrLmlzRG9uZSkge1xuXHRcdGFjdGl2ZVByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0XHRhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYWN0aXZlUHJvamVjdC50YXNrc1tpXS5pc0RvbmUpIHtcblx0XHRcdFx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuXHRcdFx0XHRpZiAoaSAhPT0gMCAmJiBhY3RpdmVQcm9qZWN0LnRhc2tzW2kgLSAxXS5pc0RvbmUpIHtcblx0XHRcdFx0XHRhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpIC0gMSwgMCwgdGFzayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMCwgdGFzayk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXHRzYXZlKHByb2plY3RzKTtcbn1cblxuLy8gVXNlIHF1aWNrQWRkIHRleHQgaW5wdXQgdG8gY3JlYXRlIGEgbmV3IHRhc2sgd2l0aCBvbmx5IGEgdGl0bGVcbmZ1bmN0aW9uIHF1aWNrQWRkKHByb2plY3QsIGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRxdWlja0FkZFZhbGlkYXRpb24ocXVpY2tBZGRJbnB1dC52YWx1ZSwgJ2FkZC10YXNrLWVycm9ycycpO1xuXHRpZiAoYWN0aXZlUHJvamVjdC50aXRsZSAhPT0gJ0FsbCBUYXNrcycpIHtcblx0XHRpZiAocXVpY2tBZGRJbnB1dC52YWx1ZSAhPT0gJycgJiYgcXVpY2tBZGRJbnB1dC52YWx1ZS5sZW5ndGggPCAyNikge1xuXHRcdFx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0XHRcdFx0c2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcblx0XHRcdFx0cXVpY2tBZGRJbnB1dC52YWx1ZSxcblx0XHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRcdCcwJyxcblx0XHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdFx0KTtcblx0XHRcdHByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0XHRcdHNhdmUocHJvamVjdHMpO1xuXHRcdFx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdFx0XHRyZXNldFRleHRJbnB1dChxdWlja0FkZElucHV0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRGVjaWRlcyB0byBjcmVhdGUgYSBuZXcgdGFzayBvciBlZGl0IGFuIGV4aXN0aW5nIG9uZVxuZnVuY3Rpb24gY3JlYXRlT3JFZGl0VGFzayhwcm9qZWN0KSB7XG5cdHBvcFVwRm9ybVZhbGlkYXRpb24oKTtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1lcnJvcnMnKTtcblx0aWYgKGVycm9ycy50ZXh0Q29udGVudCA9PT0gJycpIHtcblx0XHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUnKS50ZXh0Q29udGVudDtcblx0XHR0aXRsZSA9PT0gJ0NyZWF0ZSBOZXcgVGFzaycgPyBmdWxsQWRkKHByb2plY3QpIDogZWRpdFRhc2socHJvamVjdCk7XG5cdFx0aGlkZVBvcFVwKCd0YXNrLXBvcHVwJyk7XG5cdFx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JyksXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JyksXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZXMgYSB0YXNrIHdpdGggYSB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZSBkYXRlIGFuZCBwcmlvcml0eVxuZnVuY3Rpb24gZnVsbEFkZChwcm9qZWN0KSB7XG5cdGlmIChhY3RpdmVQcm9qZWN0LnRpdGxlICE9PSAnQWxsIFRhc2tzJykge1xuXHRcdGlmIChwcm9qZWN0c1swXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRuZXdQcm9qZWN0KCdQZXJzb25hbCcpO1xuXHRcdFx0c2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cdFx0fVxuXHRcdGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLnZhbHVlLFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kZXNjcmlwdGlvbi1pbnB1dCcpLnZhbHVlLFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC1kdWUtZGF0ZS1pbnB1dCcpLnZhbHVlLFxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZSxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdE1hdGgucmFuZG9tKDEpXG5cdFx0KTtcblx0XHRwcm9qZWN0LmFkZFRhc2sodGFzayk7XG5cdFx0c2F2ZShwcm9qZWN0cyk7XG5cdFx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdFx0cmVuZGVyVGFza0RldGFpbHModGFzayk7XG5cdH1cbn1cblxuLy8gRWRpdCB0aGUgdGFza1xuZnVuY3Rpb24gZWRpdFRhc2socHJvamVjdCkge1xuXHRjb25zdCBjaGVja2VkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCdcblx0KTtcblxuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IHByaW9yaXR5ID0gY2hlY2tlZFByaW9yaXR5ID09PSBudWxsID8gMCA6IGNoZWNrZWRQcmlvcml0eS52YWx1ZTtcblxuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXRUaXRsZSh0aXRsZSk7XG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0RHVlRGF0ZShkdWVEYXRlKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0UHJpb3JpdHkocHJpb3JpdHkpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyVGFza3MocHJvamVjdC50YXNrcyk7XG5cdHJlbmRlclRhc2tEZXRhaWxzKGhpZGRlbkFjdGl2ZVRhc2spO1xufVxuXG4vLyBDaGVja3MgcmFkaW8gYnV0dG9uIHdpdGggdGFza3MgcHJldmlvdXMgc2VsZWN0aW9uXG5mdW5jdGlvbiBjaGVja1JhZGlvQnRuKHRhc2spIHtcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9XCIke3Rhc2sucHJpb3JpdHl9XCJgKS5jaGVja2VkID0gdHJ1ZTtcbn1cblxuLy8gUmVuZGVycyBcIkFsbCBUYXNrc1wiIHByb2plY3RcbmZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzUHJvamVjdCgpIHtcblx0Y29uc3QgYWxsVGFza3NQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCgnQWxsIFRhc2tzJywgY3JlYXRlQWxsVGFza3NBcnJheSgpKTtcblx0cmVuZGVyQWN0aXZlUHJvamVjdChhbGxUYXNrc1Byb2plY3QpO1xufVxuIiwiZXhwb3J0IHtcblx0cmVuZGVyUHJvamVjdHMsXG5cdHJlbmRlclRhc2tzLFxuXHRzZWxlY3RQcm9qZWN0LFxuXHRyZXNldFRleHRJbnB1dCxcblx0Y3JlYXRlRG9tRWxlbWVudCxcblx0cmVuZGVyVGFza0RldGFpbHMsXG5cdHBvcFVwRm9ybVZhbGlkYXRpb24sXG5cdHJlbmRlckFjdGl2ZVByb2plY3QsXG5cdGNhcGl0aWxpemUsXG5cdHF1aWNrQWRkVmFsaWRhdGlvbixcbn07XG5pbXBvcnQgeyBzZXRBY3RpdmVQcm9qZWN0LCBwcm9qZWN0cywgYWN0aXZlUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQge1xuXHRjcmVhdGVDYXJkQnRuLFxuXHRkZWxldGVUYXNrLFxuXHR0b2dnbGVUYXNrRG9uZSxcblx0ZGVsZXRlUHJvamVjdCxcblx0c2hvd0VkaXRQcm9qZWN0UG9wVXAsXG59IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrJztcblxuLy8gQXNzaWduIERhdGFzZXQgdG8gUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pIHtcblx0Y2FyZC5kYXRhc2V0LnByb2plY3QgPSBpbmRleDtcblx0ZWRpdEJ0bi5kYXRhc2V0LmVkaXRQcm9qZWN0QnRuID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZVByb2plY3RCdG4gPSBpbmRleDtcbn1cblxuLy8gQ3JlYXRlIGEgUHJvamVjdCBDYXJkXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KSB7XG5cdGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbGlzdCcpLmNoaWxkcmVuLmxlbmd0aCAtIDE7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAncHJvamVjdC1jYXJkJyk7XG5cdGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RGVsZXRlUHJvamVjdCk7XG5cdGNvbnN0IHRpdGxlID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtdGl0bGUnKTtcblx0Y29uc3QgZWRpdEJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBzaG93RWRpdFByb2plY3RQb3BVcCk7XG5cdGRlbGV0ZUJ0bi5pbm5lckhUTUwgPSAnJiMxMDAwNzsnO1xuXHRlZGl0QnRuLmlubmVySFRNTCA9ICcmIzk5OTgnO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG5cdGFwcGVuZFRvUGFyZW50KGNhcmQsIGVkaXRCdG4sIHRpdGxlLCBkZWxldGVCdG4pO1xuXHRhc3NpZ25Qcm9qZWN0RGF0YUluZGV4KGluZGV4LCBjYXJkLCBlZGl0QnRuLCBkZWxldGVCdG4pO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdH0pO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kcyBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRQcm9qZWN0KHByb2plY3QpIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVByb2plY3RDYXJkKHByb2plY3QpO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmRzIGFsbCBQcm9qZWN0IENhcmQgdG8gUHJvamVjdCBMaXN0XG5mdW5jdGlvbiBhcHBlbmRBbGxQcm9qZWN0cyhwcm9qZWN0KSB7XG5cdHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IGFwcGVuZFByb2plY3QocHJvamVjdCkpO1xufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cykge1xuXHRyZXNldEVsZW1lbnRzKCcucHJvamVjdC1jYXJkJyk7XG5cdGFwcGVuZEFsbFByb2plY3RzKCk7XG59XG5cbi8vIFJlbmRlcnMgdGhlIGFjdGl2ZSBwcm9qZWN0cyB0YXNrc1xuZnVuY3Rpb24gcmVuZGVyQWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdHNldEFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cdHNlbGVjdFByb2plY3QocHJvamVjdCk7XG5cdHJlbmRlclRhc2tzKHByb2plY3QudGFza3MpO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBhY3RpdmUgcHJvamVjdHNcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QocHJvamVjdCkge1xuXHRjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpO1xuXHRwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG4vLyBBc3NpZ25zIGRhdGFzZXQgdG8gdGFzayBjYXJkXG5mdW5jdGlvbiBhc3NpZ25UYXNrRGF0YUluZGV4KGluZGV4LCBjYXJkLCBkb25lQnRuLCBkZWxldGVCdG4sIHRpdGxlKSB7XG5cdGNhcmQuZGF0YXNldC50YXNrID0gaW5kZXg7XG5cdGRvbmVCdG4uZGF0YXNldC5kb25lQnRuID0gaW5kZXg7XG5cdGRlbGV0ZUJ0bi5kYXRhc2V0LmRlbGV0ZUJ0biA9IGluZGV4O1xuXHR0aXRsZS5kYXRhc2V0LnRpdGxlID0gaW5kZXg7XG59XG5cbi8vIENyZWF0ZSBhIG5ldyBUYXNrIENhcmRcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spIHtcblx0Y29uc3QgaW5kZXggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JykuY2hpbGRyZW4ubGVuZ3RoO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Rhc2stY2FyZCcpO1xuXHRjb25zdCBkb25lQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIHRvZ2dsZVRhc2tEb25lKTtcblx0Y29uc3QgZGVsZXRlQnRuID0gY3JlYXRlQ2FyZEJ0bignYnV0dG9uJywgJ3NtYWxsLWJ0bicsIGRlbGV0ZVRhc2spO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLXRpdGxlJyk7XG5cdGNhcmQuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHktJHt0YXNrLnByaW9yaXR5fWApO1xuXHR0YXNrRG9uZSh0YXNrLCBjYXJkLCB0aXRsZSk7XG5cdGRvbmVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDMnO1xuXHRkZWxldGVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDc7Jztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRhcHBlbmRUb1BhcmVudChjYXJkLCBkb25lQnRuLCB0aXRsZSwgZGVsZXRlQnRuKTtcblx0YXNzaWduVGFza0RhdGFJbmRleChpbmRleCwgY2FyZCwgZG9uZUJ0biwgZGVsZXRlQnRuLCB0aXRsZSk7XG5cdGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJUYXNrRGV0YWlscyh0YXNrKSk7XG5cdHJldHVybiBjYXJkO1xufVxuXG4vLyBBcHBlbmQgYSB0YXNrIGNhcmRcbmZ1bmN0aW9uIGFwcGVuZFRhc2sodGFzaykge1xuXHRjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlVGFza0NhcmQodGFzayk7XG5cdGxpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG59XG5cbi8vIEFwcGVuZCBhbGwgdGFzayBjYXJkc1xuZnVuY3Rpb24gYXBwZW5kQWxsVGFza3ModGFza3MpIHtcblx0aWYgKHRhc2tzICE9PSB1bmRlZmluZWQpIHtcblx0XHR0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiBhcHBlbmRUYXNrKHRhc2spKTtcblx0fVxufVxuXG4vLyBSZW5kZXJzIFByb2plY3RzXG5mdW5jdGlvbiByZW5kZXJUYXNrcyh0YXNrcykge1xuXHRyZXNldEVsZW1lbnRzKCcudGFzay1jYXJkJyk7XG5cdGFwcGVuZEFsbFRhc2tzKHRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyBUYXNrIERldGFpbHMgb24gZGV0YWlscyBwYW5lbFxuZnVuY3Rpb24gcmVuZGVyVGFza0RldGFpbHModGFzaykge1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXRpdGxlJyk7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtZGVzY3JpcHRpb24nKTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWR1ZS1kYXRlJyk7XG5cdGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcHJpb3JpdHknKTtcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXHRkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb24gPyBgJHt0YXNrLmRlc2NyaXB0aW9ufWAgOiAnJztcblx0ZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZSA/IGBEdWUgRGF0ZTogJHt0YXNrLmR1ZURhdGV9YCA6ICcnO1xuXHRpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcyJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISc7XG5cdH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJzMnKSB7XG5cdFx0cHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6ICEhISc7XG5cdH1cblx0c2V0SGlkZGVuQWN0aXZlVGFzayh0YXNrKTtcbn1cblxuLy8gQXBwZW5kcyBtdWx0aXBsZSBlbGVtZW50cyB0byBhIGRpdlxuZnVuY3Rpb24gYXBwZW5kVG9QYXJlbnQocGFyZW50LCAuLi5hcmdzKSB7XG5cdGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiBwYXJlbnQuYXBwZW5kQ2hpbGQoYXJnKSk7XG59XG5cbi8vIENyZWF0ZSBhIERPTSBlbGVtZW50IHdpdGggcmVsYXRpdmUgY2xhc3NcbmZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQodHlwZSwgZWxDbGFzcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xuXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7ZWxDbGFzc31gKTtcblx0cmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8vIFJlc2V0cyBhbGwgZWxlbWVudHMgd2l0aCBhIGNlcnRhaW4gY2xhc3NcbmZ1bmN0aW9uIHJlc2V0RWxlbWVudHMoZWxDbGFzcykge1xuXHRsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsQ2xhc3MpO1xuXHRlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbn1cblxuLy8gUmVzZXRzIHRleHQgaW5wdXRcbmZ1bmN0aW9uIHJlc2V0VGV4dElucHV0KC4uLmFyZ3MpIHtcblx0YXJncy5mb3JFYWNoKChhcmcpID0+IChhcmcudmFsdWUgPSAnJykpO1xufVxuXG4vLyBBZGRzIHRhc2stZG9uZSBhbmQgJ3Rhc2stdGl0bGUtZG9uZScgY2xhc3MgdG8gdGFzayBjYXJkIGFuZCB0aXRsZVxuXG5mdW5jdGlvbiB0YXNrRG9uZSh0YXNrLCBjYXJkLCB0aXRsZSkge1xuXHRpZiAodGFzay5pc0RvbmUgPT09IHRydWUpIHtcblx0XHRjYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZG9uZScpO1xuXHRcdHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdGl0bGUtZG9uZScpO1xuXHR9IGVsc2Uge1xuXHRcdGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgndGFzay1kb25lJyk7XG5cdFx0dGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgndGFzay10aXRsZS1kb25lJyk7XG5cdH1cbn1cblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbmZ1bmN0aW9uIHBvcFVwRm9ybVZhbGlkYXRpb24oKSB7XG5cdGNvbnN0IGVycm9yTGlzdCA9IFtdO1xuXHRjb25zdCBwb3BVcFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpLnRleHRDb250ZW50O1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcblx0YWN0aXZlUHJvamVjdC50aXRsZSA9PT0gJ0FsbCBUYXNrcycgJiYgcG9wVXBUaXRsZSA9PT0gJ0NyZWF0ZSBOZXcgVGFzaydcblx0XHQ/IGVycm9yTGlzdC5wdXNoKCdDYW5ub3QgYWRkIHRhc2tzIHRvIFwiQWxsIFRhc2tzXCInKVxuXHRcdDogZXJyb3JMaXN0LnB1c2godGl0bGVWYWxpZGF0aW9uKHRpdGxlKSk7XG5cdGVycm9yTGlzdC5wdXNoKGR1ZURhdGVWYWxpZGF0aW9uKGR1ZURhdGUpKTtcblx0c2hvd0Vycm9ycyhlcnJvckxpc3QsICdwb3AtdXAtZXJyb3JzJyk7XG59XG5cbmZ1bmN0aW9uIHF1aWNrQWRkVmFsaWRhdGlvbih0aXRsZSwgZXJyb3JzSWQpIHtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZXJyb3JzSWQpO1xuXHRlcnJvcnMudGV4dENvbnRlbnQgPVxuXHRcdGFjdGl2ZVByb2plY3QudGl0bGUgPT09ICdBbGwgVGFza3MnICYmIGVycm9yc0lkID09PSAnYWRkLXRhc2stZXJyb3JzJ1xuXHRcdFx0PyAnQ2Fubm90IGFkZCB0YXNrcyB0byBcIkFsbCBUYXNrc1wiJ1xuXHRcdFx0OiB0aXRsZVZhbGlkYXRpb24odGl0bGUpO1xufVxuLy8gVGl0bGUgdmFsaWRhdGlvblxuZnVuY3Rpb24gdGl0bGVWYWxpZGF0aW9uKHRpdGxlKSB7XG5cdGlmICh0aXRsZSA9PT0gJycpIHtcblx0XHRyZXR1cm4gJ0luc2VydCB0aXRsZSc7XG5cdH0gZWxzZSBpZiAodGl0bGUubGVuZ3RoID4gMjUpIHtcblx0XHRyZXR1cm4gJ1RpdGxlIG1heCAyNSBjaGFyYWN0ZXJzJztcblx0fVxufVxuXG4vLyBEdWUgRGF0ZSBub3QgaW4gcGFzdFxuZnVuY3Rpb24gZHVlRGF0ZVZhbGlkYXRpb24oZHVlRGF0ZSkge1xuXHRjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cdGNvbnN0IGlucHV0RGF0ZSA9XG5cdFx0ZHVlRGF0ZSAhPT0gJycgPyBuZXcgRGF0ZShkdWVEYXRlKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSA6ICcnO1xuXHRpZiAoaW5wdXREYXRlICE9PSAnJyAmJiBpbnB1dERhdGUgPCB0b2RheSkge1xuXHRcdHJldHVybiAnRHVlIERhdGUgaXMgaW4gdGhlIHBhc3QnO1xuXHR9XG59XG4vLyBTaG93IGZvcm0gVmFsaWRhdGlvbiBlcnJvcnNcbmZ1bmN0aW9uIHNob3dFcnJvcnMoZXJyb3JMaXN0LCBpZCkge1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cdGVycm9ycy50ZXh0Q29udGVudCA9IGVycm9yTGlzdC5qb2luKCcgfCAnKTtcblx0aWYgKGVycm9ycy50ZXh0Q29udGVudCA9PT0gJyB8ICcpIHtcblx0XHRlcnJvcnMudGV4dENvbnRlbnQgPSAnJztcblx0fVxuXHRpZiAoZXJyb3JMaXN0LmluY2x1ZGVzKHVuZGVmaW5lZCkpIHtcblx0XHRlcnJvcnMudGV4dENvbnRlbnQgPSBlcnJvcnMudGV4dENvbnRlbnQucmVwbGFjZUFsbCgnfCcsICcnKTtcblx0fVxufVxuXG4vLyBDYXBpdGlsaXplIGZpcnN0IGxldHRlclxuZnVuY3Rpb24gY2FwaXRpbGl6ZShzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxuLy8gU2hvdyBkZWxldGUgcHJvamVjdCBwcm9tcHQgcG9wLXVwXG5mdW5jdGlvbiBzaG93RGVsZXRlUHJvamVjdChlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdC8vIGFzc2lnbnMgdGhlIFwieWVzXCIgYnV0dG9uIG9uIHRoZSBkZWxldGUgcHJvamVjdCBwcm9tcHQgdGhlIGRhdGFzZXQgb2YgdGhlIHByb2plY3QgaW50ZW5kZWQgdG8gYmUgZGVsZXRlZFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QteWVzJykuZGF0YXNldC5ldmVudCA9XG5cdFx0ZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LmRlbGV0ZVByb2plY3RCdG47XG5cblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuZXhwb3J0IHsgc2F2ZSwgbG9hZCB9O1xuXG4vLyBTYXZlcyB0byBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmUocHJvamVjdHMpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuLy8gTG9hZHMgZnJvbSBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRyZXR1cm4gcHJvamVjdHMgPT09IG51bGwgPyBbXSA6IHByb2plY3RzO1xufVxuIiwiZXhwb3J0IHtcblx0YWN0aXZlUHJvamVjdCxcblx0aGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdGNyZWF0ZVByb2plY3QsXG5cdHNldEFjdGl2ZVByb2plY3QsXG5cdHNldEhpZGRlbkFjdGl2ZVByb2plY3QsXG5cdHJlbW92ZVByb2plY3QsXG5cdGFsbFRhc2tzUHJvamVjdCxcblx0Y3JlYXRlQWxsVGFza3NBcnJheSxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgd2l0aCBhbGwgdGFza3NcbmZ1bmN0aW9uIGNyZWF0ZUFsbFRhc2tzQXJyYXkoKSB7XG5cdHJldHVybiBwcm9qZWN0cy5yZWR1Y2UoKGFycmF5LCBwcm9qZWN0KSA9PiB7XG5cdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjcmVhdGVUYXNrKHRhc2sudGl0bGUpO1xuXHRcdFx0YXJyYXkucHVzaCh0YXNrKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0sIFtdKTtcbn1cblxuLy8gQ3JlYXRlcyBhbGxUYXNrc1Byb2plY3RcbmxldCBhbGxUYXNrc1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdBbGwgVGFza3MnLCBjcmVhdGVBbGxUYXNrc0FycmF5KCkpO1xuXG4vLyBEZWZpbmVzIHRoZSBhY3RpdmUgUHJvamVjdFxubGV0IGFjdGl2ZVByb2plY3Q7XG5cbi8vIEhpZGRlbiBhY3RpdmUgcHJvamVjdFxuXG5sZXQgaGlkZGVuQWN0aXZlUHJvamVjdDtcblxuLy8gU2V0cyB0aGUgSGlkZGVuIGFjdGl2ZSBwcm9qZWN0IChuZWVkZWQgdG8gZWRpdCBwcm9qZWN0KVxuXG5mdW5jdGlvbiBzZXRIaWRkZW5BY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcblx0aGlkZGVuQWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG59XG4iLCJleHBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBjcmVhdGVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH07XG5cbi8vIFRhc2sgRmFjdG9yeSBGdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUsIGlkKSB7XG5cdGNvbnN0IHByb3RvID0ge1xuXHRcdGVkaXRUaXRsZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0XHRlZGl0RGVzY3JpcHRpb246IGZ1bmN0aW9uIChuZXdEZXNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuXHRcdH0sXG5cdFx0ZWRpdER1ZURhdGU6IGZ1bmN0aW9uIChuZXdEdWVEYXRlKSB7XG5cdFx0XHR0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXHRcdH0sXG5cdFx0ZWRpdFByaW9yaXR5OiBmdW5jdGlvbiAobmV3UHJpb3JpdHkpIHtcblx0XHRcdHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblx0XHR9LFxuXHRcdHRvZ2dsZURvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHRhc2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7XG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZSxcblx0XHRwcmlvcml0eSxcblx0XHRpc0RvbmUsXG5cdFx0aWQsXG5cdH0pO1xuXHRyZXR1cm4gdGFzaztcbn1cblxuLy8gSGlkZGVuIGFjdGl2ZSB0YXNrXG5cbmxldCBoaWRkZW5BY3RpdmVUYXNrO1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gdGFzayBwcm9qZWN0IChuZWVkZWQgdG8gZWRpdCB0YXNrKVxuXG5mdW5jdGlvbiBzZXRIaWRkZW5BY3RpdmVUYXNrKHRhc2spIHtcblx0aGlkZGVuQWN0aXZlVGFzayA9IHRhc2s7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHtcblx0YWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdHNldEFjdGl2ZVByb2plY3QsXG5cdGNyZWF0ZVByb2plY3QsXG5cdHBlcnNvbmFsLFxuXHR3b3JrLFxufSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MsIHJlbmRlclByb2plY3RzLCBzZWxlY3RQcm9qZWN0IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgcXVpY2tBZGQsIG5ld1Byb2plY3QgfSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgc2F2ZSwgbG9hZCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuLy8gUmVjcmVhdGVzIGFsbCBQcm9qZWN0cyBhbmQgVGFza3Mgd2l0aCB3b3JraW5nIF9fcHJvdG9fXyBhZnRlciBsb2FkaW5nIGl0IGZyb20gbG9jYWxTdG9yYWdlXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdHByb2plY3RzW2ldID0gY3JlYXRlUHJvamVjdChwcm9qZWN0c1tpXS50aXRsZSwgcHJvamVjdHNbaV0udGFza3MpO1xuXHRmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgYSsrKSB7XG5cdFx0cHJvamVjdHNbaV0udGFza3NbYV0gPSBjcmVhdGVUYXNrKFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0udGl0bGUsXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kZXNjcmlwdGlvbixcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmR1ZURhdGUsXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5wcmlvcml0eSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmlzRG9uZSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmlkXG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGVzIGRlZmF1bHQgXCJQZXJzb25hbFwiIHByb2plY3QgaWYgcHJvamVjdHMgYXJyYXkgaXMgZW1wdHkgd2hlbiBsb2FkaW5nIGFwcFxuaWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0bmV3UHJvamVjdCgnSW5zdHJ1Y3Rpb25zJyk7XG5cdG5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdQcm9qZWN0cycsXG5cdFx0XHQnWW91IGNhbiBjcmVhdGUgbmV3IHByb2plY3RzIGFuZCBlZGl0IHRoZWlyIG5hbWVzIGZyb20gdGhlIFByb2plY3RzIFBhbmVsJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdUYXNrcycsXG5cdFx0XHQnWW91IGNhbiBjcmVhdGUgdGFza3MgZm9yIGVhY2ggcHJvamVjdCB0byBzdGF5IG1vcmUgb3JnYW5pemVkLiBFaXRoZXIgYWRkIGEgdGFzayBxdWlja2x5IG9yIGNsaWNrIG9uIFwiKyBDcmVhdGUgVGFza1wiJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdDb21wbGV0ZSBhbmQgZGVsZXRlIHRhc2tzJyxcblx0XHRcdCdZb3UgY2FuIGFsc28gc2V0IGEgdGFzayB0byBkb25lIG9yIGNvbXBsZXRlbHkgcmVtb3ZlIGEgdGFzayBieSBjbGlja2luZyB0aGUgYnV0dG9ucyBvbiB0aGUgcmVsYXRpdmUgdGFzay4gVHJ5IGl0IG91dCBub3chIGZpcnN0IHNldCB0aGlzIHRhc2sgdG8gZG9uZSBhbmQgdGhlbiBkZWxldGUgaXQuJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdEZXRhaWxzJyxcblx0XHRcdCdJbiB0aGUgcGFuZWwgZnJvbSB3aGljaCB5b3UgYXJlIGN1cnJlbnRseSByZWFkaW5nIHlvdSBjYW4gdmlldyBhbGwgdGhlIGRldGFpbHMgb2YgYSBzZWxlY3RlZCB0YXNrIGFuZCBhbHNvIGVkaXQgaXQuIFRoZSBvbmx5IHJlcXVpcmVkIGZpZWxkIGlzIHRoZSB0aXRsZScsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHQnMCcsXG5cdFx0XHRmYWxzZSxcblx0XHRcdE1hdGgucmFuZG9tKDEpXG5cdFx0KVxuXHQpO1xuXHRwcm9qZWN0c1swXS5hZGRUYXNrKFxuXHRcdGNyZWF0ZVRhc2soXG5cdFx0XHQnRGVsZXRlIGluc3RydWN0aW9ucycsXG5cdFx0XHQnWW91IGFyZSBhbGwgc2V0LiBHbyBhaGVhZCBhbmQgZGVsZXRlIHRoZSBpbnN0cnVjdGlvbnMgcHJvamVjdCBhbmQgc3RhcnQgdXNpbmcgdGhlIHRvZG8gbGlzdCEnLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdClcblx0KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3RzWzBdLnRhc2tzKTtcbn1cblxuLy8gU2V0cyBBY3RpdmUgUHJvamVjdCB0byB0aGUgZmlyc3Qgb25lIGluIHByb2plY3RzIGFycmF5XG5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblxuLy8gUmVuZGVycyBQcm9qZWN0cyB1cG9uIGxvYWRpbmcgdGhlIGFwcFxucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXG4vLyBSZW5kZXJzIFRhc2tzIHVwb24gbG9hZGluZyB0aGUgYXBwXG5yZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblxuLy8gU2VsZWN0cyB0aGUgYWN0aXZlIHByb2plY3QgYW5kIHNob3dzIGl0IG9uIHRoZSBUYXNrcy1QYW5lbFxuc2VsZWN0UHJvamVjdChhY3RpdmVQcm9qZWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==