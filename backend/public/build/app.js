"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "../frontend/app.jsx":
/*!***************************!*\
  !*** ../frontend/app.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_middleware_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/middleware/router */ "../frontend/src/middleware/router/index.jsx");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


(0,_src_middleware_router__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "../frontend/src/components/layouts/desktop/index.jsx":
/*!************************************************************!*\
  !*** ../frontend/src/components/layouts/desktop/index.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
"use client";



var FooterDes = function FooterDes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "hidden bg-amber-700 text-blue-500 border border-black lg:flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols items-center text-center uppercase text-xs "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FrontSide  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 Copyright - 2023"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterDes);

/***/ }),

/***/ "../frontend/src/components/tools/aos/aos.jsx":
/*!****************************************************!*\
  !*** ../frontend/src/components/tools/aos/aos.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "../frontend/node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos/dist/aos.css */ "../frontend/node_modules/aos/dist/aos.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
"use client";




var AOS = function AOS() {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    aos__WEBPACK_IMPORTED_MODULE_0___default().init({
      once: false
    });
  }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AOS);

/***/ }),

/***/ "../frontend/src/components/tools/navbar-des.jsx":
/*!*******************************************************!*\
  !*** ../frontend/src/components/tools/navbar-des.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../frontend/node_modules/react-router-dom/dist/index.js");
"use client";



var NavBar = function NavBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: " gradient-background  bg-red-800 py-3 flex justify-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/https://www.shutterstock.com/image-vector/funny-skateboard-skate-park-vintage-600w-1975970261.jpg",
    height: 100,
    width: 300
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-5 space-x-5 text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    onClick: true,
    to: "/"
  }, "Acceuil")), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    onClick: true,
    to: "/articles"
  }, "Articles")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    onClick: true,
    to: "/news"
  }, "News")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    onClick: true,
    to: "/movies"
  }, "Movies")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    onClick: true,
    to: "/teams"
  }, "Teams")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);
NavBar();

/***/ }),

/***/ "../frontend/src/middleware/router/index.jsx":
/*!***************************************************!*\
  !*** ../frontend/src/middleware/router/index.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "../frontend/node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../frontend/node_modules/react-router/dist/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "../frontend/src/middleware/router/provider.jsx");




var Router = function Router() {
  var container = document.getElementById("root");
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.RouterProvider, {
    router: _provider__WEBPACK_IMPORTED_MODULE_2__.Provider
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "../frontend/src/middleware/router/provider.jsx":
/*!******************************************************!*\
  !*** ../frontend/src/middleware/router/provider.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Provider: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../frontend/node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home */ "../frontend/src/pages/home.jsx");
/* harmony import */ var _pages_articles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/articles */ "../frontend/src/pages/articles.jsx");
/* harmony import */ var _pages_movies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/movies */ "../frontend/src/pages/movies.jsx");
/* harmony import */ var _pages_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/news */ "../frontend/src/pages/news.jsx");
/* harmony import */ var _pages_teams__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/teams */ "../frontend/src/pages/teams.jsx");







// import Profil from "../../pages/Dashboard";

var Provider = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.createBrowserRouter)([{
  path: "/",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_home__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  path: "/articles",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_articles__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}, {
  path: "/movies",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_movies__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}, {
  path: "/news",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_news__WEBPACK_IMPORTED_MODULE_4__["default"], null)
}, {
  path: "/teams",
  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_pages_teams__WEBPACK_IMPORTED_MODULE_5__["default"], null)
}]);

/***/ }),

