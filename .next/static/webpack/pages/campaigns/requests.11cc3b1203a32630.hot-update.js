"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_ethereuem_and_solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_ethereuem_and_solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_ethereuem_and_solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar RequestIndex = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(RequestIndex, Component);\n    var _super = _createSuper(RequestIndex);\n    function RequestIndex() {\n        _classCallCheck(this, RequestIndex);\n        return _super.apply(this, arguments);\n    }\n    _createClass(RequestIndex, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    __source: {\n                        fileName: \"D:\\\\ethereuem and solidity\\\\kickstart\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h3\", {\n                            __source: {\n                                fileName: \"D:\\\\ethereuem and solidity\\\\kickstart\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                lineNumber: 25,\n                                columnNumber: 9\n                            },\n                            __self: this,\n                            children: \"Requests\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_routes__WEBPACK_IMPORTED_MODULE_4__.Link, {\n                            to: \"/campaigns/\".concat(this.props.address, \"/requests/new\"),\n                            __source: {\n                                fileName: \"D:\\\\ethereuem and solidity\\\\kickstart\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                                __source: {\n                                    fileName: \"D:\\\\ethereuem and solidity\\\\kickstart\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                    primary: true,\n                                    __source: {\n                                        fileName: \"D:\\\\ethereuem and solidity\\\\kickstart\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: \"Add Request\"\n                                })\n                            })\n                        })\n                    ]\n                }));\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(props) {\n                return _asyncToGenerator(D_ethereuem_and_solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var address, campaign, requestsCount, requests;\n                    return D_ethereuem_and_solidity_kickstart_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                address = props.query.address;\n                                campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(address);\n                                _ctx.next = 4;\n                                return _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__[\"default\"].methods.getRequestsCount().call();\n                            case 4:\n                                requestsCount = _ctx.sent;\n                                _ctx.next = 7;\n                                return Promise.all(Array(parseInt(requestsCount)).fill.map(function(element, index) {\n                                    return campaign.methods.requests(index).call();\n                                }));\n                            case 7:\n                                requests = _ctx.sent;\n                                return _ctx.abrupt(\"return\", {\n                                    address: address,\n                                    requests: requests,\n                                    requestsCount: requestsCount\n                                });\n                            case 9:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return RequestIndex;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestIndex);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0U7QUFDSztBQUNUO0FBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFM0NNLFlBQVksaUJBQWxCLFFBQVE7O2NBQUZBLFlBQVk7OEJBQVpBLFlBQVk7YUFBWkEsWUFBWTs4QkFBWkEsWUFBWTs7O2lCQUFaQSxZQUFZOztZQWVoQkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLE1BQU0sdUVBQ0hKLDBEQUFNOzs7Ozs7Ozs2RkFDSkssQ0FBRTs7Ozs7OztzQ0FBQyxDQUFROzs2RkFDWEoseUNBQUk7NEJBQUNLLEVBQUUsRUFBRyxDQUFXLGFBQXFCLE1BQWEsQ0FBaEMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE9BQU8sRUFBQyxDQUFhOzs7Ozs7OzJHQUNyREMsQ0FBQzs7Ozs7OzsrR0FDQ1YscURBQU07b0NBQUNXLE9BQU87Ozs7Ozs7OENBQUMsQ0FBVzs7Ozs7O1lBS3JDLENBQUM7Ozs7WUF6QmNDLEdBQWUsRUFBZkEsQ0FBZTttQkFBNUIsUUFBUSxDQUFLQSxlQUFlLENBQUNKLEtBQUs7c0xBQWxDLFFBQVEsV0FBMkIsQ0FBQzt3QkFDekJDLE9BQU8sRUFDUkksUUFBUSxFQUNSQyxhQUFhLEVBRWJDLFFBQVE7Ozs7Z0NBSlBOLE9BQU8sR0FBRUQsS0FBSyxDQUFDUSxLQUFLLENBQXBCUCxPQUFPO2dDQUNSSSxRQUFRLEdBQUNWLDhEQUFRLENBQUNNLE9BQU87O3VDQUNMTixtRkFBaUMsR0FBR2dCLElBQUk7O2dDQUE1REwsYUFBYTs7dUNBRUVNLE9BQU8sQ0FBQ0MsR0FBRyxDQUM5QkMsS0FBSyxDQUFDQyxRQUFRLENBQUNULGFBQWEsR0FBR1UsSUFBSSxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUNDLEtBQUssRUFBRyxDQUFDO29DQUN4RCxNQUFNLENBQUNkLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDRixRQUFRLENBQUNZLEtBQUssRUFBRVIsSUFBSTtnQ0FDOUMsQ0FBQzs7Z0NBSEdKLFFBQVE7NkRBTVAsQ0FBQ047b0NBQUFBLE9BQU8sRUFBUEEsT0FBTztvQ0FBQ00sUUFBUSxFQUFSQSxRQUFRO29DQUFDRCxhQUFhLEVBQWJBLGFBQWE7Z0NBQUEsQ0FBQzs7Ozs7O2dCQUUzQyxDQUFDOzs7O1dBZENWLFlBQVk7RUFBU0wsNENBQVM7QUE2QnBDLCtEQUFlSyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL2luZGV4LmpzP2Q2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi8uLi8uLi9yb3V0ZXNcIjtcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uLy4uL2V0aGVyZXVtL2NhbXBhaWduJztcclxuXHJcbmNsYXNzIFJlcXVlc3RJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdCB7YWRkcmVzc309cHJvcHMucXVlcnk7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ249Q2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdHNDb3VudD1hd2FpdCBDYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RzQ291bnQoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzPWF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdHNDb3VudCkpLmZpbGwubWFwKChlbGVtZW50LGluZGV4KT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4ge2FkZHJlc3MscmVxdWVzdHMscmVxdWVzdHNDb3VudH07XHJcblxyXG4gICAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cclxuICAgICAgICA8TGluayB0bz17YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0SW5kZXgiLCJyZW5kZXIiLCJoMyIsInRvIiwicHJvcHMiLCJhZGRyZXNzIiwiYSIsInByaW1hcnkiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbiIsInJlcXVlc3RzQ291bnQiLCJyZXF1ZXN0cyIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/index.js\n");

/***/ })

});