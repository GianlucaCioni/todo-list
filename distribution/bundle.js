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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n\t\turl(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 87%;\n\tposition: relative;\n\tleft: 0.65em;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n\tpadding: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n#priority-label-one {\n\tcolor: rgb(19, 90, 19);\n}\n#priority-label-two {\n\tcolor: #ffb247;\n}\n#priority-label-three {\n\tcolor: rgb(141, 0, 0);\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\tmax-height: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\tmax-height: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n\t#details-description {\n\t\tmax-height: 10em;\n\t}\n}\n\n@media (max-width: 824px) and (max-height: 415px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'. . .'\n\t\t\t'sidebar task-panel details-panel'\n\t\t\t'. . . ';\n\t}\n\t.panel {\n\t\theight: 80vh;\n\t\twidth: 25vw;\n\t\tmax-height: max-content;\n\t\tmargin-right: 1em;\n\t}\n\t#sidebar {\n\t\theight: 80vh;\n\t\twidth: 25vw;\n\t\tmax-height: max-content;\n\t}\n\t#new-project-input,\n\t#quick-add-input {\n\t\tmax-width: 50%;\n\t}\n\t#create-task-btn {\n\t\twidth: 70%;\n\t\tposition: relative;\n\t\tright: 3em;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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BAA6B;AAC9B;AACA;CACC,yBAAyB;AAC1B;;AAEA;CACC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;;CAEC,yBAAyB;CACzB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;AACA;CACC,qBAAqB;CACrB,kBAAkB;CAClB,kBAAkB;CAClB,SAAS;AACV;AACA;CACC,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC;EACC,kBAAkB;EAClB,YAAY;CACb;AACD;;AAEA;CACC;EACC;;sCAEoC;EACpC,MAAM;CACP;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;CACA;EACC,YAAY;EACZ,uBAAuB;CACxB;CACA;EACC,iBAAiB;EACjB,kBAAkB;CACnB;AACD;;AAEA;CACC;EACC;;;oBAGkB;EAClB,MAAM;CACP;CACA;EACC,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;CACA;EACC,mBAAmB;EACnB,aAAa;EACb,gBAAgB;CACjB;CACA;EACC,gBAAgB;CACjB;AACD;;AAEA;CACC;EACC;;;WAGS;CACV;CACA;EACC,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,iBAAiB;CAClB;CACA;EACC,YAAY;EACZ,WAAW;EACX,uBAAuB;CACxB;CACA;;EAEC,cAAc;CACf;CACA;EACC,UAAU;EACV,kBAAkB;EAClB,UAAU;CACX;AACD","sourcesContent":["@font-face {\n\tfont-family: 'Roboto';\n\tsrc: url('./Roboto-Regular.ttf'), url('./Roboto-Bold.ttf'),\n\t\turl('./Roboto-LightItalic.ttf');\n}\n\nhtml {\n\tbackground-color: #2d3142;\n\tcolor: #fdfffc;\n\tfont-family: Roboto;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'. main .'\n\t\t'. . . ';\n\tscrollbar-color: #ffb855 #2d314249;\n\tscrollbar-width: 0.3em;\n}\n\nbody {\n\tgrid-area: main;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'. . .'\n\t\t'sidebar task-panel details-panel'\n\t\t'. . . ';\n\tbackground-color: #2d3142;\n\theight: 98vh;\n\tborder-radius: 1em;\n\tgap: 1em;\n\twidth: max-content;\n\talign-self: center;\n\tjustify-self: center;\n}\n\nh3 {\n\ttext-align: center;\n}\n\n#sidebar {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tgrid-area: sidebar;\n\tbackground-color: #3e88a3;\n\theight: 60vh;\n\tborder-radius: 1em;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tbox-shadow: 1px 1px 2px black;\n\tmargin: 1.5em 1em;\n}\n\nbutton {\n\tbackground-color: #ffb347;\n\tborder: 0px solid #a54657;\n\tcolor: #2d3142;\n\tborder-radius: 1em;\n\tcursor: pointer;\n}\n.small-btn {\n\tborder-radius: 50%;\n\twidth: 2em;\n\theight: 2em;\n\tfont-size: 0.8em;\n\tpadding: 0;\n}\n.pop-up-btns {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tmargin-top: 1em;\n\twidth: 87%;\n\tposition: relative;\n\tleft: 0.65em;\n}\n\n.pop-up-btn {\n\tpadding: 0.4em 1em;\n}\n\n#create-task-btn {\n\theight: 2em;\n\twidth: 50%;\n\tmargin: -1em 5em 1.2em 5em;\n}\n\n#edit-task-btn {\n\theight: 2em;\n\tpadding: 0 1.5em 0 1.5em;\n}\n\ntextarea,\ninput,\nselect {\n\tbackground-color: rgba(255, 255, 255, 0);\n\tborder: 1px solid #fdfffc;\n\tborder-radius: 1em;\n\tpadding: 0.3em 1em;\n\tcolor: #fdfffc;\n\toutline: none;\n\theight: 1.7em;\n\tmargin: 0.5em;\n\tresize: none;\n}\n\noption {\n\tbackground-color: #3e88a3;\n}\n\n::placeholder {\n\tcolor: #fdfffc9c;\n\topacity: 1; /* Firefox */\n}\n\ninput:focus::placeholder {\n\tcolor: transparent;\n}\n\n#new-project-input,\n#quick-add-input {\n\tmargin-bottom: 0.3em;\n}\n.pop-up-input {\n\twidth: 80%;\n\theight: 2em;\n\tborder-radius: 1em;\n}\n\n#pop-up-description-input {\n\theight: 6em;\n\tpadding: 1em;\n}\n\n#pop-up-priority-input {\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tborder: 1px solid #fdfffc;\n\twidth: 88%;\n\tmargin-left: 0.4em;\n\tborder-radius: 0.8em;\n}\n\n#priority-label-one {\n\tcolor: rgb(19, 90, 19);\n}\n#priority-label-two {\n\tcolor: #ffb247;\n}\n#priority-label-three {\n\tcolor: rgb(141, 0, 0);\n}\n\n.pop-up {\n\tdisplay: none;\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\theight: max-content;\n\twidth: 20em;\n\tbackground-color: #3e88a3;\n\tborder-radius: 1em;\n\tpadding: 1em 1em 1.5em 2em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n.errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\tmargin-bottom: 1em;\n}\n.quick-add-errors {\n\tfont-weight: bold;\n\tcolor: #ffb347;\n\theight: 1.5em;\n\tmargin: 0;\n\tpadding: 0;\n\tposition: relative;\n\tleft: 1em;\n}\n\n#edit-project-popup {\n\tdisplay: none;\n}\n\n.priority-label {\n\tposition: relative;\n\tbottom: 5px;\n}\n\n.panel {\n\theight: 60vh;\n\tbackground-color: #a54657;\n\tmargin: 1.5em 0;\n\tpadding: 0.2em 1em 0.1em 1em;\n\tborder-radius: 1em;\n\twidth: 20em;\n\tbox-shadow: 1px 1px 2px black;\n}\n\n#task-panel {\n\tgrid-area: task-panel;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmax-width: 16em;\n}\n.panel-title {\n\tmargin: 1em 0.7em 0.7em 0.7em;\n}\n#details-panel-wrapper {\n\tgrid-area: details-panel;\n\twidth: 20em;\n}\n#details-panel {\n\tdisplay: none;\n\ttext-align: center;\n}\n#internal-details-panel {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-height: 100%;\n}\n\n#details-title {\n\tmargin-top: 0;\n}\n#details-description {\n\tmax-height: 22em;\n\toverflow: auto;\n\tmargin-bottom: 1em;\n}\n#details-due-date,\n#details-priority {\n\tfont-weight: bold;\n}\n\n#task-details-list,\n#task-list,\n#project-list {\n\toverflow: auto;\n\tmargin-bottom: auto;\n\tmargin-right: -0.3em;\n\tpadding-right: 0.3em;\n}\n\n#task-details-list {\n\tmargin-top: 1em;\n\tmargin-bottom: 0.5em;\n}\n\n.task-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-title {\n\tfont-weight: bold;\n\tposition: relative;\n\ttop: 0.3em;\n}\n\n.project-card {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tbox-shadow: 0 3px 0 0 #fdfffc4b;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\talign-items: center;\n}\n\n#all-tasks-project {\n\tbox-shadow: 0 3px 0 0 #ffb347;\n\tmargin-bottom: 1em;\n\tborder-radius: 1em;\n\theight: 1.7em;\n\ttext-align: center;\n}\n\n.priority-1 {\n\tbox-shadow: 0 3px 0 0 rgba(0, 128, 0, 0.349);\n}\n.priority-2 {\n\tbox-shadow: 0 3px 0 0 #ffb2478e;\n}\n.priority-3 {\n\tbox-shadow: 0 3px 0 0 rgba(141, 0, 0, 0.534);\n}\n\n.task-title-done {\n\ttext-decoration: line-through;\n}\n.task-done {\n\tbackground-color: #834c56;\n}\n\n.task-card:hover {\n\tbackground-color: #b65466;\n\tcursor: pointer;\n}\n\n#all-tasks-project:hover,\n.project-card:hover {\n\tbackground-color: #579cb6;\n\tcursor: pointer;\n}\n\n::-webkit-scrollbar {\n\twidth: 0.3em;\n}\n::-webkit-scrollbar-track {\n\tbackground: #2d314249;\n\tborder-radius: 1em;\n\tposition: relative;\n\tleft: 1em;\n}\n::-webkit-scrollbar-thumb {\n\tbackground: #ffb855;\n\tborder-radius: 1em;\n}\n\n::-webkit-scrollbar-thumb:active {\n\tbackground: #ffab36;\n}\n\n@media (min-width: 1001px) {\n\tbody {\n\t\tposition: relative;\n\t\tright: 1.5em;\n\t}\n}\n\n@media (max-width: 1000px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar sidebar task-panel task-panel'\n\t\t\t'. details-panel details-panel .  ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#sidebar {\n\t\theight: 40vh;\n\t\tmax-height: max-content;\n\t}\n\t#details-description {\n\t\tmax-height: 9.5em;\n\t\tmargin-bottom: 1em;\n\t}\n}\n\n@media (max-width: 635px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'sidebar'\n\t\t\t'task-panel'\n\t\t\t' details-panel ';\n\t\tgap: 0;\n\t}\n\t.panel {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#details-panel-wrapper {\n\t\theight: max-content;\n\t\tmax-width: 16em;\n\t\tmax-height: 25em;\n\t\tmargin: 1em 0;\n\t}\n\t#sidebar {\n\t\theight: max-content;\n\t\tmargin: 1em 0;\n\t\tmax-height: 25em;\n\t}\n\t#details-description {\n\t\tmax-height: 10em;\n\t}\n}\n\n@media (max-width: 824px) and (max-height: 415px) {\n\tbody {\n\t\tgrid-template-areas:\n\t\t\t'. . .'\n\t\t\t'sidebar task-panel details-panel'\n\t\t\t'. . . ';\n\t}\n\t.panel {\n\t\theight: 80vh;\n\t\twidth: 25vw;\n\t\tmax-height: max-content;\n\t\tmargin-right: 1em;\n\t}\n\t#sidebar {\n\t\theight: 80vh;\n\t\twidth: 25vw;\n\t\tmax-height: max-content;\n\t}\n\t#new-project-input,\n\t#quick-add-input {\n\t\tmax-width: 50%;\n\t}\n\t#create-task-btn {\n\t\twidth: 70%;\n\t\tposition: relative;\n\t\tright: 3em;\n\t}\n}\n"],"sourceRoot":""}]);
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
	const key = Object.keys(e.composedPath()[0].dataset)[0];
	const index = parseInt(e.composedPath()[0].dataset[key]);
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

//Toggles a task as "Done"

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
				(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.capitilize)(quickAddInput.value),
				'',
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
	const key = Object.keys(e.composedPath()[0].dataset)[0];
	const index = parseInt(e.composedPath()[0].dataset[key]);
	// Only deletes an empty project without prompt
	if (_project__WEBPACK_IMPORTED_MODULE_0__.projects[index].tasks[0] === undefined) {
		(0,_buttons__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e);
	} else {
		// assigns the "yes" button on the delete project prompt the dataset of the project intended to be deleted
		document.getElementById('delete-project-yes').dataset.event =
			e.composedPath()[0].dataset.deleteProjectBtn;

		document.getElementById('delete-project-prompt').style.display = 'block';
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVkscUJBQXFCLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxNQUFNLE9BQU8sV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQU8sT0FBTyxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLE9BQU8sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUsscUNBQXFDLDBCQUEwQixxR0FBcUcsR0FBRyxVQUFVLDhCQUE4QixtQkFBbUIsd0JBQXdCLGtCQUFrQixvRUFBb0UsdUNBQXVDLDJCQUEyQixHQUFHLFVBQVUsb0JBQW9CLGtCQUFrQiw0RkFBNEYsOEJBQThCLGlCQUFpQix1QkFBdUIsYUFBYSx1QkFBdUIsdUJBQXVCLHlCQUF5QixHQUFHLFFBQVEsdUJBQXVCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLG1DQUFtQyx1QkFBdUIsOEJBQThCLGlCQUFpQix1QkFBdUIsaUNBQWlDLGtDQUFrQyxzQkFBc0IsR0FBRyxZQUFZLDhCQUE4Qiw4QkFBOEIsbUJBQW1CLHVCQUF1QixvQkFBb0IsR0FBRyxjQUFjLHVCQUF1QixlQUFlLGdCQUFnQixxQkFBcUIsZUFBZSxHQUFHLGdCQUFnQixrQkFBa0IsbUNBQW1DLG9CQUFvQixlQUFlLHVCQUF1QixpQkFBaUIsR0FBRyxpQkFBaUIsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixlQUFlLCtCQUErQixHQUFHLG9CQUFvQixnQkFBZ0IsNkJBQTZCLEdBQUcsK0JBQStCLDZDQUE2Qyw4QkFBOEIsdUJBQXVCLHVCQUF1QixtQkFBbUIsa0JBQWtCLGtCQUFrQixrQkFBa0IsaUJBQWlCLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxtQkFBbUIscUJBQXFCLGdCQUFnQixnQkFBZ0IsOEJBQThCLHVCQUF1QixHQUFHLDJDQUEyQyx5QkFBeUIsR0FBRyxpQkFBaUIsZUFBZSxnQkFBZ0IsdUJBQXVCLEdBQUcsK0JBQStCLGdCQUFnQixpQkFBaUIsR0FBRyw0QkFBNEIsa0JBQWtCLGtDQUFrQyw4QkFBOEIsZUFBZSx1QkFBdUIseUJBQXlCLEdBQUcseUJBQXlCLDJCQUEyQixHQUFHLHVCQUF1QixtQkFBbUIsR0FBRyx5QkFBeUIsMEJBQTBCLEdBQUcsYUFBYSxrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxxQ0FBcUMsd0JBQXdCLGdCQUFnQiw4QkFBOEIsdUJBQXVCLCtCQUErQixrQ0FBa0MsR0FBRyxhQUFhLHNCQUFzQixtQkFBbUIsdUJBQXVCLEdBQUcscUJBQXFCLHNCQUFzQixtQkFBbUIsa0JBQWtCLGNBQWMsZUFBZSx1QkFBdUIsY0FBYyxHQUFHLHlCQUF5QixrQkFBa0IsR0FBRyxxQkFBcUIsdUJBQXVCLGdCQUFnQixHQUFHLFlBQVksaUJBQWlCLDhCQUE4QixvQkFBb0IsaUNBQWlDLHVCQUF1QixnQkFBZ0Isa0NBQWtDLEdBQUcsaUJBQWlCLDBCQUEwQixrQkFBa0IsMkJBQTJCLG1DQUFtQyxvQkFBb0IsR0FBRyxnQkFBZ0Isa0NBQWtDLEdBQUcsMEJBQTBCLDZCQUE2QixnQkFBZ0IsR0FBRyxrQkFBa0Isa0JBQWtCLHVCQUF1QixHQUFHLDJCQUEyQixrQkFBa0IsMkJBQTJCLHFCQUFxQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyx3QkFBd0IscUJBQXFCLG1CQUFtQix1QkFBdUIsR0FBRyx5Q0FBeUMsc0JBQXNCLEdBQUcscURBQXFELG1CQUFtQix3QkFBd0IseUJBQXlCLHlCQUF5QixHQUFHLHdCQUF3QixvQkFBb0IseUJBQXlCLEdBQUcsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsb0NBQW9DLHVCQUF1Qix1QkFBdUIsa0JBQWtCLHdCQUF3QixHQUFHLHNCQUFzQixzQkFBc0IsdUJBQXVCLGVBQWUsR0FBRyxtQkFBbUIsa0JBQWtCLG1DQUFtQyxvQ0FBb0MsdUJBQXVCLHVCQUF1QixrQkFBa0Isd0JBQXdCLEdBQUcsd0JBQXdCLGtDQUFrQyx1QkFBdUIsdUJBQXVCLGtCQUFrQix1QkFBdUIsR0FBRyxpQkFBaUIsaURBQWlELEdBQUcsZUFBZSxvQ0FBb0MsR0FBRyxlQUFlLGlEQUFpRCxHQUFHLHNCQUFzQixrQ0FBa0MsR0FBRyxjQUFjLDhCQUE4QixHQUFHLHNCQUFzQiw4QkFBOEIsb0JBQW9CLEdBQUcsb0RBQW9ELDhCQUE4QixvQkFBb0IsR0FBRyx5QkFBeUIsaUJBQWlCLEdBQUcsNkJBQTZCLDBCQUEwQix1QkFBdUIsdUJBQXVCLGNBQWMsR0FBRyw2QkFBNkIsd0JBQXdCLHVCQUF1QixHQUFHLHNDQUFzQyx3QkFBd0IsR0FBRyxnQ0FBZ0MsVUFBVSx5QkFBeUIsbUJBQW1CLEtBQUssR0FBRyxnQ0FBZ0MsVUFBVSxxSEFBcUgsYUFBYSxLQUFLLFlBQVksbUJBQW1CLDhCQUE4QixLQUFLLGNBQWMsbUJBQW1CLDhCQUE4QixLQUFLLDBCQUEwQix3QkFBd0IseUJBQXlCLEtBQUssR0FBRywrQkFBK0IsVUFBVSx5RkFBeUYsYUFBYSxLQUFLLFlBQVksMEJBQTBCLHNCQUFzQix1QkFBdUIsb0JBQW9CLEtBQUssNEJBQTRCLDBCQUEwQixzQkFBc0IsdUJBQXVCLG9CQUFvQixLQUFLLGNBQWMsMEJBQTBCLG9CQUFvQix1QkFBdUIsS0FBSywwQkFBMEIsdUJBQXVCLEtBQUssR0FBRyx1REFBdUQsVUFBVSxvR0FBb0csS0FBSyxZQUFZLG1CQUFtQixrQkFBa0IsOEJBQThCLHdCQUF3QixLQUFLLGNBQWMsbUJBQW1CLGtCQUFrQiw4QkFBOEIsS0FBSyw2Q0FBNkMscUJBQXFCLEtBQUssc0JBQXNCLGlCQUFpQix5QkFBeUIsaUJBQWlCLEtBQUssR0FBRyxxQkFBcUI7QUFDejJpQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsa0NBQWtDOztBQUVsQyw4QkFBOEI7O0FBRTlCLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3Uyx1Q0FBdUMsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sb0JBQW9COztBQUV6Syx5Q0FBeUMsMEdBQTBHLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLHVDQUF1QyxjQUFjLFdBQVcsWUFBWSxVQUFVLE1BQU0sbURBQW1ELFVBQVUsc0JBQXNCOztBQUVuZixnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDbkNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSwyRkFBYyxHQUFHLDJGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNoR2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMa0I7QUFDNEQ7QUFXeEQ7QUFDZ0I7QUFTcEM7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxzREFBYTs7QUFFbkU7QUFDQTtBQUNBLDREQUE0RCxzREFBYTs7QUFFekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQywyREFBa0I7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBYSxDQUFDLDBEQUFhLENBQUMsbURBQVU7QUFDdkMsQ0FBQyxtREFBSSxDQUFDLGlEQUFRO0FBQ2QsQ0FBQyw0REFBbUIsQ0FBQyxpREFBUSxDQUFDLHdEQUFlO0FBQzdDLENBQUMsdURBQWMsQ0FBQyxpREFBUTtBQUN4QixDQUFDLHVEQUFjO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxxRUFBNEI7QUFDN0IsQ0FBQyxtREFBSSxDQUFDLGlEQUFRO0FBQ2QsQ0FBQyx1REFBYyxDQUFDLGlEQUFRO0FBQ3hCLENBQUMsdURBQWM7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsdURBQWM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IseURBQWdCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyw0REFBc0I7QUFDekI7QUFDQSxHQUFHLGtFQUE0QjtBQUMvQjtBQUNBLEdBQUcsOERBQXdCO0FBQzNCLGdCQUFnQixzREFBZ0I7QUFDaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IsaURBQVE7QUFDeEI7QUFDQSxFQUFFLG1FQUFzQixDQUFDLGlEQUFRO0FBQ2pDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0RBQWdCLEtBQUssNERBQW1CO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLENBQUMsaUVBQXdCLENBQUMsNERBQW1CO0FBQzdDLENBQUMsb0RBQVcsQ0FBQyw0REFBbUI7QUFDaEMsQ0FBQyxtREFBSSxDQUFDLGlEQUFRO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLEtBQUssNERBQW1CO0FBQ3hCLGFBQWEsNERBQW1CO0FBQ2hDLEVBQUUseURBQWdCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzREFBYSxLQUFLLGlEQUFRO0FBQy9CO0FBQ0E7QUFDQSxLQUFLLDZEQUFnQixDQUFDLGlEQUFRO0FBQzlCLEtBQUssNkRBQWdCLENBQUMsaURBQVE7QUFDOUI7QUFDQSxDQUFDLDBEQUFhO0FBQ2QsQ0FBQyxtREFBSSxDQUFDLGlEQUFRO0FBQ2QsQ0FBQyx1REFBYyxDQUFDLGlEQUFRO0FBQ3hCLENBQUMsc0RBQWE7QUFDZCxJQUFJLDREQUFtQixDQUFDLHNEQUFhO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDREQUFtQjtBQUNqQztBQUNBO0FBQ0EsRUFBRSw4REFBcUI7QUFDdkIsRUFBRSxpRUFBd0I7QUFDMUIsR0FBRztBQUNILGtCQUFrQixJQUFJLG1FQUEwQixFQUFFO0FBQ2xELE9BQU8sNERBQW1CO0FBQzFCLElBQUksaUVBQXdCO0FBQzVCLG1CQUFtQiw0REFBbUI7QUFDdEMsS0FBSyxtRUFBMEI7QUFDL0IsTUFBTTtBQUNOLEtBQUssbUVBQTBCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9EQUFXLENBQUMsNERBQW1CO0FBQ2hDLENBQUMsbURBQUksQ0FBQyxpREFBUTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkRBQWtCO0FBQ25CLEtBQUssNERBQW1CO0FBQ3hCO0FBQ0EsT0FBTyxvREFBVztBQUNsQjtBQUNBLElBQUksNkRBQWdCLENBQUMsb0RBQVc7QUFDaEM7QUFDQSxnQkFBZ0Isb0RBQVU7QUFDMUIsSUFBSSxtREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxtREFBSSxDQUFDLGlEQUFRO0FBQ2hCLEdBQUcsb0RBQVc7QUFDZCxHQUFHLHVEQUFjO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyw0REFBbUI7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDREQUFtQjtBQUN4QixNQUFNLG9EQUFXO0FBQ2pCO0FBQ0EsR0FBRyw2REFBZ0IsQ0FBQyxvREFBVztBQUMvQjtBQUNBLGVBQWUsb0RBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbURBQUksQ0FBQyxpREFBUTtBQUNmLEVBQUUsb0RBQVc7QUFDYixFQUFFLDBEQUFpQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxnRUFBMEI7QUFDM0IsQ0FBQyxzRUFBZ0M7QUFDakMsQ0FBQyxrRUFBNEI7QUFDN0IsQ0FBQyxtRUFBNkI7QUFDOUIsQ0FBQyxtREFBSSxDQUFDLGlEQUFRO0FBQ2QsQ0FBQyxvREFBVztBQUNaLENBQUMsMERBQWlCLENBQUMsc0RBQWdCO0FBQ25DOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLDBEQUFhLGNBQWMsZ0VBQW1CO0FBQ3ZFLENBQUMsNERBQW1CO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VUU7QUFNaUI7QUFPQTtBQUMwQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0EsaUJBQWlCLHVEQUFhLHdCQUF3QiwwREFBb0I7QUFDMUUsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxzREFBZ0I7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQywwREFBZ0I7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdURBQWEsd0JBQXdCLG9EQUFjO0FBQ3BFLG1CQUFtQix1REFBYSx3QkFBd0IsZ0RBQVU7QUFDbEU7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxpQkFBaUI7QUFDbEUsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQywwREFBbUI7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxLQUFLO0FBQ2hELDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx5REFBbUI7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHlEQUFtQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDhDQUFRO0FBQ2IsRUFBRSx1REFBYTtBQUNmLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9Qb0Q7QUFDOUI7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkU7QUFDb0M7QUFDRjtBQUNHOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1EQUFJOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsaURBQVU7QUFDYjtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFFNkQ7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDYztBQVFqQjtBQUNnRDtBQUNsQjtBQUNMOztBQUU1QztBQUNBLGdCQUFnQixJQUFJLHFEQUFlLEVBQUU7QUFDckMsQ0FBQyw4Q0FBUSxNQUFNLHVEQUFhLENBQUMsOENBQVEsV0FBVyw4Q0FBUTtBQUN4RCxpQkFBaUIsSUFBSSw4Q0FBUSxrQkFBa0I7QUFDL0MsRUFBRSw4Q0FBUSxlQUFlLGlEQUFVO0FBQ25DLEdBQUcsOENBQVE7QUFDWCxHQUFHLDhDQUFRO0FBQ1gsR0FBRyw4Q0FBUTtBQUNYLEdBQUcsOENBQVE7QUFDWCxHQUFHLDhDQUFRO0FBQ1gsR0FBRyw4Q0FBUTtBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksaURBQVc7QUFDZixDQUFDLG9EQUFVO0FBQ1gsQ0FBQyxvREFBVTtBQUNYLENBQUMseURBQW1CO0FBQ3BCLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx5REFBbUI7QUFDcEIsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHlEQUFtQjtBQUNwQixFQUFFLGlEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMseURBQW1CO0FBQ3BCLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx5REFBbUI7QUFDcEIsRUFBRSxpREFBVTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG1EQUFJLENBQUMsOENBQVE7QUFDZCxDQUFDLGlEQUFXLENBQUMsdURBQWlCO0FBQzlCOztBQUVBO0FBQ0EsMERBQWdCLENBQUMsaURBQVc7O0FBRTVCO0FBQ0Esb0RBQWMsQ0FBQyw4Q0FBUTs7QUFFdkI7QUFDQSxpREFBVyxDQUFDLHlEQUFtQjs7QUFFL0I7QUFDQSxtREFBYSxDQUFDLG1EQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYnV0dG9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tTGlnaHRJdGFsaWMudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byc7XFxuXFx0c3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpLFxcblxcdFxcdHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxufVxcblxcbmh0bWwge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0Y29sb3I6ICNmZGZmZmM7XFxuXFx0Zm9udC1mYW1pbHk6IFJvYm90bztcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0Jy4gLiAuJ1xcblxcdFxcdCcuIG1haW4gLidcXG5cXHRcXHQnLiAuIC4gJztcXG5cXHRzY3JvbGxiYXItY29sb3I6ICNmZmI4NTUgIzJkMzE0MjQ5O1xcblxcdHNjcm9sbGJhci13aWR0aDogMC4zZW07XFxufVxcblxcbmJvZHkge1xcblxcdGdyaWQtYXJlYTogbWFpbjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0Jy4gLiAuJ1xcblxcdFxcdCdzaWRlYmFyIHRhc2stcGFuZWwgZGV0YWlscy1wYW5lbCdcXG5cXHRcXHQnLiAuIC4gJztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMTQyO1xcblxcdGhlaWdodDogOTh2aDtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Z2FwOiAxZW07XFxuXFx0d2lkdGg6IG1heC1jb250ZW50O1xcblxcdGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuaDMge1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Z3JpZC1hcmVhOiBzaWRlYmFyO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAwLjJlbSAxZW0gMC4xZW0gMWVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcblxcdG1hcmdpbjogMS41ZW0gMWVtO1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmIzNDc7XFxuXFx0Ym9yZGVyOiAwcHggc29saWQgI2E1NDY1NztcXG5cXHRjb2xvcjogIzJkMzE0MjtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc21hbGwtYnRuIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0d2lkdGg6IDJlbTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRmb250LXNpemU6IDAuOGVtO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcbi5wb3AtdXAtYnRucyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcblxcdHdpZHRoOiA4NyU7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGxlZnQ6IDAuNjVlbTtcXG59XFxuXFxuLnBvcC11cC1idG4ge1xcblxcdHBhZGRpbmc6IDAuNGVtIDFlbTtcXG59XFxuXFxuI2NyZWF0ZS10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRtYXJnaW46IC0xZW0gNWVtIDEuMmVtIDVlbTtcXG59XFxuXFxuI2VkaXQtdGFzay1idG4ge1xcblxcdGhlaWdodDogMmVtO1xcblxcdHBhZGRpbmc6IDAgMS41ZW0gMCAxLjVlbTtcXG59XFxuXFxudGV4dGFyZWEsXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkICNmZGZmZmM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuM2VtIDFlbTtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0bWFyZ2luOiAwLjVlbTtcXG5cXHRyZXNpemU6IG5vbmU7XFxufVxcblxcbm9wdGlvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6ICNmZGZmZmM5YztcXG5cXHRvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbmlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuXFx0Y29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmV3LXByb2plY3QtaW5wdXQsXFxuI3F1aWNrLWFkZC1pbnB1dCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcbi5wb3AtdXAtaW5wdXQge1xcblxcdHdpZHRoOiA4MCU7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG4jcG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDZlbTtcXG5cXHRwYWRkaW5nOiAxZW07XFxufVxcblxcbiNwb3AtdXAtcHJpb3JpdHktaW5wdXQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHR3aWR0aDogODglO1xcblxcdG1hcmdpbi1sZWZ0OiAwLjRlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuI3ByaW9yaXR5LWxhYmVsLW9uZSB7XFxuXFx0Y29sb3I6IHJnYigxOSwgOTAsIDE5KTtcXG59XFxuI3ByaW9yaXR5LWxhYmVsLXR3byB7XFxuXFx0Y29sb3I6ICNmZmIyNDc7XFxufVxcbiNwcmlvcml0eS1sYWJlbC10aHJlZSB7XFxuXFx0Y29sb3I6IHJnYigxNDEsIDAsIDApO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwYWRkaW5nOiAxZW0gMWVtIDEuNWVtIDJlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuLmVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4ucXVpY2stYWRkLWVycm9ycyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0Y29sb3I6ICNmZmIzNDc7XFxuXFx0aGVpZ2h0OiAxLjVlbTtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG5cXG4jZWRpdC1wcm9qZWN0LXBvcHVwIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucHJpb3JpdHktbGFiZWwge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRib3R0b206IDVweDtcXG59XFxuXFxuLnBhbmVsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2E1NDY1NztcXG5cXHRtYXJnaW46IDEuNWVtIDA7XFxuXFx0cGFkZGluZzogMC4yZW0gMWVtIDAuMWVtIDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0d2lkdGg6IDIwZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxufVxcblxcbiN0YXNrLXBhbmVsIHtcXG5cXHRncmlkLWFyZWE6IHRhc2stcGFuZWw7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXgtd2lkdGg6IDE2ZW07XFxufVxcbi5wYW5lbC10aXRsZSB7XFxuXFx0bWFyZ2luOiAxZW0gMC43ZW0gMC43ZW0gMC43ZW07XFxufVxcbiNkZXRhaWxzLXBhbmVsLXdyYXBwZXIge1xcblxcdGdyaWQtYXJlYTogZGV0YWlscy1wYW5lbDtcXG5cXHR3aWR0aDogMjBlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jaW50ZXJuYWwtZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNkZXRhaWxzLXRpdGxlIHtcXG5cXHRtYXJnaW4tdG9wOiAwO1xcbn1cXG4jZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0bWF4LWhlaWdodDogMjJlbTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbiNkZXRhaWxzLWR1ZS1kYXRlLFxcbiNkZXRhaWxzLXByaW9yaXR5IHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0LFxcbiN0YXNrLWxpc3QsXFxuI3Byb2plY3QtbGlzdCB7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0bWFyZ2luLWJvdHRvbTogYXV0bztcXG5cXHRtYXJnaW4tcmlnaHQ6IC0wLjNlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjNlbTtcXG59XFxuXFxuI3Rhc2stZGV0YWlscy1saXN0IHtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi50YXNrLWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtdGl0bGUge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IDAuM2VtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgI2ZkZmZmYzRiO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Qge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMzQ3O1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcmlvcml0eS0xIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgwLCAxMjgsIDAsIDAuMzQ5KTtcXG59XFxuLnByaW9yaXR5LTIge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmZiMjQ3OGU7XFxufVxcbi5wcmlvcml0eS0zIHtcXG5cXHRib3gtc2hhZG93OiAwIDNweCAwIDAgcmdiYSgxNDEsIDAsIDAsIDAuNTM0KTtcXG59XFxuXFxuLnRhc2stdGl0bGUtZG9uZSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi50YXNrLWRvbmUge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICM4MzRjNTY7XFxufVxcblxcbi50YXNrLWNhcmQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiNjU0NjY7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYWxsLXRhc2tzLXByb2plY3Q6aG92ZXIsXFxuLnByb2plY3QtY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzU3OWNiNjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdHdpZHRoOiAwLjNlbTtcXG59XFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuXFx0YmFja2dyb3VuZDogIzJkMzE0MjQ5O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMWVtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG5cXHRiYWNrZ3JvdW5kOiAjZmZiODU1O1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xcblxcdGJhY2tncm91bmQ6ICNmZmFiMzY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAxcHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0XFx0cmlnaHQ6IDEuNWVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXIgc2lkZWJhciB0YXNrLXBhbmVsIHRhc2stcGFuZWwnXFxuXFx0XFx0XFx0Jy4gZGV0YWlscy1wYW5lbCBkZXRhaWxzLXBhbmVsIC4gICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogNDB2aDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdFxcdG1heC1oZWlnaHQ6IDkuNWVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG5cXHR9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzVweCkge1xcblxcdGJvZHkge1xcblxcdFxcdGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuXFx0XFx0XFx0J3NpZGViYXInXFxuXFx0XFx0XFx0J3Rhc2stcGFuZWwnXFxuXFx0XFx0XFx0JyBkZXRhaWxzLXBhbmVsICc7XFxuXFx0XFx0Z2FwOiAwO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFx0XFx0bWF4LXdpZHRoOiAxNmVtO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0XFx0bWFyZ2luOiAxZW0gMDtcXG5cXHR9XFxuXFx0I2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IDI1ZW07XFxuXFx0fVxcblxcdCNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAxMGVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgyNHB4KSBhbmQgKG1heC1oZWlnaHQ6IDQxNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnLiAuIC4nXFxuXFx0XFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdFxcdCcuIC4gLiAnO1xcblxcdH1cXG5cXHQucGFuZWwge1xcblxcdFxcdGhlaWdodDogODB2aDtcXG5cXHRcXHR3aWR0aDogMjV2dztcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDFlbTtcXG5cXHR9XFxuXFx0I3NpZGViYXIge1xcblxcdFxcdGhlaWdodDogODB2aDtcXG5cXHRcXHR3aWR0aDogMjV2dztcXG5cXHRcXHRtYXgtaGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHR9XFxuXFx0I25ldy1wcm9qZWN0LWlucHV0LFxcblxcdCNxdWljay1hZGQtaW5wdXQge1xcblxcdFxcdG1heC13aWR0aDogNTAlO1xcblxcdH1cXG5cXHQjY3JlYXRlLXRhc2stYnRuIHtcXG5cXHRcXHR3aWR0aDogNzAlO1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRyaWdodDogM2VtO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxxQkFBcUI7Q0FDckI7eUNBQ2dDO0FBQ2pDOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiOzs7VUFHUztDQUNULGtDQUFrQztDQUNsQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsYUFBYTtDQUNiOzs7VUFHUztDQUNULHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xC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ZixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7Q0FDQTtFQUNDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7QUFDRDs7QUFFQTtDQUNDO0VBQ0M7OztXQUdTO0NBQ1Y7Q0FDQTtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7Q0FDeEI7Q0FDQTs7RUFFQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVTtDQUNYO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcblxcdHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpLCB1cmwoJy4vUm9ib3RvLUJvbGQudHRmJyksXFxuXFx0XFx0dXJsKCcuL1JvYm90by1MaWdodEl0YWxpYy50dGYnKTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG5cXHRjb2xvcjogI2ZkZmZmYztcXG5cXHRmb250LWZhbWlseTogUm9ib3RvO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0Jy4gbWFpbiAuJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdHNjcm9sbGJhci1jb2xvcjogI2ZmYjg1NSAjMmQzMTQyNDk7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiAwLjNlbTtcXG59XFxuXFxuYm9keSB7XFxuXFx0Z3JpZC1hcmVhOiBtYWluO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHQnLiAuIC4nXFxuXFx0XFx0J3NpZGViYXIgdGFzay1wYW5lbCBkZXRhaWxzLXBhbmVsJ1xcblxcdFxcdCcuIC4gLiAnO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuXFx0aGVpZ2h0OiA5OHZoO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRnYXA6IDFlbTtcXG5cXHR3aWR0aDogbWF4LWNvbnRlbnQ7XFxuXFx0YWxpZ24tc2VsZjogY2VudGVyO1xcblxcdGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG5oMyB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRncmlkLWFyZWE6IHNpZGViYXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzNlODhhMztcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDAuMmVtIDFlbSAwLjFlbSAxZW07XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XFxuXFx0bWFyZ2luOiAxLjVlbSAxZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmYjM0NztcXG5cXHRib3JkZXI6IDBweCBzb2xpZCAjYTU0NjU3O1xcblxcdGNvbG9yOiAjMmQzMTQyO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5zbWFsbC1idG4ge1xcblxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXG5cXHR3aWR0aDogMmVtO1xcblxcdGhlaWdodDogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44ZW07XFxuXFx0cGFkZGluZzogMDtcXG59XFxuLnBvcC11cC1idG5zIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRtYXJnaW4tdG9wOiAxZW07XFxuXFx0d2lkdGg6IDg3JTtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bGVmdDogMC42NWVtO1xcbn1cXG5cXG4ucG9wLXVwLWJ0biB7XFxuXFx0cGFkZGluZzogMC40ZW0gMWVtO1xcbn1cXG5cXG4jY3JlYXRlLXRhc2stYnRuIHtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHR3aWR0aDogNTAlO1xcblxcdG1hcmdpbjogLTFlbSA1ZW0gMS4yZW0gNWVtO1xcbn1cXG5cXG4jZWRpdC10YXNrLWJ0biB7XFxuXFx0aGVpZ2h0OiAyZW07XFxuXFx0cGFkZGluZzogMCAxLjVlbSAwIDEuNWVtO1xcbn1cXG5cXG50ZXh0YXJlYSxcXG5pbnB1dCxcXG5zZWxlY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgI2ZkZmZmYztcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxuXFx0cGFkZGluZzogMC4zZW0gMWVtO1xcblxcdGNvbG9yOiAjZmRmZmZjO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0aGVpZ2h0OiAxLjdlbTtcXG5cXHRtYXJnaW46IDAuNWVtO1xcblxcdHJlc2l6ZTogbm9uZTtcXG59XFxuXFxub3B0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4OGEzO1xcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogI2ZkZmZmYzljO1xcblxcdG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cXG59XFxuXFxuaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG5cXHRjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuZXctcHJvamVjdC1pbnB1dCxcXG4jcXVpY2stYWRkLWlucHV0IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XFxuLnBvcC11cC1pbnB1dCB7XFxuXFx0d2lkdGg6IDgwJTtcXG5cXHRoZWlnaHQ6IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbiNwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQge1xcblxcdGhlaWdodDogNmVtO1xcblxcdHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuI3BvcC11cC1wcmlvcml0eS1pbnB1dCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCAjZmRmZmZjO1xcblxcdHdpZHRoOiA4OCU7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNGVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbn1cXG5cXG4jcHJpb3JpdHktbGFiZWwtb25lIHtcXG5cXHRjb2xvcjogcmdiKDE5LCA5MCwgMTkpO1xcbn1cXG4jcHJpb3JpdHktbGFiZWwtdHdvIHtcXG5cXHRjb2xvcjogI2ZmYjI0NztcXG59XFxuI3ByaW9yaXR5LWxhYmVsLXRocmVlIHtcXG5cXHRjb2xvcjogcmdiKDE0MSwgMCwgMCk7XFxufVxcblxcbi5wb3AtdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdHdpZHRoOiAyMGVtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMzZTg4YTM7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBhZGRpbmc6IDFlbSAxZW0gMS41ZW0gMmVtO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrO1xcbn1cXG5cXG4uZXJyb3JzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogI2ZmYjM0NztcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5xdWljay1hZGQtZXJyb3JzIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogI2ZmYjM0NztcXG5cXHRoZWlnaHQ6IDEuNWVtO1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxZW07XFxufVxcblxcbiNlZGl0LXByb2plY3QtcG9wdXAge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eS1sYWJlbCB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGJvdHRvbTogNXB4O1xcbn1cXG5cXG4ucGFuZWwge1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYTU0NjU3O1xcblxcdG1hcmdpbjogMS41ZW0gMDtcXG5cXHRwYWRkaW5nOiAwLjJlbSAxZW0gMC4xZW0gMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHR3aWR0aDogMjBlbTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDJweCBibGFjaztcXG59XFxuXFxuI3Rhc2stcGFuZWwge1xcblxcdGdyaWQtYXJlYTogdGFzay1wYW5lbDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1heC13aWR0aDogMTZlbTtcXG59XFxuLnBhbmVsLXRpdGxlIHtcXG5cXHRtYXJnaW46IDFlbSAwLjdlbSAwLjdlbSAwLjdlbTtcXG59XFxuI2RldGFpbHMtcGFuZWwtd3JhcHBlciB7XFxuXFx0Z3JpZC1hcmVhOiBkZXRhaWxzLXBhbmVsO1xcblxcdHdpZHRoOiAyMGVtO1xcbn1cXG4jZGV0YWlscy1wYW5lbCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNpbnRlcm5hbC1kZXRhaWxzLXBhbmVsIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuI2RldGFpbHMtdGl0bGUge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbiNkZXRhaWxzLWRlc2NyaXB0aW9uIHtcXG5cXHRtYXgtaGVpZ2h0OiAyMmVtO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcblxcdG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuI2RldGFpbHMtZHVlLWRhdGUsXFxuI2RldGFpbHMtcHJpb3JpdHkge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLWxpc3QsXFxuI3Rhc2stbGlzdCxcXG4jcHJvamVjdC1saXN0IHtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRtYXJnaW4tYm90dG9tOiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogLTAuM2VtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xcbn1cXG5cXG4jdGFzay1kZXRhaWxzLWxpc3Qge1xcblxcdG1hcmdpbi10b3A6IDFlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLnRhc2stY2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZGZmZmM0YjtcXG5cXHRtYXJnaW4tYm90dG9tOiAxZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdGhlaWdodDogMS43ZW07XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FsbC10YXNrcy10aXRsZSB7XFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHRvcDogMC4zZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCAjZmRmZmZjNGI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtcHJvamVjdCB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZmIzNDc7XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDFlbTtcXG5cXHRoZWlnaHQ6IDEuN2VtO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnByaW9yaXR5LTEge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCByZ2JhKDAsIDEyOCwgMCwgMC4zNDkpO1xcbn1cXG4ucHJpb3JpdHktMiB7XFxuXFx0Ym94LXNoYWRvdzogMCAzcHggMCAwICNmZmIyNDc4ZTtcXG59XFxuLnByaW9yaXR5LTMge1xcblxcdGJveC1zaGFkb3c6IDAgM3B4IDAgMCByZ2JhKDE0MSwgMCwgMCwgMC41MzQpO1xcbn1cXG5cXG4udGFzay10aXRsZS1kb25lIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnRhc2stZG9uZSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzgzNGM1NjtcXG59XFxuXFxuLnRhc2stY2FyZDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2I2NTQ2NjtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNhbGwtdGFza3MtcHJvamVjdDpob3ZlcixcXG4ucHJvamVjdC1jYXJkOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTc5Y2I2O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0d2lkdGg6IDAuM2VtO1xcbn1cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG5cXHRiYWNrZ3JvdW5kOiAjMmQzMTQyNDk7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRsZWZ0OiAxZW07XFxufVxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcblxcdGJhY2tncm91bmQ6ICNmZmI4NTU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMWVtO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuXFx0YmFja2dyb3VuZDogI2ZmYWIzNjtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xcblxcdGJvZHkge1xcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRcXHRyaWdodDogMS41ZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhciBzaWRlYmFyIHRhc2stcGFuZWwgdGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnLiBkZXRhaWxzLXBhbmVsIGRldGFpbHMtcGFuZWwgLiAgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA0MHZoO1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjZGV0YWlscy1kZXNjcmlwdGlvbiB7XFxuXFx0XFx0bWF4LWhlaWdodDogOS41ZW07XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYzNXB4KSB7XFxuXFx0Ym9keSB7XFxuXFx0XFx0Z3JpZC10ZW1wbGF0ZS1hcmVhczpcXG5cXHRcXHRcXHQnc2lkZWJhcidcXG5cXHRcXHRcXHQndGFzay1wYW5lbCdcXG5cXHRcXHRcXHQnIGRldGFpbHMtcGFuZWwgJztcXG5cXHRcXHRnYXA6IDA7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiBtYXgtY29udGVudDtcXG5cXHRcXHRtYXgtd2lkdGg6IDE2ZW07XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHRcXHRtYXJnaW46IDFlbSAwO1xcblxcdH1cXG5cXHQjZGV0YWlscy1wYW5lbC13cmFwcGVyIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1heC13aWR0aDogMTZlbTtcXG5cXHRcXHRtYXgtaGVpZ2h0OiAyNWVtO1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0fVxcblxcdCNzaWRlYmFyIHtcXG5cXHRcXHRoZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1hcmdpbjogMWVtIDA7XFxuXFx0XFx0bWF4LWhlaWdodDogMjVlbTtcXG5cXHR9XFxuXFx0I2RldGFpbHMtZGVzY3JpcHRpb24ge1xcblxcdFxcdG1heC1oZWlnaHQ6IDEwZW07XFxuXFx0fVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODI0cHgpIGFuZCAobWF4LWhlaWdodDogNDE1cHgpIHtcXG5cXHRib2R5IHtcXG5cXHRcXHRncmlkLXRlbXBsYXRlLWFyZWFzOlxcblxcdFxcdFxcdCcuIC4gLidcXG5cXHRcXHRcXHQnc2lkZWJhciB0YXNrLXBhbmVsIGRldGFpbHMtcGFuZWwnXFxuXFx0XFx0XFx0Jy4gLiAuICc7XFxuXFx0fVxcblxcdC5wYW5lbCB7XFxuXFx0XFx0aGVpZ2h0OiA4MHZoO1xcblxcdFxcdHdpZHRoOiAyNXZ3O1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdFxcdG1hcmdpbi1yaWdodDogMWVtO1xcblxcdH1cXG5cXHQjc2lkZWJhciB7XFxuXFx0XFx0aGVpZ2h0OiA4MHZoO1xcblxcdFxcdHdpZHRoOiAyNXZ3O1xcblxcdFxcdG1heC1oZWlnaHQ6IG1heC1jb250ZW50O1xcblxcdH1cXG5cXHQjbmV3LXByb2plY3QtaW5wdXQsXFxuXFx0I3F1aWNrLWFkZC1pbnB1dCB7XFxuXFx0XFx0bWF4LXdpZHRoOiA1MCU7XFxuXFx0fVxcblxcdCNjcmVhdGUtdGFzay1idG4ge1xcblxcdFxcdHdpZHRoOiA3MCU7XFxuXFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdFxcdHJpZ2h0OiAzZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuXHRyZW5kZXJQcm9qZWN0cyxcblx0cmVuZGVyVGFza3MsXG5cdHJlc2V0VGV4dElucHV0LFxuXHRjcmVhdGVEb21FbGVtZW50LFxuXHRyZW5kZXJUYXNrRGV0YWlscyxcblx0cG9wVXBGb3JtVmFsaWRhdGlvbixcblx0cmVuZGVyQWN0aXZlUHJvamVjdCxcblx0Y2FwaXRpbGl6ZSxcblx0cXVpY2tBZGRWYWxpZGF0aW9uLFxufSBmcm9tICcuL2RvbS5qcyc7XG5pbXBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBjcmVhdGVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCB7XG5cdGFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRjcmVhdGVQcm9qZWN0LFxuXHRyZW1vdmVQcm9qZWN0LFxuXHRzZXRIaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRoaWRkZW5BY3RpdmVQcm9qZWN0LFxuXHRzZXRBY3RpdmVQcm9qZWN0LFxuXHRhbGxUYXNrc1Byb2plY3QsXG5cdGNyZWF0ZUFsbFRhc2tzQXJyYXksXG59IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBzYXZlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuZXhwb3J0IHtcblx0bmV3UHJvamVjdCxcblx0cXVpY2tBZGQsXG5cdGNyZWF0ZUNhcmRCdG4sXG5cdGRlbGV0ZVRhc2ssXG5cdHRvZ2dsZVRhc2tEb25lLFxuXHRkZWxldGVQcm9qZWN0LFxuXHRzaG93RWRpdFByb2plY3RQb3BVcCxcbn07XG5cbi8vIENyZWF0ZSBUYXNrcyBidXR0b24gb3BlbnMgcG9wLXVwIGFuZCBhbGxvd3MgYSBmdWxsIHRhc2sgdG8gYmUgYWRkZWRcbmNvbnN0IGNyZWF0ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXRhc2stYnRuJyk7XG5jcmVhdGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Rhc2tQb3BVcCgnQ3JlYXRlIE5ldyBUYXNrJykpO1xuXG4vLyBRdWlja2x5IGFkZCBhIHRhc2sgd2l0aCBvbmx5IHRoZSB0aXRsZSwgYnV0IG5vIG90aGVyIGluZm9ybWF0aW9uXG5jb25zdCBxdWlja0FkZElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aWNrLWFkZC1pbnB1dCcpO1xuY29uc3QgcXVpY2tBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpY2stYWRkLWJ0bicpO1xucXVpY2tBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gcXVpY2tBZGQoYWN0aXZlUHJvamVjdCwgZSkpO1xuXG4vLyBBZGQgYSB0YXNrIHdpdGggdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWUgZGF0ZSBhbmQgcHJpb3JpdHlcbmNvbnN0IGZ1bGxBZGRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnVsbC1hZGQtYnRuJyk7XG5mdWxsQWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlT3JFZGl0VGFzayhhY3RpdmVQcm9qZWN0KSk7XG5cbi8vIENhbmNlbCBuZXcvZWRpdCB0YXNrIHBvcC11cFxuY29uc3QgdGFza1BvcFVwQ2FuY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1mdWxsLWFkZC1idG4nKTtcbnRhc2tQb3BVcENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGhpZGVQb3BVcCgndGFzay1wb3B1cCcpKTtcbi8vIE9wZW5zIGVkaXQgdGFzayBwb3AtdXBcbmNvbnN0IGVkaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdGFzay1idG4nKTtcbmVkaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1Rhc2tQb3BVcCgnRWRpdCBUYXNrJykpO1xuXG4vLyBBZGQgYSBuZXcgUHJvamVjdFxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWlucHV0Jyk7XG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0LWJ0bicpO1xubmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PlxuXHRxdWlja0FkZFByb2plY3QobmV3UHJvamVjdElucHV0LnZhbHVlLCBlKVxuKTtcblxuLy8gUG9wLXVwIGNvbmZpcm1hdGlvbiB0byBkZWxldGUgYSBwcm9qZWN0XG5jb25zdCBjYW5jZWxQcm9qZWN0WWVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LXllcycpO1xuY2FuY2VsUHJvamVjdFllc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVQcm9qZWN0KGUpKTtcblxuY29uc3QgY2FuY2VsUHJvamVjdE5vQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LW5vJyk7XG5jYW5jZWxQcm9qZWN0Tm9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcblx0J2NsaWNrJyxcblx0KCkgPT5cblx0XHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0LXByb21wdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpXG4pO1xuXG4vLyBFZGl0IHByb2plY3QgbmFtZVxuY29uc3QgZWRpdFByb2plY3ROYW1lU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG5cdCdlZGl0LXByb2plY3QtbmFtZS1zdWJtaXQnXG4pO1xuY29uc3QgZWRpdFByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LW5hbWUtaW5wdXQnKTtcbmVkaXRQcm9qZWN0TmFtZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0UHJvamVjdE5hbWUoZSkpO1xuXG4vLyBDYW5jZWwgZWRpdCBQcm9qZWN0IG5hbWVcbmNvbnN0IGNhbmNlbEVkaXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuXHQnZWRpdC1wcm9qZWN0LW5hbWUtY2FuY2VsJ1xuKTtcbmNhbmNlbEVkaXRQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJylcbik7XG5cbi8vIEFsbCBUYXNrcyBQcm9qZWN0XG5jb25zdCBhbGxUYXNrc1Byb2plY3RDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbC10YXNrcy1wcm9qZWN0Jyk7XG5hbGxUYXNrc1Byb2plY3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyQWxsVGFza3NQcm9qZWN0KCkpO1xuXG4vLyBRdWlja2x5IGFkZCBhIHByb2plY3RcbmZ1bmN0aW9uIHF1aWNrQWRkUHJvamVjdChwcm9qZWN0TmFtZSwgZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdHF1aWNrQWRkVmFsaWRhdGlvbihwcm9qZWN0TmFtZSwgJ2FkZC1wcm9qZWN0LWVycm9ycycpO1xuXHRpZiAobmV3UHJvamVjdElucHV0LnZhbHVlICE9PSAnJyAmJiBuZXdQcm9qZWN0SW5wdXQudmFsdWUubGVuZ3RoIDwgMjYpIHtcblx0XHRuZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcblx0fVxufVxuLy8gQ3JlYXRlcyBhIG5ldyBQcm9qZWN0XG5mdW5jdGlvbiBuZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG5cdHByb2plY3RzLnB1c2goY3JlYXRlUHJvamVjdChjYXBpdGlsaXplKHByb2plY3ROYW1lKSwgW10pKTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdHNbcHJvamVjdHMubGVuZ3RoIC0gMV0pO1xuXHRyZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG5cdHJlc2V0VGV4dElucHV0KG5ld1Byb2plY3RJbnB1dCk7XG59XG5cbi8vIFVzZXMgaW5wdXQgdG8gZWRpdCBwcm9qZWN0IG5hbWVcbmZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZShlKSB7XG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5cdGhpZGRlbkFjdGl2ZVByb2plY3QuZWRpdE5hbWUoaW5wdXQudmFsdWUpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRyZXNldFRleHRJbnB1dChpbnB1dCk7XG5cdGhpZGVQb3BVcCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG59XG5cbmZ1bmN0aW9uIGhpZGVQb3BVcChpZCkge1xuXHRjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0cG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0cmVzZXRUZXh0SW5wdXQoXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0Jylcblx0KTtcbn1cblxuLy8gQ3JlYXRlIGEgY2FyZC4gQ2FuIGJlIHVzZWQgZm9yIGEgdGFzayBvciBhIHByb2plY3RcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRCdG4odHlwZSwgZWxDbGFzcywgZnVuYykge1xuXHRjb25zdCBidXR0b24gPSBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGVsQ2xhc3MpO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZnVuYyhlKSk7XG5cdHJldHVybiBidXR0b247XG59XG5cbi8vIE1ha2VzIHRoZSBcIkNyZWF0ZSBuZXcgdGFzayBwb3AtdXBcIiB2aXNpYmxlXG5mdW5jdGlvbiBzaG93VGFza1BvcFVwKHRpdGxlKSB7XG5cdGNoYW5nZVBvcFVwVGl0bGUodGl0bGUpO1xuXHRjb25zdCBwb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXBvcHVwJyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIjBcImApLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHR9IGVsc2UgcG9wVXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0aWYgKHRpdGxlID09PSAnRWRpdCBUYXNrJykge1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLnRpdGxlO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmRlc2NyaXB0aW9uO1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZSA9XG5cdFx0XHRoaWRkZW5BY3RpdmVUYXNrLmR1ZURhdGU7XG5cdFx0Y2hlY2tSYWRpb0J0bihoaWRkZW5BY3RpdmVUYXNrKTtcblx0fVxufVxuXG4vLyBDaGFuZ2UgcG9wLXVwIHRpdGxlXG5cbmZ1bmN0aW9uIGNoYW5nZVBvcFVwVGl0bGUobmV3VGl0bGUpIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlJyk7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gbmV3VGl0bGU7XG59XG4vLyBNYWtlcyB0aGUgXCJDcmVhdGUgZWRpdCBwcm9qZWN0IHBvcC11cFwiIHZpc2libGVcbmZ1bmN0aW9uIHNob3dFZGl0UHJvamVjdFBvcFVwKGUpIHtcblx0Y29uc3QgcG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC1wcm9qZWN0LXBvcHVwJyk7XG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtcHJvamVjdC1uYW1lLWlucHV0Jyk7XG5cdGlmIChwb3BVcC5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycpIHtcblx0XHRjb25zdCBpbmRleCA9IGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldC5lZGl0UHJvamVjdEJ0bjtcblxuXHRcdGlucHV0LnZhbHVlID0gcHJvamVjdHNbaW5kZXhdLnRpdGxlO1xuXHRcdHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdHNldEhpZGRlbkFjdGl2ZVByb2plY3QocHJvamVjdHNbaW5kZXhdKTtcblx0fSBlbHNlIHBvcFVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbi8vIERlbGV0ZXMgYSB0aGUgcmVsYXRpdmUgdGFza1xuZnVuY3Rpb24gZGVsZXRlVGFzayhlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IGluZGV4ID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LmRlbGV0ZUJ0bjtcblx0aWYgKGhpZGRlbkFjdGl2ZVRhc2sgPT09IGFjdGl2ZVByb2plY3QudGFza3NbaW5kZXhdKSB7XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RldGFpbHMtcGFuZWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHR9XG5cdGdsb2JhbERlbGV0ZVRhc2soaW5kZXgpO1xuXHRhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2soYWN0aXZlUHJvamVjdC50YXNrc1tpbmRleF0pO1xuXHRyZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblx0c2F2ZShwcm9qZWN0cyk7XG59XG5cbi8vIERlbGV0ZXMgYSB0YXNrIGdsb2JhbGx5IGlmIHdvcmtpbmcgZnJvbSBcIkFsbCBUYXNrc1wiIFByb2plY3RcbmZ1bmN0aW9uIGdsb2JhbERlbGV0ZVRhc2soaW5kZXgpIHtcblx0aWYgKGFjdGl2ZVByb2plY3QudGl0bGUgPT09ICdBbGwgVGFza3MnKSB7XG5cdFx0Y29uc3QgaWQgPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XS5pZDtcblx0XHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcblx0XHRcdFx0aWYgKHRhc2suaWQgPT09IGlkKSB7XG5cdFx0XHRcdFx0cHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuXG4vLyBEZWxldGVzIHRoZSByZWxhdGl2ZSBQcm9qZWN0XG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGUpIHtcblx0Y29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0KVswXTtcblx0Y29uc3QgaW5kZXggPSBwYXJzZUludChlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXRba2V5XSk7XG5cdGlmIChhY3RpdmVQcm9qZWN0ID09PSBwcm9qZWN0c1tpbmRleF0pIHtcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1wYW5lbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0aW5kZXggPT09IDBcblx0XHRcdD8gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1tpbmRleCArIDFdKVxuXHRcdFx0OiBzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzW2luZGV4IC0gMV0pO1xuXHR9XG5cdHJlbW92ZVByb2plY3QoaW5kZXgpO1xuXHRzYXZlKHByb2plY3RzKTtcblx0cmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXHRhY3RpdmVQcm9qZWN0ICE9PSB1bmRlZmluZWRcblx0XHQ/IHJlbmRlckFjdGl2ZVByb2plY3QoYWN0aXZlUHJvamVjdClcblx0XHQ6IHJlbmRlckFsbFRhc2tzUHJvamVjdCgpO1xuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QtcHJvbXB0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuLy9Ub2dnbGVzIGEgdGFzayBhcyBcIkRvbmVcIlxuXG5mdW5jdGlvbiB0b2dnbGVUYXNrRG9uZShlKSB7XG5cdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdGNvbnN0IGluZGV4ID0gZS5jb21wb3NlZFBhdGgoKVswXS5kYXRhc2V0LmRvbmVCdG47XG5cdGNvbnN0IHRhc2sgPSBhY3RpdmVQcm9qZWN0LnRhc2tzW2luZGV4XTtcblx0dGFzay50b2dnbGVEb25lKCk7XG5cdGlmICh0YXNrLmlzRG9uZSkge1xuXHRcdGFjdGl2ZVByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0XHRhY3RpdmVQcm9qZWN0LnJlbW92ZVRhc2sodGFzayk7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYWN0aXZlUHJvamVjdC50YXNrc1tpXS5pc0RvbmUpIHtcblx0XHRcdFx0YWN0aXZlUHJvamVjdC5yZW1vdmVUYXNrKHRhc2spO1xuXHRcdFx0XHRpZiAoaSAhPT0gMCAmJiBhY3RpdmVQcm9qZWN0LnRhc2tzW2kgLSAxXS5pc0RvbmUpIHtcblx0XHRcdFx0XHRhY3RpdmVQcm9qZWN0LnRhc2tzLnNwbGljZShpIC0gMSwgMCwgdGFzayk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YWN0aXZlUHJvamVjdC50YXNrcy5zcGxpY2UoaSwgMCwgdGFzayk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJlbmRlclRhc2tzKGFjdGl2ZVByb2plY3QudGFza3MpO1xuXHRzYXZlKHByb2plY3RzKTtcbn1cblxuLy8gVXNlIHF1aWNrQWRkIHRleHQgaW5wdXQgdG8gY3JlYXRlIGEgbmV3IHRhc2sgd2l0aCBvbmx5IGEgdGl0bGVcbmZ1bmN0aW9uIHF1aWNrQWRkKHByb2plY3QsIGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRxdWlja0FkZFZhbGlkYXRpb24ocXVpY2tBZGRJbnB1dC52YWx1ZSwgJ2FkZC10YXNrLWVycm9ycycpO1xuXHRpZiAoYWN0aXZlUHJvamVjdC50aXRsZSAhPT0gJ0FsbCBUYXNrcycpIHtcblx0XHRpZiAocXVpY2tBZGRJbnB1dC52YWx1ZSAhPT0gJycgJiYgcXVpY2tBZGRJbnB1dC52YWx1ZS5sZW5ndGggPCAyNikge1xuXHRcdFx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bmV3UHJvamVjdCgnUGVyc29uYWwnKTtcblx0XHRcdFx0c2V0QWN0aXZlUHJvamVjdChwcm9qZWN0c1swXSk7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0YXNrID0gY3JlYXRlVGFzayhcblx0XHRcdFx0Y2FwaXRpbGl6ZShxdWlja0FkZElucHV0LnZhbHVlKSxcblx0XHRcdFx0JycsXG5cdFx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdFx0JzAnLFxuXHRcdFx0XHR1bmRlZmluZWQsXG5cdFx0XHRcdE1hdGgucmFuZG9tKDEpXG5cdFx0XHQpO1xuXHRcdFx0cHJvamVjdC5hZGRUYXNrKHRhc2spO1xuXHRcdFx0c2F2ZShwcm9qZWN0cyk7XG5cdFx0XHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcblx0XHRcdHJlc2V0VGV4dElucHV0KHF1aWNrQWRkSW5wdXQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBEZWNpZGVzIHRvIGNyZWF0ZSBhIG5ldyB0YXNrIG9yIGVkaXQgYW4gZXhpc3Rpbmcgb25lXG5mdW5jdGlvbiBjcmVhdGVPckVkaXRUYXNrKHByb2plY3QpIHtcblx0cG9wVXBGb3JtVmFsaWRhdGlvbigpO1xuXHRjb25zdCBlcnJvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWVycm9ycycpO1xuXHRpZiAoZXJyb3JzLnRleHRDb250ZW50ID09PSAnJykge1xuXHRcdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZScpLnRleHRDb250ZW50O1xuXHRcdHRpdGxlID09PSAnQ3JlYXRlIE5ldyBUYXNrJyA/IGZ1bGxBZGQocHJvamVjdCkgOiBlZGl0VGFzayhwcm9qZWN0KTtcblx0XHRoaWRlUG9wVXAoJ3Rhc2stcG9wdXAnKTtcblx0XHRyZXNldFRleHRJbnB1dChcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUtaW5wdXQnKSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKSxcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKVxuXHRcdCk7XG5cdH1cbn1cblxuLy8gQ3JlYXRlcyBhIHRhc2sgd2l0aCBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlIGRhdGUgYW5kIHByaW9yaXR5XG5mdW5jdGlvbiBmdWxsQWRkKHByb2plY3QpIHtcblx0aWYgKGFjdGl2ZVByb2plY3QudGl0bGUgIT09ICdBbGwgVGFza3MnKSB7XG5cdFx0aWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdG5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG5cdFx0XHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblx0XHR9XG5cdFx0Y29uc3QgdGFzayA9IGNyZWF0ZVRhc2soXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWUsXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWRlc2NyaXB0aW9uLWlucHV0JykudmFsdWUsXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWUsXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpO1xuXHRcdHByb2plY3QuYWRkVGFzayh0YXNrKTtcblx0XHRzYXZlKHByb2plY3RzKTtcblx0XHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcblx0XHRyZW5kZXJUYXNrRGV0YWlscyh0YXNrKTtcblx0fVxufVxuXG4vLyBFZGl0IHRoZSB0YXNrXG5mdW5jdGlvbiBlZGl0VGFzayhwcm9qZWN0KSB7XG5cdGNvbnN0IGNoZWNrZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0J2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJ1xuXHQpO1xuXG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcC11cC10aXRsZS1pbnB1dCcpLnZhbHVlO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZGVzY3JpcHRpb24taW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtZHVlLWRhdGUtaW5wdXQnKS52YWx1ZTtcblx0Y29uc3QgcHJpb3JpdHkgPSBjaGVja2VkUHJpb3JpdHkgPT09IG51bGwgPyAwIDogY2hlY2tlZFByaW9yaXR5LnZhbHVlO1xuXG5cdGhpZGRlbkFjdGl2ZVRhc2suZWRpdFRpdGxlKHRpdGxlKTtcblx0aGlkZGVuQWN0aXZlVGFzay5lZGl0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pO1xuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXREdWVEYXRlKGR1ZURhdGUpO1xuXHRoaWRkZW5BY3RpdmVUYXNrLmVkaXRQcmlvcml0eShwcmlvcml0eSk7XG5cdHNhdmUocHJvamVjdHMpO1xuXHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcblx0cmVuZGVyVGFza0RldGFpbHMoaGlkZGVuQWN0aXZlVGFzayk7XG59XG5cbi8vIENoZWNrcyByYWRpbyBidXR0b24gd2l0aCB0YXNrcyBwcmV2aW91cyBzZWxlY3Rpb25cbmZ1bmN0aW9uIGNoZWNrUmFkaW9CdG4odGFzaykge1xuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBpbnB1dFt2YWx1ZT1cIiR7dGFzay5wcmlvcml0eX1cImApLmNoZWNrZWQgPSB0cnVlO1xufVxuXG4vLyBSZW5kZXJzIFwiQWxsIFRhc2tzXCIgcHJvamVjdFxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3NQcm9qZWN0KCkge1xuXHRjb25zdCBhbGxUYXNrc1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdBbGwgVGFza3MnLCBjcmVhdGVBbGxUYXNrc0FycmF5KCkpO1xuXHRyZW5kZXJBY3RpdmVQcm9qZWN0KGFsbFRhc2tzUHJvamVjdCk7XG59XG4iLCJleHBvcnQge1xuXHRyZW5kZXJQcm9qZWN0cyxcblx0cmVuZGVyVGFza3MsXG5cdHNlbGVjdFByb2plY3QsXG5cdHJlc2V0VGV4dElucHV0LFxuXHRjcmVhdGVEb21FbGVtZW50LFxuXHRyZW5kZXJUYXNrRGV0YWlscyxcblx0cG9wVXBGb3JtVmFsaWRhdGlvbixcblx0cmVuZGVyQWN0aXZlUHJvamVjdCxcblx0Y2FwaXRpbGl6ZSxcblx0cXVpY2tBZGRWYWxpZGF0aW9uLFxufTtcbmltcG9ydCB7XG5cdHNldEFjdGl2ZVByb2plY3QsXG5cdHByb2plY3RzLFxuXHRhY3RpdmVQcm9qZWN0LFxuXHRyZW1vdmVQcm9qZWN0LFxufSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHtcblx0Y3JlYXRlQ2FyZEJ0bixcblx0ZGVsZXRlVGFzayxcblx0dG9nZ2xlVGFza0RvbmUsXG5cdGRlbGV0ZVByb2plY3QsXG5cdHNob3dFZGl0UHJvamVjdFBvcFVwLFxufSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgc2V0SGlkZGVuQWN0aXZlVGFzayB9IGZyb20gJy4vdGFzayc7XG5cbi8vIEFzc2lnbiBEYXRhc2V0IHRvIFByb2plY3QgQ2FyZFxuZnVuY3Rpb24gYXNzaWduUHJvamVjdERhdGFJbmRleChpbmRleCwgY2FyZCwgZWRpdEJ0biwgZGVsZXRlQnRuKSB7XG5cdGNhcmQuZGF0YXNldC5wcm9qZWN0ID0gaW5kZXg7XG5cdGVkaXRCdG4uZGF0YXNldC5lZGl0UHJvamVjdEJ0biA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVQcm9qZWN0QnRuID0gaW5kZXg7XG59XG5cbi8vIENyZWF0ZSBhIFByb2plY3QgQ2FyZFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCkge1xuXHRjb25zdCBpbmRleCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKS5jaGlsZHJlbi5sZW5ndGggLSAxO1xuXHRjb25zdCBjYXJkID0gY3JlYXRlRG9tRWxlbWVudCgnZGl2JywgJ3Byb2plY3QtY2FyZCcpO1xuXHRjb25zdCBkZWxldGVCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgc2hvd0RlbGV0ZVByb2plY3QpO1xuXHRjb25zdCB0aXRsZSA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICdwcm9qZWN0LXRpdGxlJyk7XG5cdGNvbnN0IGVkaXRCdG4gPSBjcmVhdGVDYXJkQnRuKCdidXR0b24nLCAnc21hbGwtYnRuJywgc2hvd0VkaXRQcm9qZWN0UG9wVXApO1xuXHRkZWxldGVCdG4uaW5uZXJIVE1MID0gJyYjMTAwMDc7Jztcblx0ZWRpdEJ0bi5pbm5lckhUTUwgPSAnJiM5OTk4Jztcblx0dGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXHRhcHBlbmRUb1BhcmVudChjYXJkLCBlZGl0QnRuLCB0aXRsZSwgZGVsZXRlQnRuKTtcblx0YXNzaWduUHJvamVjdERhdGFJbmRleChpbmRleCwgY2FyZCwgZWRpdEJ0biwgZGVsZXRlQnRuKTtcblx0Y2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblx0XHRyZW5kZXJBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXHR9KTtcblx0cmV0dXJuIGNhcmQ7XG59XG5cbi8vIEFwcGVuZHMgUHJvamVjdCBDYXJkIHRvIFByb2plY3QgTGlzdFxuZnVuY3Rpb24gYXBwZW5kUHJvamVjdChwcm9qZWN0KSB7XG5cdGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1saXN0Jyk7XG5cdGNvbnN0IGNhcmQgPSBjcmVhdGVQcm9qZWN0Q2FyZChwcm9qZWN0KTtcblx0bGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcbn1cblxuLy8gQXBwZW5kcyBhbGwgUHJvamVjdCBDYXJkIHRvIFByb2plY3QgTGlzdFxuZnVuY3Rpb24gYXBwZW5kQWxsUHJvamVjdHMocHJvamVjdCkge1xuXHRwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiBhcHBlbmRQcm9qZWN0KHByb2plY3QpKTtcbn1cblxuLy8gUmVuZGVycyBQcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpIHtcblx0cmVzZXRFbGVtZW50cygnLnByb2plY3QtY2FyZCcpO1xuXHRhcHBlbmRBbGxQcm9qZWN0cygpO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBhY3RpdmUgcHJvamVjdHMgdGFza3NcbmZ1bmN0aW9uIHJlbmRlckFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuXHRzZXRBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXHRzZWxlY3RQcm9qZWN0KHByb2plY3QpO1xuXHRyZW5kZXJUYXNrcyhwcm9qZWN0LnRhc2tzKTtcbn1cblxuLy8gUmVuZGVycyB0aGUgYWN0aXZlIHByb2plY3RzXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0KHByb2plY3QpIHtcblx0Y29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKTtcblx0cHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbn1cblxuLy8gQXNzaWducyBkYXRhc2V0IHRvIHRhc2sgY2FyZFxuZnVuY3Rpb24gYXNzaWduVGFza0RhdGFJbmRleChpbmRleCwgY2FyZCwgZG9uZUJ0biwgZGVsZXRlQnRuLCB0aXRsZSkge1xuXHRjYXJkLmRhdGFzZXQudGFzayA9IGluZGV4O1xuXHRkb25lQnRuLmRhdGFzZXQuZG9uZUJ0biA9IGluZGV4O1xuXHRkZWxldGVCdG4uZGF0YXNldC5kZWxldGVCdG4gPSBpbmRleDtcblx0dGl0bGUuZGF0YXNldC50aXRsZSA9IGluZGV4O1xufVxuXG4vLyBDcmVhdGUgYSBuZXcgVGFzayBDYXJkXG5mdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrKSB7XG5cdGNvbnN0IGluZGV4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpLmNoaWxkcmVuLmxlbmd0aDtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZURvbUVsZW1lbnQoJ2RpdicsICd0YXNrLWNhcmQnKTtcblx0Y29uc3QgZG9uZUJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCB0b2dnbGVUYXNrRG9uZSk7XG5cdGNvbnN0IGRlbGV0ZUJ0biA9IGNyZWF0ZUNhcmRCdG4oJ2J1dHRvbicsICdzbWFsbC1idG4nLCBkZWxldGVUYXNrKTtcblx0Y29uc3QgdGl0bGUgPSBjcmVhdGVEb21FbGVtZW50KCdkaXYnLCAndGFzay10aXRsZScpO1xuXHRjYXJkLmNsYXNzTGlzdC5hZGQoYHByaW9yaXR5LSR7dGFzay5wcmlvcml0eX1gKTtcblx0dGFza0RvbmUodGFzaywgY2FyZCwgdGl0bGUpO1xuXHRkb25lQnRuLmlubmVySFRNTCA9ICcmIzEwMDAzJztcblx0ZGVsZXRlQnRuLmlubmVySFRNTCA9ICcmIzEwMDA3Oyc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0YXBwZW5kVG9QYXJlbnQoY2FyZCwgZG9uZUJ0biwgdGl0bGUsIGRlbGV0ZUJ0bik7XG5cdGFzc2lnblRhc2tEYXRhSW5kZXgoaW5kZXgsIGNhcmQsIGRvbmVCdG4sIGRlbGV0ZUJ0biwgdGl0bGUpO1xuXHRjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFza0RldGFpbHModGFzaykpO1xuXHRyZXR1cm4gY2FyZDtcbn1cblxuLy8gQXBwZW5kIGEgdGFzayBjYXJkXG5mdW5jdGlvbiBhcHBlbmRUYXNrKHRhc2spIHtcblx0Y29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcblx0Y29uc3QgY2FyZCA9IGNyZWF0ZVRhc2tDYXJkKHRhc2spO1xuXHRsaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xufVxuXG4vLyBBcHBlbmQgYWxsIHRhc2sgY2FyZHNcbmZ1bmN0aW9uIGFwcGVuZEFsbFRhc2tzKHRhc2tzKSB7XG5cdGlmICh0YXNrcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dGFza3MuZm9yRWFjaCgodGFzaykgPT4gYXBwZW5kVGFzayh0YXNrKSk7XG5cdH1cbn1cblxuLy8gUmVuZGVycyBQcm9qZWN0c1xuZnVuY3Rpb24gcmVuZGVyVGFza3ModGFza3MpIHtcblx0cmVzZXRFbGVtZW50cygnLnRhc2stY2FyZCcpO1xuXHRhcHBlbmRBbGxUYXNrcyh0YXNrcyk7XG59XG5cbi8vIFJlbmRlcnMgVGFzayBEZXRhaWxzIG9uIGRldGFpbHMgcGFuZWxcbmZ1bmN0aW9uIHJlbmRlclRhc2tEZXRhaWxzKHRhc2spIHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy10aXRsZScpO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLWRlc2NyaXB0aW9uJyk7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGV0YWlscy1kdWUtZGF0ZScpO1xuXHRjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXByaW9yaXR5Jyk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXRhaWxzLXBhbmVsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblx0ZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uID8gYCR7dGFzay5kZXNjcmlwdGlvbn1gIDogJyc7XG5cdGR1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGUgPyBgRHVlIERhdGU6ICR7dGFzay5kdWVEYXRlfWAgOiAnJztcblx0aWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhJztcblx0fSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcblx0XHRwcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eTogISEnO1xuXHR9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuXHRcdHByaW9yaXR5LnRleHRDb250ZW50ID0gJ1ByaW9yaXR5OiAhISEnO1xuXHR9XG5cdHNldEhpZGRlbkFjdGl2ZVRhc2sodGFzayk7XG59XG5cbi8vIEFwcGVuZHMgbXVsdGlwbGUgZWxlbWVudHMgdG8gYSBkaXZcbmZ1bmN0aW9uIGFwcGVuZFRvUGFyZW50KHBhcmVudCwgLi4uYXJncykge1xuXHRhcmdzLmZvckVhY2goKGFyZykgPT4gcGFyZW50LmFwcGVuZENoaWxkKGFyZykpO1xufVxuXG4vLyBDcmVhdGUgYSBET00gZWxlbWVudCB3aXRoIHJlbGF0aXZlIGNsYXNzXG5mdW5jdGlvbiBjcmVhdGVEb21FbGVtZW50KHR5cGUsIGVsQ2xhc3MpIHtcblx0Y29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcblx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2VsQ2xhc3N9YCk7XG5cdHJldHVybiBlbGVtZW50O1xufVxuXG4vLyBSZXNldHMgYWxsIGVsZW1lbnRzIHdpdGggYSBjZXJ0YWluIGNsYXNzXG5mdW5jdGlvbiByZXNldEVsZW1lbnRzKGVsQ2xhc3MpIHtcblx0bGV0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbENsYXNzKTtcblx0ZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4gZWxlbWVudC5yZW1vdmUoKSk7XG59XG5cbi8vIFJlc2V0cyB0ZXh0IGlucHV0XG5mdW5jdGlvbiByZXNldFRleHRJbnB1dCguLi5hcmdzKSB7XG5cdGFyZ3MuZm9yRWFjaCgoYXJnKSA9PiAoYXJnLnZhbHVlID0gJycpKTtcbn1cblxuLy8gQWRkcyB0YXNrLWRvbmUgYW5kICd0YXNrLXRpdGxlLWRvbmUnIGNsYXNzIHRvIHRhc2sgY2FyZCBhbmQgdGl0bGVcblxuZnVuY3Rpb24gdGFza0RvbmUodGFzaywgY2FyZCwgdGl0bGUpIHtcblx0aWYgKHRhc2suaXNEb25lID09PSB0cnVlKSB7XG5cdFx0Y2FyZC5jbGFzc0xpc3QuYWRkKCd0YXNrLWRvbmUnKTtcblx0XHR0aXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrLXRpdGxlLWRvbmUnKTtcblx0fSBlbHNlIHtcblx0XHRjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stZG9uZScpO1xuXHRcdHRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3Rhc2stdGl0bGUtZG9uZScpO1xuXHR9XG59XG5cbi8vIEZvcm0gdmFsaWRhdGlvblxuXG5mdW5jdGlvbiBwb3BVcEZvcm1WYWxpZGF0aW9uKCkge1xuXHRjb25zdCBlcnJvckxpc3QgPSBbXTtcblx0Y29uc3QgcG9wVXBUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3AtdXAtdGl0bGUnKS50ZXh0Q29udGVudDtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLXRpdGxlLWlucHV0JykudmFsdWU7XG5cdGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wLXVwLWR1ZS1kYXRlLWlucHV0JykudmFsdWU7XG5cdGFjdGl2ZVByb2plY3QudGl0bGUgPT09ICdBbGwgVGFza3MnICYmIHBvcFVwVGl0bGUgPT09ICdDcmVhdGUgTmV3IFRhc2snXG5cdFx0PyBlcnJvckxpc3QucHVzaCgnQ2Fubm90IGFkZCB0YXNrcyB0byBcIkFsbCBUYXNrc1wiJylcblx0XHQ6IGVycm9yTGlzdC5wdXNoKHRpdGxlVmFsaWRhdGlvbih0aXRsZSkpO1xuXHRlcnJvckxpc3QucHVzaChkdWVEYXRlVmFsaWRhdGlvbihkdWVEYXRlKSk7XG5cdHNob3dFcnJvcnMoZXJyb3JMaXN0LCAncG9wLXVwLWVycm9ycycpO1xufVxuXG5mdW5jdGlvbiBxdWlja0FkZFZhbGlkYXRpb24odGl0bGUsIGVycm9yc0lkKSB7XG5cdGNvbnN0IGVycm9ycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVycm9yc0lkKTtcblx0ZXJyb3JzLnRleHRDb250ZW50ID1cblx0XHRhY3RpdmVQcm9qZWN0LnRpdGxlID09PSAnQWxsIFRhc2tzJyAmJiBlcnJvcnNJZCA9PT0gJ2FkZC10YXNrLWVycm9ycydcblx0XHRcdD8gJ0Nhbm5vdCBhZGQgdGFza3MgdG8gXCJBbGwgVGFza3NcIidcblx0XHRcdDogdGl0bGVWYWxpZGF0aW9uKHRpdGxlKTtcbn1cbi8vIFRpdGxlIHZhbGlkYXRpb25cbmZ1bmN0aW9uIHRpdGxlVmFsaWRhdGlvbih0aXRsZSkge1xuXHRpZiAodGl0bGUgPT09ICcnKSB7XG5cdFx0cmV0dXJuICdJbnNlcnQgdGl0bGUnO1xuXHR9IGVsc2UgaWYgKHRpdGxlLmxlbmd0aCA+IDI1KSB7XG5cdFx0cmV0dXJuICdUaXRsZSBtYXggMjUgY2hhcmFjdGVycyc7XG5cdH1cbn1cblxuLy8gRHVlIERhdGUgbm90IGluIHBhc3RcbmZ1bmN0aW9uIGR1ZURhdGVWYWxpZGF0aW9uKGR1ZURhdGUpIHtcblx0Y29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXHRjb25zdCBpbnB1dERhdGUgPVxuXHRcdGR1ZURhdGUgIT09ICcnID8gbmV3IERhdGUoZHVlRGF0ZSkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCkgOiAnJztcblx0aWYgKGlucHV0RGF0ZSAhPT0gJycgJiYgaW5wdXREYXRlIDwgdG9kYXkpIHtcblx0XHRyZXR1cm4gJ0R1ZSBEYXRlIGlzIGluIHRoZSBwYXN0Jztcblx0fVxufVxuLy8gU2hvdyBmb3JtIFZhbGlkYXRpb24gZXJyb3JzXG5mdW5jdGlvbiBzaG93RXJyb3JzKGVycm9yTGlzdCwgaWQpIHtcblx0Y29uc3QgZXJyb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXHRlcnJvcnMudGV4dENvbnRlbnQgPSBlcnJvckxpc3Quam9pbignIHwgJyk7XG5cdGlmIChlcnJvcnMudGV4dENvbnRlbnQgPT09ICcgfCAnKSB7XG5cdFx0ZXJyb3JzLnRleHRDb250ZW50ID0gJyc7XG5cdH1cblx0aWYgKGVycm9yTGlzdC5pbmNsdWRlcyh1bmRlZmluZWQpKSB7XG5cdFx0ZXJyb3JzLnRleHRDb250ZW50ID0gZXJyb3JzLnRleHRDb250ZW50LnJlcGxhY2VBbGwoJ3wnLCAnJyk7XG5cdH1cbn1cblxuLy8gQ2FwaXRpbGl6ZSBmaXJzdCBsZXR0ZXJcbmZ1bmN0aW9uIGNhcGl0aWxpemUoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbi8vIFNob3cgZGVsZXRlIHByb2plY3QgcHJvbXB0IHBvcC11cFxuZnVuY3Rpb24gc2hvd0RlbGV0ZVByb2plY3QoZSkge1xuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQpWzBdO1xuXHRjb25zdCBpbmRleCA9IHBhcnNlSW50KGUuY29tcG9zZWRQYXRoKClbMF0uZGF0YXNldFtrZXldKTtcblx0Ly8gT25seSBkZWxldGVzIGFuIGVtcHR5IHByb2plY3Qgd2l0aG91dCBwcm9tcHRcblx0aWYgKHByb2plY3RzW2luZGV4XS50YXNrc1swXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0ZGVsZXRlUHJvamVjdChlKTtcblx0fSBlbHNlIHtcblx0XHQvLyBhc3NpZ25zIHRoZSBcInllc1wiIGJ1dHRvbiBvbiB0aGUgZGVsZXRlIHByb2plY3QgcHJvbXB0IHRoZSBkYXRhc2V0IG9mIHRoZSBwcm9qZWN0IGludGVuZGVkIHRvIGJlIGRlbGV0ZWRcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlLXByb2plY3QteWVzJykuZGF0YXNldC5ldmVudCA9XG5cdFx0XHRlLmNvbXBvc2VkUGF0aCgpWzBdLmRhdGFzZXQuZGVsZXRlUHJvamVjdEJ0bjtcblxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGUtcHJvamVjdC1wcm9tcHQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0fVxufVxuIiwiaW1wb3J0IHsgcHJvamVjdHMsIGNyZWF0ZVByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnO1xuZXhwb3J0IHsgc2F2ZSwgbG9hZCB9O1xuXG4vLyBTYXZlcyB0byBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmUocHJvamVjdHMpIHtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbn1cblxuLy8gTG9hZHMgZnJvbSBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xuXHRyZXR1cm4gcHJvamVjdHMgPT09IG51bGwgPyBbXSA6IHByb2plY3RzO1xufVxuIiwiZXhwb3J0IHtcblx0YWN0aXZlUHJvamVjdCxcblx0aGlkZGVuQWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdGNyZWF0ZVByb2plY3QsXG5cdHNldEFjdGl2ZVByb2plY3QsXG5cdHNldEhpZGRlbkFjdGl2ZVByb2plY3QsXG5cdHJlbW92ZVByb2plY3QsXG5cdGFsbFRhc2tzUHJvamVjdCxcblx0Y3JlYXRlQWxsVGFza3NBcnJheSxcbn07XG5pbXBvcnQgeyBsb2FkIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gJy4vdGFzayc7XG5pbXBvcnQgeyBuZXdQcm9qZWN0IH0gZnJvbSAnLi9idXR0b25zJztcblxuLy8gUHJvamVjdCBGYWN0b3J5IEZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcykge1xuXHRjb25zdCBwcm90byA9IHtcblx0XHRhZGRUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0dGhpcy50YXNrcy5wdXNoKHRhc2spO1xuXHRcdH0sXG5cblx0XHRyZW1vdmVUYXNrOiBmdW5jdGlvbiAodGFzaykge1xuXHRcdFx0Y29uc3QgaW5kZXggPSB0aGlzLnRhc2tzLmluZGV4T2YodGFzayk7XG5cdFx0XHR0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0fSxcblx0XHRlZGl0TmFtZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0fTtcblx0Y29uc3QgcHJvamVjdCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90byksIHtcblx0XHR0aXRsZSxcblx0XHR0YXNrcyxcblx0fSk7XG5cdHJldHVybiBwcm9qZWN0O1xufVxuXG4vLyBTZXRzIHRoZSBBY3RpdmUgUHJvamVjdFxuZnVuY3Rpb24gc2V0QWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG5cdGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xufVxuLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gUHJvamVjdHMgYXJyYXlcbmZ1bmN0aW9uIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcblx0cHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuLy8gTG9hZHMgbG9jYWxTdG9yYWdlXG5sZXQgcHJvamVjdHMgPSBsb2FkKCk7XG5cbi8vIFJldHVybnMgYW4gYXJyYXkgd2l0aCBhbGwgdGFza3NcbmZ1bmN0aW9uIGNyZWF0ZUFsbFRhc2tzQXJyYXkoKSB7XG5cdHJldHVybiBwcm9qZWN0cy5yZWR1Y2UoKGFycmF5LCBwcm9qZWN0KSA9PiB7XG5cdFx0cHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG5cdFx0XHRjcmVhdGVUYXNrKHRhc2sudGl0bGUpO1xuXHRcdFx0YXJyYXkucHVzaCh0YXNrKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0sIFtdKTtcbn1cblxuLy8gQ3JlYXRlcyBhbGxUYXNrc1Byb2plY3RcbmxldCBhbGxUYXNrc1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KCdBbGwgVGFza3MnLCBjcmVhdGVBbGxUYXNrc0FycmF5KCkpO1xuXG4vLyBEZWZpbmVzIHRoZSBhY3RpdmUgUHJvamVjdFxubGV0IGFjdGl2ZVByb2plY3Q7XG5cbi8vIEhpZGRlbiBhY3RpdmUgcHJvamVjdFxuXG5sZXQgaGlkZGVuQWN0aXZlUHJvamVjdDtcblxuLy8gU2V0cyB0aGUgSGlkZGVuIGFjdGl2ZSBwcm9qZWN0IChuZWVkZWQgdG8gZWRpdCBwcm9qZWN0KVxuXG5mdW5jdGlvbiBzZXRIaWRkZW5BY3RpdmVQcm9qZWN0KHByb2plY3QpIHtcblx0aGlkZGVuQWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG59XG4iLCJleHBvcnQgeyBoaWRkZW5BY3RpdmVUYXNrLCBjcmVhdGVUYXNrLCBzZXRIaWRkZW5BY3RpdmVUYXNrIH07XG5cbi8vIFRhc2sgRmFjdG9yeSBGdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0RvbmUsIGlkKSB7XG5cdGNvbnN0IHByb3RvID0ge1xuXHRcdGVkaXRUaXRsZTogZnVuY3Rpb24gKG5ld1RpdGxlKSB7XG5cdFx0XHR0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG5cdFx0fSxcblx0XHRlZGl0RGVzY3JpcHRpb246IGZ1bmN0aW9uIChuZXdEZXNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuXHRcdH0sXG5cdFx0ZWRpdER1ZURhdGU6IGZ1bmN0aW9uIChuZXdEdWVEYXRlKSB7XG5cdFx0XHR0aGlzLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuXHRcdH0sXG5cdFx0ZWRpdFByaW9yaXR5OiBmdW5jdGlvbiAobmV3UHJpb3JpdHkpIHtcblx0XHRcdHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblx0XHR9LFxuXHRcdHRvZ2dsZURvbmU6IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuaXNEb25lID0gIXRoaXMuaXNEb25lO1xuXHRcdH0sXG5cdH07XG5cdGNvbnN0IHRhc2sgPSBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7XG5cdFx0dGl0bGUsXG5cdFx0ZGVzY3JpcHRpb24sXG5cdFx0ZHVlRGF0ZSxcblx0XHRwcmlvcml0eSxcblx0XHRpc0RvbmUsXG5cdFx0aWQsXG5cdH0pO1xuXHRyZXR1cm4gdGFzaztcbn1cblxuLy8gSGlkZGVuIGFjdGl2ZSB0YXNrXG5cbmxldCBoaWRkZW5BY3RpdmVUYXNrO1xuXG4vLyBTZXRzIHRoZSBIaWRkZW4gdGFzayBwcm9qZWN0IChuZWVkZWQgdG8gZWRpdCB0YXNrKVxuXG5mdW5jdGlvbiBzZXRIaWRkZW5BY3RpdmVUYXNrKHRhc2spIHtcblx0aGlkZGVuQWN0aXZlVGFzayA9IHRhc2s7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGNyZWF0ZVRhc2sgfSBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHtcblx0YWN0aXZlUHJvamVjdCxcblx0cHJvamVjdHMsXG5cdHNldEFjdGl2ZVByb2plY3QsXG5cdGNyZWF0ZVByb2plY3QsXG5cdHBlcnNvbmFsLFxuXHR3b3JrLFxufSBmcm9tICcuL3Byb2plY3QnO1xuaW1wb3J0IHsgcmVuZGVyVGFza3MsIHJlbmRlclByb2plY3RzLCBzZWxlY3RQcm9qZWN0IH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHsgcXVpY2tBZGQsIG5ld1Byb2plY3QgfSBmcm9tICcuL2J1dHRvbnMnO1xuaW1wb3J0IHsgc2F2ZSwgbG9hZCB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuLy8gUmVjcmVhdGVzIGFsbCBQcm9qZWN0cyBhbmQgVGFza3Mgd2l0aCB3b3JraW5nIF9fcHJvdG9fXyBhZnRlciBsb2FkaW5nIGl0IGZyb20gbG9jYWxTdG9yYWdlXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG5cdHByb2plY3RzW2ldID0gY3JlYXRlUHJvamVjdChwcm9qZWN0c1tpXS50aXRsZSwgcHJvamVjdHNbaV0udGFza3MpO1xuXHRmb3IgKGxldCBhID0gMDsgYSA8IHByb2plY3RzW2ldLnRhc2tzLmxlbmd0aDsgYSsrKSB7XG5cdFx0cHJvamVjdHNbaV0udGFza3NbYV0gPSBjcmVhdGVUYXNrKFxuXHRcdFx0cHJvamVjdHNbaV0udGFza3NbYV0udGl0bGUsXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5kZXNjcmlwdGlvbixcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmR1ZURhdGUsXG5cdFx0XHRwcm9qZWN0c1tpXS50YXNrc1thXS5wcmlvcml0eSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmlzRG9uZSxcblx0XHRcdHByb2plY3RzW2ldLnRhc2tzW2FdLmlkXG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGVzIGRlZmF1bHQgXCJQZXJzb25hbFwiIHByb2plY3QgaWYgcHJvamVjdHMgYXJyYXkgaXMgZW1wdHkgd2hlbiBsb2FkaW5nIGFwcFxuaWYgKHByb2plY3RzWzBdID09PSB1bmRlZmluZWQpIHtcblx0bmV3UHJvamVjdCgnSW5zdHJ1Y3Rpb25zJyk7XG5cdG5ld1Byb2plY3QoJ1BlcnNvbmFsJyk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdQcm9qZWN0cycsXG5cdFx0XHQnWW91IGNhbiBjcmVhdGUgbmV3IHByb2plY3RzIGFuZCBlZGl0IHRoZWlyIG5hbWVzIGZyb20gdGhlIFByb2plY3RzIFBhbmVsJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdUYXNrcycsXG5cdFx0XHQnWW91IGNhbiBjcmVhdGUgdGFza3MgZm9yIGVhY2ggcHJvamVjdCB0byBzdGF5IG1vcmUgb3JnYW5pemVkLiBFaXRoZXIgYWRkIGEgdGFzayBxdWlja2x5IG9yIGNsaWNrIG9uIFwiKyBDcmVhdGUgVGFza1wiJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdDb21wbGV0ZSBhbmQgZGVsZXRlIHRhc2tzJyxcblx0XHRcdCdZb3UgY2FuIGFsc28gc2V0IGEgdGFzayB0byBkb25lIG9yIGNvbXBsZXRlbHkgcmVtb3ZlIGEgdGFzayBieSBjbGlja2luZyB0aGUgYnV0dG9ucyBvbiB0aGUgcmVsYXRpdmUgdGFzay4gVHJ5IGl0IG91dCBub3chIGZpcnN0IHNldCB0aGlzIHRhc2sgdG8gZG9uZSBhbmQgdGhlbiBkZWxldGUgaXQuJyxcblx0XHRcdHVuZGVmaW5lZCxcblx0XHRcdCcwJyxcblx0XHRcdGZhbHNlLFxuXHRcdFx0TWF0aC5yYW5kb20oMSlcblx0XHQpXG5cdCk7XG5cdHByb2plY3RzWzBdLmFkZFRhc2soXG5cdFx0Y3JlYXRlVGFzayhcblx0XHRcdCdEZXRhaWxzJyxcblx0XHRcdCdJbiB0aGUgcGFuZWwgZnJvbSB3aGljaCB5b3UgYXJlIGN1cnJlbnRseSByZWFkaW5nIHlvdSBjYW4gdmlldyBhbGwgdGhlIGRldGFpbHMgb2YgYSBzZWxlY3RlZCB0YXNrIGFuZCBhbHNvIGVkaXQgaXQuIFRoZSBvbmx5IHJlcXVpcmVkIGZpZWxkIGlzIHRoZSB0aXRsZScsXG5cdFx0XHR1bmRlZmluZWQsXG5cdFx0XHQnMCcsXG5cdFx0XHRmYWxzZSxcblx0XHRcdE1hdGgucmFuZG9tKDEpXG5cdFx0KVxuXHQpO1xuXHRwcm9qZWN0c1swXS5hZGRUYXNrKFxuXHRcdGNyZWF0ZVRhc2soXG5cdFx0XHQnRGVsZXRlIGluc3RydWN0aW9ucycsXG5cdFx0XHQnWW91IGFyZSBhbGwgc2V0LiBHbyBhaGVhZCBhbmQgZGVsZXRlIHRoZSBpbnN0cnVjdGlvbnMgcHJvamVjdCBhbmQgc3RhcnQgdXNpbmcgdGhlIHRvZG8gbGlzdCEnLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0JzAnLFxuXHRcdFx0ZmFsc2UsXG5cdFx0XHRNYXRoLnJhbmRvbSgxKVxuXHRcdClcblx0KTtcblx0c2F2ZShwcm9qZWN0cyk7XG5cdHJlbmRlclRhc2tzKHByb2plY3RzWzBdLnRhc2tzKTtcbn1cblxuLy8gU2V0cyBBY3RpdmUgUHJvamVjdCB0byB0aGUgZmlyc3Qgb25lIGluIHByb2plY3RzIGFycmF5XG5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzWzBdKTtcblxuLy8gUmVuZGVycyBQcm9qZWN0cyB1cG9uIGxvYWRpbmcgdGhlIGFwcFxucmVuZGVyUHJvamVjdHMocHJvamVjdHMpO1xuXG4vLyBSZW5kZXJzIFRhc2tzIHVwb24gbG9hZGluZyB0aGUgYXBwXG5yZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LnRhc2tzKTtcblxuLy8gU2VsZWN0cyB0aGUgYWN0aXZlIHByb2plY3QgYW5kIHNob3dzIGl0IG9uIHRoZSBUYXNrcy1QYW5lbFxuc2VsZWN0UHJvamVjdChhY3RpdmVQcm9qZWN0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==