/***/ "../frontend/src/pages/articles.jsx":
/*!******************************************!*\
  !*** ../frontend/src/pages/articles.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../frontend/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../frontend/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../frontend/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../frontend/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../frontend/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../frontend/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../frontend/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../frontend/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../frontend/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../frontend/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "../frontend/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../frontend/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "../frontend/node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../frontend/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../frontend/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../frontend/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../frontend/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../frontend/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "../frontend/node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "../frontend/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/lib/axios.js");
/* harmony import */ var _components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/tools/navbar-des */ "../frontend/src/components/tools/navbar-des.jsx");
/* harmony import */ var _components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/layouts/desktop */ "../frontend/src/components/layouts/desktop/index.jsx");
/* harmony import */ var _components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/tools/aos/aos */ "../frontend/src/components/tools/aos/aos.jsx");





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Articles = function Articles() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    articles = _useState2[0],
    setArticles = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("/api/articles").then(function (response) {
      // console.log(response.data["hydra:member"]);
      setArticles(response.data["hydra:member"]);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      console.log("bien joué");
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid grid-cols-3 mx-5 space-x-3  "
  }, articles.map(function (article) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      key: article.id,
      className: "bg-purple-500 glass  border lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
      src: article.image,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
      className: "text-white italic font-bold"
    }, "Titre : ", article.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), "description: ", article.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Articles);

/***/ }),

/***/ "../frontend/src/pages/home.jsx":
/*!**************************************!*\
  !*** ../frontend/src/pages/home.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../frontend/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../frontend/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../frontend/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../frontend/node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../frontend/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../frontend/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../frontend/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../frontend/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../frontend/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../frontend/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../frontend/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../frontend/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "../frontend/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../frontend/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "../frontend/node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../frontend/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../frontend/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../frontend/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../frontend/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "../frontend/node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "../frontend/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "../frontend/node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "../frontend/node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../frontend/node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "../frontend/node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../frontend/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../frontend/node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../frontend/node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../frontend/node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "../frontend/node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "../frontend/node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/lib/axios.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! process */ "../frontend/node_modules/process/browser.js");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../components/tools/navbar-des */ "../frontend/src/components/tools/navbar-des.jsx");
/* harmony import */ var _components_layouts_desktop__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../components/layouts/desktop */ "../frontend/src/components/layouts/desktop/index.jsx");
/* harmony import */ var _components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../components/tools/aos/aos */ "../frontend/src/components/tools/aos/aos.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

































