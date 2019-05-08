(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        Craigslist: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/Craigslist/Craigslist.js", "vendors~Craigslist" ]);
    return checkDeferredModules();
})({
    "./assets/js/Craigslist/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");\n/* harmony import */ var _includes_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./includes/Header.js */ "./assets/js/Craigslist/includes/Header.js");\n/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Home.js */ "./assets/js/Craigslist/pages/Home.js");\n/* harmony import */ var _pages_Listings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Listings.js */ "./assets/js/Craigslist/pages/Listings.js");\n/* harmony import */ var _pages_Category_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Category.js */ "./assets/js/Craigslist/pages/Category.js");\n/* harmony import */ var _pages_Details_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Details.js */ "./assets/js/Craigslist/pages/Details.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Jon\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* BrowserRouter */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_includes_Header_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ "a"], {\n      exact: true,\n      path: "/",\n      component: _pages_Home_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ "a"], {\n      exact: true,\n      path: "/:city",\n      component: _pages_Home_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ "a"], {\n      exact: true,\n      path: "/:city/:category",\n      component: _pages_Category_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ "a"], {\n      exact: true,\n      path: "/:city/:category/:listings",\n      component: _pages_Listings_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[/* Route */ "a"], {\n      exact: true,\n      path: "/:city/:category/:listings/:items",\n      component: _pages_Details_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"]\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/App.js?');
    },
    "./assets/js/Craigslist/Craigslist.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./assets/js/Craigslist/App.js");\n\n\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), app);\n\n//# sourceURL=webpack:///./assets/js/Craigslist/Craigslist.js?');
    },
    "./assets/js/Craigslist/includes/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.state = {\n      name: \'Jon\'\n    };\n  }\n\n  test() {\n    return _asyncToGenerator(function* () {})();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'left-menu\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'logo\'\n    }, "Craigslist "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'city\'\n    }, \' \', "London", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: `fas fa-caret-down`\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'right-menu\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'user-img\'\n    }, "Img"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'user-dropdown\'\n    }, "My Account", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: `fas fa-caret-down`\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'post-btn\'\n    }, "Post to classifieds "))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/includes/Header.js?');
    },
    "./assets/js/Craigslist/pages/Category.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Category extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    const _this$props = this.props,\n          match = _this$props.match,\n          location = _this$props.location,\n          history = _this$props.history;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "category"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, "this category is", match.params.category));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/pages/Category.js?');
    },
    "./assets/js/Craigslist/pages/Details.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Details; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Gallery.js */ "./assets/js/Craigslist/pages/components/Gallery.js");\n\n\n\nclass Details extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    const _this$props = this.props,\n          match = _this$props.match,\n          location = _this$props.location,\n          history = _this$props.history;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "details-page"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "white-box"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "submenu"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "direction"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "prev"\n    }, "Prev"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#",\n      className: "next"\n    }, "Next")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n      className: "sub-links"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "More Ads by User"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Print"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Share"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n      href: "#"\n    }, "Contact Seller"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "content-area"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "media-column"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Gallery_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "details-column"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "date"\n    }, "Posted: September 6th 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {\n      className: "title"\n    }, "Black 2015 Mercedes 200"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {\n      className: "price"\n    }, "$16,000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "more-details"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Vin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "fgggggggg")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Mileage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "3366")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Transmission"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Manual")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Vin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "fgggggggg")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Mileage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "3366")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Transmission"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Manual"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "description"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Description "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium veritatis debitis, nisi animi nam totam? Similique adipisci ad temporibus, sapiente consequuntur corporis, impedit quis ab reprehenderit iste explicabo. Minus."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium veritatis debitis, nisi animi nam totam? Similique adipisci ad temporibus, sapiente consequuntur corporis, impedit quis ab reprehenderit iste explicabo. Minus."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium veritatis debitis, nisi animi nam totam? Similique adipisci ad temporibus, sapiente consequuntur corporis, impedit quis ab reprehenderit iste explicabo. Minus."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo praesentium veritatis debitis, nisi animi nam totam? Similique adipisci ad temporibus, sapiente consequuntur corporis, impedit quis ab reprehenderit iste explicabo. Minus.")))))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/pages/Details.js?');
    },
    "./assets/js/Craigslist/pages/Home.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {\n      console.log();\n    };\n\n    this.loopCategories = () => {\n      let testArray = [1, 2, 3, 4, 5, 6, 7];\n      return testArray.map((item, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "categories",\n          key: i\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "title"\n        }, " Community "), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "group-links"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Community", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "General", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Activities", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Groups", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Artists", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Local News", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Child Care", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Lost & found", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Classes", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Musician", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Events", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n          href: "#",\n          className: "link"\n        }, \' \', "Pets", \' \'), \' \'), \' \');\n      });\n    };\n\n    this.loopTags = () => {\n      let testTags = [\'a\', \'b\', \'c\', \'d\', \'e\', \'f\', \'g\', \'h\', \'i\', \'j\'];\n      return testTags.map((item, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        key: i,\n        className: "tag"\n      }, \' \', "Apple MacBook", \' \'));\n    };\n\n    this.state = {\n      name: \'Jon\'\n    };\n  }\n\n  componentWillMount() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\'/api/categories\').then(function (response) {\n      console.log(response.data);\n    }).catch(function (error) {\n      console.log(error);\n    });\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "Home"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Connecting People ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " Everywere: )", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: \'Links\'\n    }, " ", this.loopCategories(), " "), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: \'trending\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      name: "search",\n      className: "search"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "title"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "far fa-clock"\n    }), "Trending Now", \' \'), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "trending-tags"\n    }, " ", this.loopTags(), " "), \' \'), \' \'), \' \');\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/pages/Home.js?');
    },
    "./assets/js/Craigslist/pages/Listings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Listings; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Listings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.loopItems = () => {\n      let testArray = [1, 2, 3, 4, 5, 6, 7, 8];\n      return testArray.map((item, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "categories",\n          key: i\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "item"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "image"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "price"\n        }, "$6100"), "image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "details"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n          className: "fas fa-star"\n        }), "2015 Mercedes C300"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Dubai"))));\n      });\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    const _this$props = this.props,\n          match = _this$props.match,\n          location = _this$props.location,\n          history = _this$props.history;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "listings-page"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "filter"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " Price "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "min-max"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "min-price",\n      className: "min-price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "0"\n    }, "0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "max-price",\n      className: "max-price"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "1000"\n    }, " 1000")))), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group make"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " Make "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "make",\n      className: "make"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "bmw"\n    }, "bmw"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group model"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, " Model "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "model",\n      className: "model"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "bmw"\n    }, "bmw"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group button"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "primary-btn"\n    }, "Update"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "reset-btn"\n    }, "Reset")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "list-view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "white-box"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "change-view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group view-dropdown"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "select-view",\n      className: "select-view"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "gallery"\n    }, "Gallery view"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "list"\n    }, "List view"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "thumb"\n    }, "List view"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group sort-dropdown"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {\n      name: "sort-dropdown",\n      className: "sort-dropdown"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {\n      value: "gallery"\n    }, "Newest")))), \' \', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      className: "all-items"\n    }, this.loopItems())))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/pages/Listings.js?');
    },
    "./assets/js/Craigslist/pages/components/Gallery.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Gallery; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Gallery extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.allImgsLoop = () => {\n      console.log(this.state.allImgs);\n      return this.state.allImgs.map((item, i) => {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          key: i,\n          onClick: this.clickedThumb.bind(null, i),\n          className: "thumb-img",\n          style: {\n            backgroundImage: `url(\'${item}\')`\n          }\n        });\n      });\n    };\n\n    this.nextBtn = () => {\n      if (this.state.currentIndex != this.state.allImgs.length - 1) {\n        this.setState({\n          currentIndex: this.state.currentIndex + 1\n        });\n      }\n    };\n\n    this.prevBtn = () => {\n      if (this.state.currentIndex != 0) {\n        this.setState({\n          currentIndex: this.state.currentIndex - 1\n        });\n      }\n    };\n\n    this.clickedThumb = index => {\n      this.setState({\n        currentIndex: index\n      });\n    };\n\n    this.state = {\n      allImgs: \'\',\n      currentImg: \'\',\n      currentIndex: 0\n    };\n  }\n\n  componentWillMount() {\n    const allImgs = [\'https://img1.icarcdn.com/2907534/gallery_recon-car-carlist-mercedes-benz-c-class-c200-avantgarde-sedan-malaysia_2907534_mG2KcdaLGbkm2FDcApMdDs.jpg?smia=xTM\', \'https://images.pexels.com/photos/1236792/pexels-photo-1236792.jpeg?cs=srgb&dl=auto-automobile-automotive-1236792.jpg&fm=jpg\', \'https://trademe.tmcdn.co.nz/photoserver/full/724493492.jpg\', \'https://cdn1.carbuyer.co.uk/sites/carbuyer_d7/files/styles/gallery_adv/public/2018/06/10-mercedes-aclass-steering-wheel.jpg?itok=UxEOwC4D\', \'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mercedes-benz-a-class-interior.jpg?itok=qQyl_aTb\', \'https://images.unsplash.com/photo-1529765096899-5c3c546419ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80\'];\n    this.setState({\n      allImgs,\n      currentImg: allImgs[this.state.currentIndex]\n    });\n  }\n\n  render() {\n    const _this$props = this.props,\n          match = _this$props.match,\n          location = _this$props.location,\n          history = _this$props.history;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "gallery"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "slider"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "main-image"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "arrows left-arrow",\n      onClick: this.prevBtn\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-chevron-left"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "arrows right-arrow",\n      onClick: this.nextBtn\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-chevron-right"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "image-1",\n      style: {\n        backgroundImage: `url(\'${this.state.allImgs[this.state.currentIndex]}\')`\n      }\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "thumbnails"\n    }, this.allImgsLoop()));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Craigslist/pages/components/Gallery.js?');
    }
});