function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Home = function Home() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    posts = _useState2[0],
    setPosts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_33__.useState)({
      name: "",
      description: "",
      price: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    createPost = _useState4[0],
    setCreatePost = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_33__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_38__["default"].get("/api/products")
    // .get(process.env.URL_TEST)
    .then(function (response) {
      // console.log(response.data);
      setPosts(response.data["hydra:member"]);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      console.log("Bien joué");
    });
  }, []);
  var DeletePost = function DeletePost(id) {
    // console.log(`ID: ${id}`)
    axios__WEBPACK_IMPORTED_MODULE_38__["default"]["delete"]("http://localhost:8000/api/products/".concat(id)).then(function () {
      alert("success");
    });
  };
  var OnChangeName = function OnChangeName(event) {
    setCreatePost(_objectSpread(_objectSpread({}, createPost), {}, {
      name: event.target.value
    }));
    console.log(createPost);
  };
  var OnChangeDesc = function OnChangeDesc(event) {
    setCreatePost(_objectSpread(_objectSpread({}, createPost), {}, {
      description: event.target.value
    }));
    console.log(createPost);
  };
  var OnChangePrice = function OnChangePrice(event) {
    setCreatePost(_objectSpread(_objectSpread({}, createPost), {}, {
      Price: parseInt(event.target.value)
    }));
    console.log(createPost);
  };
  var SubmitForm = function SubmitForm() {
    var data = {
      name: createPost.name,
      description: createPost.description,
      price: createPost.price
    };
    axios__WEBPACK_IMPORTED_MODULE_38__["default"].post("http://localhost:8000/api/products", data).then(function () {
      alert("Produit créé!");
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement((react__WEBPACK_IMPORTED_MODULE_33___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_35__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("section", {
    className: "bg-green-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("form", {
    action: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("label", {
    htmlFor: ""
  }, "Nom"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("input", {
    className: "border",
    type: "text",
    onChange: OnChangeName
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("label", {
    htmlFor: ""
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("input", {
    className: "border",
    type: "text",
    onChange: OnChangeDesc
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("label", {
    htmlFor: ""
  }, "Prix"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("input", {
    className: "border",
    type: "text",
    onChange: OnChangePrice
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
    className: "flex justify-center",
    type: "button",
    onClick: function onClick() {
      return SubmitForm();
    }
  }, "Envoyer")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
    "data-aos": "fade-right",
    className: "containblue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_37__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
    className: " p-10 grid grid-cols-4 space-x-7 space-y-4 "
  }, posts.map(function (post) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", {
      key: post.id,
      className: "border text-center  "
    }, "Nom: ", post.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("br", null), "Description: ", post.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("button", {
      type: "button",
      className: "bg-green-700 p-2",
      onClick: function onClick() {
        return DeletePost(post.id);
      }
    }, "Supprimer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement("br", null));
  }), ";"))), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_33___default().createElement(_components_layouts_desktop__WEBPACK_IMPORTED_MODULE_36__["default"], null), " ");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "../frontend/src/pages/movies.jsx":
/*!****************************************!*\
  !*** ../frontend/src/pages/movies.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../frontend/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../frontend/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../frontend/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../frontend/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../frontend/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../frontend/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../frontend/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../frontend/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../frontend/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../frontend/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "../frontend/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../frontend/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "../frontend/node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../frontend/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../frontend/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../frontend/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../frontend/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../frontend/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "../frontend/node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "../frontend/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/lib/axios.js");
/* harmony import */ var _components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/tools/aos/aos */ "../frontend/src/components/tools/aos/aos.jsx");
/* harmony import */ var _components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/tools/navbar-des */ "../frontend/src/components/tools/navbar-des.jsx");
/* harmony import */ var _components_layouts_desktop__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/layouts/desktop */ "../frontend/src/components/layouts/desktop/index.jsx");





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Movies = function Movies() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("/api/movies").then(function (response) {
      console.log(response.data["hydra:member"]);
      setMovies(response.data["hydra:member"]);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      console.log("bien joué");
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid grid-cols-2 mx-5 space-x-3 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_aos_aos__WEBPACK_IMPORTED_MODULE_22__["default"], null), movies.map(function (movies) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      "data-aos": "fade-zoom-in",
      "data-aos-easing": "ease-in-back",
      "data-aos-delay": "300",
      "data-aos-offset": "0",
      key: movies.id,
      className: "bg-purple-500  border lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("video", {
      controls: true,
      width: "250"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("source", {
      src: movies.part,
      type: "video/mp4"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
      className: "text-white italic font-bold"
    }, "Titre : ", movies.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", null, "description: ", movies.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_layouts_desktop__WEBPACK_IMPORTED_MODULE_24__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Movies);

/***/ }),

/***/ "../frontend/src/pages/news.jsx":
/*!**************************************!*\
  !*** ../frontend/src/pages/news.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../frontend/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../frontend/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../frontend/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../frontend/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../frontend/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../frontend/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../frontend/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../frontend/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../frontend/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../frontend/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "../frontend/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../frontend/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "../frontend/node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../frontend/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../frontend/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../frontend/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../frontend/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../frontend/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "../frontend/node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "../frontend/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/lib/axios.js");
/* harmony import */ var _components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/tools/navbar-des */ "../frontend/src/components/tools/navbar-des.jsx");
/* harmony import */ var _components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/layouts/desktop */ "../frontend/src/components/layouts/desktop/index.jsx");





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var News = function News() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    news = _useState2[0],
    SetNews = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/api/news").then(function (response) {
      console.log(response.data["hydra:member"]);
      SetNews(response.data["hydra:member"]);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      console.log("lets gooo");
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid grid-cols-3 mx-5 space-x-3 space-y-5 "
  }, news.map(function (news) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      key: news.id,
      className: "bg-purple-500  border lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
      src: news.images,
      alt: "",
      height: 200,
      width: 270
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
      className: "text-white italic font-bold"
    }, "Titre : ", news.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), "description: ", news.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), "Prix: ", news.prix, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

/***/ }),

/***/ "../frontend/src/pages/teams.jsx":
/*!***************************************!*\
  !*** ../frontend/src/pages/teams.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../frontend/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../frontend/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../frontend/node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../frontend/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../frontend/node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../frontend/node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../frontend/node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "../frontend/node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../frontend/node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../frontend/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../frontend/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../frontend/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "../frontend/node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../frontend/node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "../frontend/node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "../frontend/node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../frontend/node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../frontend/node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../frontend/node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "../frontend/node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "../frontend/node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "../frontend/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "../frontend/node_modules/axios/lib/axios.js");
/* harmony import */ var _components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/tools/navbar-des */ "../frontend/src/components/tools/navbar-des.jsx");
/* harmony import */ var _components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/layouts/desktop */ "../frontend/src/components/layouts/desktop/index.jsx");





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Teams = function Teams() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    teams = _useState2[0],
    SetTeams = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("/api/teams").then(function (response) {
      console.log(response.data["hydra:member"]);
      SetTeams(response.data["hydra:member"]);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      console.log("lets gooo");
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement((react__WEBPACK_IMPORTED_MODULE_21___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_tools_navbar_des__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid grid-cols-5 mx-5 space-x-3 space-y-5 glass"
  }, teams.map(function (teams) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      key: teams.id,
      className: "bg-purple-500  border lg"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
      src: teams.picture,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
      className: "text-white italic font-bold"
    }, "Titre : ", teams.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), "description: ", teams.description, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), "NOM: ", teams.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("video", {
      controls: true,
      width: "250"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("source", {
      src: teams.pictures,
      type: "video/mp4"
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(_components_layouts_desktop__WEBPACK_IMPORTED_MODULE_23__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Teams);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-frontend_node_modules_aos_dist_aos_css-frontend_node_modules_aos_dist_aos_js-frontend-4acfce"], () => (__webpack_exec__("../frontend/app.jsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFZ0YsS0FBSyxDQUFDRSxPQUFRO01BQUN4QyxHQUFHLEVBQUM7SUFBRSxDQUFFLENBQUMsZUFDbENyRCwyREFBQTtNQUFJSSxTQUFTLEVBQUM7SUFBNkIsR0FBQyxVQUNsQyxFQUFDdUYsS0FBSyxDQUFDckMsS0FDYixDQUFDLGVBQ0x0RCwyREFBQSxXQUFLLENBQUMsaUJBQ08sRUFBQzJGLEtBQUssQ0FBQ3BDLFdBQVcsZUFDL0J2RCwyREFBQSxXQUFLLENBQUMsU0FDRCxFQUFDMkYsS0FBSyxDQUFDL0IsSUFBSSxlQUNoQjVELDJEQUFBLFdBQUssQ0FBQyxlQUNOQSwyREFBQTtNQUFPcUYsUUFBUTtNQUFDeEUsS0FBSyxFQUFDO0lBQUssZ0JBQ3pCYiwyREFBQTtNQUFRVyxHQUFHLEVBQUVnRixLQUFLLENBQUNHLFFBQVM7TUFBQ2IsSUFBSSxFQUFDO0lBQVcsQ0FBRSxDQUMxQyxDQUNKLENBQUM7RUFFVixDQUFDLENBQ0UsQ0FBQyxlQUNOakYsMkRBQUEsQ0FBQ0Usb0VBQVMsTUFBRSxDQUNaLENBQUM7QUFFUCxDQUFDO0FBQ0QsaUVBQWU2QixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL2xheW91dHMvZGVza3RvcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4uL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL3Rvb2xzL2Fvcy9hb3MuanN4Iiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvY29tcG9uZW50cy90b29scy9uYXZiYXItZGVzLmpzeCIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL21pZGRsZXdhcmUvcm91dGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL21pZGRsZXdhcmUvcm91dGVyL3Byb3ZpZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL3BhZ2VzL2FydGljbGVzLmpzeCIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL3BhZ2VzL2hvbWUuanN4Iiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvcGFnZXMvbW92aWVzLmpzeCIsIndlYnBhY2s6Ly8vLi4vZnJvbnRlbmQvc3JjL3BhZ2VzL25ld3MuanN4Iiwid2VicGFjazovLy8uLi9mcm9udGVuZC9zcmMvcGFnZXMvdGVhbXMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5cblxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9zcmMvbWlkZGxld2FyZS9yb3V0ZXJcIlxuUm91dGVyKClcbiIsIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmNvbnN0IEZvb3RlckRlcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJoaWRkZW4gYmctYW1iZXItNzAwIHRleHQtYmx1ZS01MDAgYm9yZGVyIGJvcmRlci1ibGFjayBsZzpmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyIHVwcGVyY2FzZSB0ZXh0LXhzIFwiPlxyXG4gICAgICAgICAgPHA+RnJvbnRTaWRlICA8L3A+XHJcbiAgICAgICAgICA8cD4mY29weTsgQ29weXJpZ2h0IC0gMjAyMzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvb3Rlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyRGVzO1xyXG4iLCJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgQW9zIGZyb20gXCJhb3NcIjtcclxuaW1wb3J0IFwiYW9zL2Rpc3QvYW9zLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFPUyA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQW9zLmluaXQoeyBvbmNlOiBmYWxzZSB9KTtcclxuICB9LCBbXSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBT1M7XHJcbiIsIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5cclxuY29uc3QgTmF2QmFyID0gKCkgPT4gKFxyXG4gIDxuYXYgY2xhc3NOYW1lPVwiIGdyYWRpZW50LWJhY2tncm91bmQgIGJnLXJlZC04MDAgcHktMyBmbGV4IGp1c3RpZnktY2VudGVyIFwiPlxyXG4gICAgPHVsID5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aW1nIHNyYz1cIi9odHRwczovL3d3dy5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXZlY3Rvci9mdW5ueS1za2F0ZWJvYXJkLXNrYXRlLXBhcmstdmludGFnZS02MDB3LTE5NzU5NzAyNjEuanBnXCJoZWlnaHQ9ezEwMH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwMH0gIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNSBzcGFjZS14LTUgdGV4dC1jZW50ZXIgXCI+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgIDxMaW5rIG9uQ2xpY2s9e3RydWV9IHRvPVwiL1wiPkFjY2V1aWw8L0xpbms+XHJcbiAgICAgIDwvbGk+IDxsaT5cclxuICAgICAgICA8TGluayBvbkNsaWNrPXt0cnVlfSB0bz1cIi9hcnRpY2xlc1wiPkFydGljbGVzPC9MaW5rPlxyXG4gICAgICA8L2xpPlxyXG5cclxuICAgICAgPGxpPlxyXG4gICAgICAgICA8TGluayBvbkNsaWNrPXt0cnVlfSB0bz1cIi9uZXdzXCI+TmV3czwvTGluaz5cclxuICAgICAgPC9saT5cclxuXHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBvbkNsaWNrPXt0cnVlfSB0bz1cIi9tb3ZpZXNcIj5Nb3ZpZXM8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcblxyXG4gICAgICA8bGk+XHJcbiAgICAgICAgPExpbmsgb25DbGljaz17dHJ1ZX0gdG89XCIvdGVhbXNcIj5UZWFtczwvTGluaz5cclxuICAgICAgPC9saT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC91bD5cclxuICA8L25hdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjtcclxuXHJcbk5hdkJhcigpIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2NyZWF0ZVJvb3R9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XHJcbmltcG9ydCB7Um91dGVyUHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcIi4vcHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IFJvdXRlciA9ICgpPT57XHJcbiAgICBjb25zdCBjb250YWluZXI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpO1xyXG4gICAgY29uc3Qgcm9vdD0gY3JlYXRlUm9vdChjb250YWluZXIpO1xyXG4gICAgcm9vdC5yZW5kZXIoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtQcm92aWRlcn0vPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IEhvbWUgZnJvbSBcIi4uLy4uL3BhZ2VzL2hvbWVcIjtcclxuaW1wb3J0IEFydGljbGVzIGZyb20gXCIuLi8uLi9wYWdlcy9hcnRpY2xlc1wiO1xyXG5pbXBvcnQgTW92aWVzIGZyb20gXCIuLi8uLi9wYWdlcy9tb3ZpZXNcIjtcclxuaW1wb3J0IE5ld3MgZnJvbSBcIi4uLy4uL3BhZ2VzL25ld3NcIjtcclxuaW1wb3J0IFRlYW1zIGZyb20gXCIuLi8uLi9wYWdlcy90ZWFtc1wiO1xyXG4vLyBpbXBvcnQgUHJvZmlsIGZyb20gXCIuLi8uLi9wYWdlcy9EYXNoYm9hcmRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IGNyZWF0ZUJyb3dzZXJSb3V0ZXIoW1xyXG4gIHtcclxuICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgZWxlbWVudDogPEhvbWUgLz4sXHJcbiAgfSxcclxuIHtcclxuICAgICAgIHBhdGg6XCIvYXJ0aWNsZXNcIixcclxuICAgICAgZWxlbWVudDo8QXJ0aWNsZXMvPixcclxuICAgfSxcclxuICAge1xyXG4gICAgcGF0aDpcIi9tb3ZpZXNcIixcclxuICAgZWxlbWVudDo8TW92aWVzLz4sXHJcbn0sICAgXHJcbntcclxuICBwYXRoOlwiL25ld3NcIixcclxuIGVsZW1lbnQ6PE5ld3MvPixcclxufSxcclxue1xyXG4gIHBhdGg6XCIvdGVhbXNcIixcclxuIGVsZW1lbnQ6PFRlYW1zLz4sXHJcbn0sICAgXHJcbl0pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy90b29scy9uYXZiYXItZGVzXCI7XHJcbmltcG9ydCBGb290ZXJEZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrdG9wXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9vbHMvYW9zL2Fvc1wiO1xyXG5cclxuY29uc3QgQXJ0aWNsZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FydGljbGVzLCBzZXRBcnRpY2xlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXCIvYXBpL2FydGljbGVzXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG4gICAgICAgIHNldEFydGljbGVzKHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiaWVuIGpvdcOpXCIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZCYXIgLz5cclxuICAgICAgICA8QU9TLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBteC01IHNwYWNlLXgtMyAgXCI+XHJcbiAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2FydGljbGUuaWR9IGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MDAgZ2xhc3MgIGJvcmRlciBsZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXthcnRpY2xlLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGl0YWxpYyBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIFRpdHJlIDoge2FydGljbGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge2FydGljbGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXJEZXMvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXM7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHByb2Nlc3MgZnJvbSBcInByb2Nlc3NcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy90b29scy9uYXZiYXItZGVzXCI7XHJcbmltcG9ydCBGb290ZXJEZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrdG9wXCI7XHJcbmltcG9ydCBBT1MgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9vbHMvYW9zL2Fvc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3JlYXRlUG9zdCwgc2V0Q3JlYXRlUG9zdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBwcmljZTogMCxcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9hcGkvcHJvZHVjdHNcIilcclxuICAgICAgLy8gLmdldChwcm9jZXNzLmVudi5VUkxfVEVTVClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgc2V0UG9zdHMocmVzcG9uc2UuZGF0YVtcImh5ZHJhOm1lbWJlclwiXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJpZW4gam91w6lcIik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBEZWxldGVQb3N0ID0gKGlkKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhgSUQ6ICR7aWR9YClcclxuICAgIGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0cy8ke2lkfWApLnRoZW4oKCkgPT4ge1xyXG4gICAgICBhbGVydChcInN1Y2Nlc3NcIik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBPbkNoYW5nZU5hbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENyZWF0ZVBvc3Qoe1xyXG4gICAgICAuLi5jcmVhdGVQb3N0LFxyXG4gICAgICBuYW1lOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVBvc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IE9uQ2hhbmdlRGVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0Q3JlYXRlUG9zdCh7XHJcbiAgICAgIC4uLmNyZWF0ZVBvc3QsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKGNyZWF0ZVBvc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IE9uQ2hhbmdlUHJpY2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldENyZWF0ZVBvc3Qoe1xyXG4gICAgICAuLi5jcmVhdGVQb3N0LFxyXG4gICAgICBQcmljZTogcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coY3JlYXRlUG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgU3VibWl0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIG5hbWU6IGNyZWF0ZVBvc3QubmFtZSxcclxuICAgICAgZGVzY3JpcHRpb246IGNyZWF0ZVBvc3QuZGVzY3JpcHRpb24sXHJcbiAgICAgIHByaWNlOiBjcmVhdGVQb3N0LnByaWNlLFxyXG4gICAgfTtcclxuICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3RzXCIsIGRhdGEpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBhbGVydChcIlByb2R1aXQgY3LDqcOpIVwiKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIFxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDBcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5Ob208L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtPbkNoYW5nZU5hbWV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJib3JkZXJcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXtPbkNoYW5nZURlc2N9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+UHJpeDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlclwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e09uQ2hhbmdlUHJpY2V9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBTdWJtaXRGb3JtKCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRW52b3llclxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGNsYXNzTmFtZT1cImNvbnRhaW5ibHVlXCI+PEFPUyAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcC0xMCBncmlkIGdyaWQtY29scy00IHNwYWNlLXgtNyBzcGFjZS15LTQgXCI+XHJcbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cImJvcmRlciB0ZXh0LWNlbnRlciAgXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vbToge3Bvc3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7cG9zdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTcwMCBwLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gRGVsZXRlUG9zdChwb3N0LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPntcIiBcIn1cclxuICAgICAgPEZvb3RlckRlcyAvPntcIiBcIn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IEFPUyBmcm9tIFwiLi4vY29tcG9uZW50cy90b29scy9hb3MvYW9zXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9vbHMvbmF2YmFyLWRlc1wiO1xyXG5pbXBvcnQgRm9vdGVyRGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvZGVza3RvcFwiO1xyXG5cclxuY29uc3QgTW92aWVzID0oKT0+e1xyXG4gICAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLmdldChcIi9hcGkvbW92aWVzXCIpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuICAgICAgICAgIHNldE1vdmllcyhyZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmllbiBqb3XDqVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+PGRpdj48TmF2QmFyLz48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgbXgtNSBzcGFjZS14LTMgXCI+PEFPUy8+XHJcbiAgICAgICAgICB7bW92aWVzLm1hcCgobW92aWVzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBkYXRhLWFvcz1cImZhZGUtem9vbS1pblwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3MtZWFzaW5nPVwiZWFzZS1pbi1iYWNrXCJcclxuICAgICAgICAgICAgICBkYXRhLWFvcy1kZWxheT1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1hb3Mtb2Zmc2V0PVwiMFwiIGtleT17bW92aWVzLmlkfSBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAwICBib3JkZXIgbGdcIj5cclxuICAgICAgICAgICAgPHZpZGVvIGNvbnRyb2xzIHdpZHRoPVwiMjUwXCI+XHJcbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17bW92aWVzLnBhcnR9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBpdGFsaWMgZm9udC1ib2xkXCI+VGl0cmUgOiB7bW92aWVzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgPHA+ZGVzY3JpcHRpb246IHttb3ZpZXMuZGVzY3JpcHRpb259PC9wPiBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlckRlcy8+PC8+XHJcbiAgICApfTtcclxuIGV4cG9ydCBkZWZhdWx0IE1vdmllcyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy90b29scy9uYXZiYXItZGVzXCI7XHJcbmltcG9ydCBGb290ZXJEZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9kZXNrdG9wXCI7XHJcblxyXG5jb25zdCBOZXdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtuZXdzLCBTZXROZXdzXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcIi9hcGkvbmV3c1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuICAgICAgICBTZXROZXdzKHJlc3BvbnNlLmRhdGFbXCJoeWRyYTptZW1iZXJcIl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJsZXRzIGdvb29cIik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2QmFyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgbXgtNSBzcGFjZS14LTMgc3BhY2UteS01IFwiPlxyXG4gICAgICAgIHtuZXdzLm1hcCgobmV3cykgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e25ld3MuaWR9IGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MDAgIGJvcmRlciBsZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtuZXdzLmltYWdlc30gYWx0PVwiXCIgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MjcwfSAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGl0YWxpYyBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIFRpdHJlIDoge25ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge25ld3MuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgUHJpeDoge25ld3MucHJpeH1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDxGb290ZXJEZXMvPjwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9vbHMvbmF2YmFyLWRlc1wiO1xyXG5pbXBvcnQgRm9vdGVyRGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvZGVza3RvcFwiO1xyXG5cclxuXHJcbmNvbnN0IFRlYW1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZWFtcywgU2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiL2FwaS90ZWFtc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuICAgICAgICBTZXRUZWFtcyhyZXNwb25zZS5kYXRhW1wiaHlkcmE6bWVtYmVyXCJdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGV0cyBnb29vXCIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdkJhciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IG14LTUgc3BhY2UteC0zIHNwYWNlLXktNSBnbGFzc1wiPlxyXG4gICAgICAgIHt0ZWFtcy5tYXAoKHRlYW1zKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17dGVhbXMuaWR9IGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MDAgIGJvcmRlciBsZ1wiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXt0ZWFtcy5waWN0dXJlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGl0YWxpYyBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgIFRpdHJlIDoge3RlYW1zLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHt0ZWFtcy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICBOT006IHt0ZWFtcy5uYW1lfVxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDx2aWRlbyBjb250cm9scyB3aWR0aD1cIjI1MFwiPlxyXG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e3RlYW1zLnBpY3R1cmVzfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cclxuICAgICAgICAgICAgICA8L3ZpZGVvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyRGVzIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUZWFtcztcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsIlJlYWN0IiwiTGluayIsIkZvb3RlckRlcyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJBb3MiLCJ1c2VFZmZlY3QiLCJBT1MiLCJpbml0Iiwib25jZSIsIk5hdkJhciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwib25DbGljayIsInRvIiwiY3JlYXRlUm9vdCIsIlJvdXRlclByb3ZpZGVyIiwiUHJvdmlkZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicm9vdCIsInJlbmRlciIsIkZyYWdtZW50Iiwicm91dGVyIiwiY3JlYXRlQnJvd3NlclJvdXRlciIsIkhvbWUiLCJBcnRpY2xlcyIsIk1vdmllcyIsIk5ld3MiLCJUZWFtcyIsInBhdGgiLCJlbGVtZW50IiwidXNlU3RhdGUiLCJheGlvcyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiYXJ0aWNsZSIsImtleSIsImlkIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvY2VzcyIsInBvc3RzIiwic2V0UG9zdHMiLCJfdXNlU3RhdGUzIiwibmFtZSIsInByaWNlIiwiX3VzZVN0YXRlNCIsImNyZWF0ZVBvc3QiLCJzZXRDcmVhdGVQb3N0IiwiRGVsZXRlUG9zdCIsImNvbmNhdCIsImFsZXJ0IiwiT25DaGFuZ2VOYW1lIiwiZXZlbnQiLCJfb2JqZWN0U3ByZWFkIiwidGFyZ2V0IiwidmFsdWUiLCJPbkNoYW5nZURlc2MiLCJPbkNoYW5nZVByaWNlIiwiUHJpY2UiLCJwYXJzZUludCIsIlN1Ym1pdEZvcm0iLCJwb3N0IiwiYWN0aW9uIiwiaHRtbEZvciIsInR5cGUiLCJvbkNoYW5nZSIsIm1vdmllcyIsInNldE1vdmllcyIsImNvbnRyb2xzIiwicGFydCIsIm5ld3MiLCJTZXROZXdzIiwiaW1hZ2VzIiwicHJpeCIsInRlYW1zIiwiU2V0VGVhbXMiLCJwaWN0dXJlIiwicGljdHVyZXMiXSwic291cmNlUm9vdCI6IiJ9