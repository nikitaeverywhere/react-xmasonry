/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XBlock = function (_React$Component) {
    _inherits(XBlock, _React$Component);

    function XBlock() {
        _classCallCheck(this, XBlock);

        return _possibleConstructorReturn(this, (XBlock.__proto__ || Object.getPrototypeOf(XBlock)).apply(this, arguments));
    }

    _createClass(XBlock, [{
        key: "render",
        value: function render() {
            var dataAttributes = {
                "data-key": this.props["data-key"],
                "data-width": this.props["data-width"]
            };
            if (this.props["data-xkey"]) dataAttributes["data-xkey"] = this.props["data-xkey"];
            return _react2.default.createElement(
                "div",
                _extends({}, dataAttributes, { style: _extends({}, this.props.style, XBlock.defaultStyle),
                    className: this.props.measured ? "xblock" : "" }),
                this.props.children
            );
        }
    }]);

    return XBlock;
}(_react2.default.Component);

XBlock.defaultProps = {
    width: 1,
    measured: false
};
XBlock.defaultStyle = {
    position: "absolute"
};
exports.default = XBlock;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XMasonry = function (_React$Component) {
    _inherits(XMasonry, _React$Component);

    /**
     * The width of XMasonry block in pixels. Is assigned dynamically, must be in stick with the
     * state property.
     * @type {number}
     */


    /**
     * XMasonry layout container.
     * @type {HTMLElement}
     */
    function XMasonry(props) {
        _classCallCheck(this, XMasonry);

        var _this = _possibleConstructorReturn(this, (XMasonry.__proto__ || Object.getPrototypeOf(XMasonry)).call(this, props));

        _this.state = {
            blocks: {},
            containerHeight: 0,
            columns: 3,
            containerWidth: 0
        };
        _this.container = null;
        _this.mounted = false;
        _this.resizeListener = null;
        _this.debouncedResizeTimeout = 0;
        _this.debounceRate = 50;
        _this.fixedHeight = 0;
        _this.containerWidth = 0;

        if (_this.props.responsive) window.addEventListener("resize", _this.resizeListener = _this.onResize.bind(_this));
        _this.onResize();
        return _this;
    }

    /**
     * This property assigns the fixed height to XMasonry container. The purpose of this is to
     * prevent masonry layout from updating infinitely. For example, when the elements get measured
     * and placed first time, the scroll bar may appear. Because of the width change XMasonry will
     * go to recalculate sizes once more, appearing at the state 0 again because elements to
     * calculate get detached from the DOM. This creates an infinite loop. The solution for this is
     * to fix the container's previously calculated height until all the elements will be measured.
     * @type {number}
     */


    /**
     * De-bouncing properties used to prevent size recalculations being called very often.
     * @type {number}
     */


    _createClass(XMasonry, [{
        key: "updateContainerWidth",
        value: function updateContainerWidth() {
            var newWidth = this.container.getBoundingClientRect().width;
            console.log(newWidth, this.containerWidth);
            if (newWidth === this.containerWidth) return;
            this.setState({
                containerWidth: this.containerWidth = newWidth,
                blocks: {} // the problem is that when layout is gone to recalculate again,
                // it need to consider that no scroll bars changes the width.
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            this.mounted = true;
            this.updateContainerWidth();
            this.measureChildren();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.mounted = false;
            if (this.resizeListener) window.removeEventListener("resize", this.resizeListener);
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.updateContainerWidth();
            this.measureChildren();
        }
    }, {
        key: "measureChildren",
        value: function measureChildren() {
            var blocks = {};
            for (var i = 0; i < this.container.children.length; i++) {
                var child = this.container.children[i];
                if (!child.dataset.hasOwnProperty("xkey")) continue;

                var _child$getBoundingCli = child.getBoundingClientRect(),
                    height = _child$getBoundingCli.height;

                blocks[child.dataset["xkey"]] = { height: Math.ceil(height) };
            }
            if (Object.keys(blocks).length > 0) this.recalculatePositions(blocks);
        }
    }, {
        key: "recalculatePositions",
        value: function recalculatePositions() {
            var newBlocks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            var blocks = _extends({}, this.state.blocks, newBlocks),
                heights = Array.from({ length: this.state.columns }, function () {
                return 0;
            });
            for (var i = 0; i < this.container.children.length; i++) {
                var child = this.container.children[i];
                if (!blocks.hasOwnProperty(child.dataset.key)) continue;
                var blockWidth = +child.dataset.width || 1,
                    _XMasonry$getBestFitC = XMasonry.getBestFitColumn(heights, blockWidth),
                    col = _XMasonry$getBestFitC.col,
                    height = _XMasonry$getBestFitC.height,
                    newHeight = height + blocks[child.dataset.key].height;

                blocks[child.dataset.key].left = col * Math.floor(10000 / this.state.columns) / 100 + "%";
                blocks[child.dataset.key].top = height + "px";
                for (var _i = 0; _i < blockWidth; ++_i) {
                    heights[col + _i] = newHeight;
                }
            }
            this.setState({ blocks: blocks, containerHeight: Math.max.apply(null, heights) });
        }

        /**
         * This method is triggered when component gets created (before the mount) and when resize
         * happens. This method uses de-bouncing technique to prevent updates from being called very
         * often.
         */

    }, {
        key: "onResize",
        value: function onResize() {
            var _this2 = this;

            if (!this.mounted) return;
            if (this.debouncedResizeTimeout) {
                clearTimeout(this.debouncedResizeTimeout);
                this.debouncedResizeTimeout = setTimeout(function () {
                    _this2.debouncedResizeTimeout = null;
                    _this2.updateContainerWidth(_this2);
                }, this.debounceRate);
                return;
            }
            this.updateContainerWidth();
            this.debouncedResizeTimeout = setTimeout(function () {
                return _this2.debouncedResizeTimeout = 0;
            }, this.debounceRate);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var cardWidth = Math.floor(10000 / this.state.columns) / 100;

            var _React$Children$toArr = _react2.default.Children.toArray(this.props.children).reduce(function (acc, element) {
                var measured = _this3.state.blocks[element.key],
                    // || undefined
                width = Math.min(element.props.width, _this3.state.columns);
                acc[measured ? 0 : 1].push(measured ? _react2.default.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": width,
                    "style": _extends({
                        width: cardWidth * element.props.width + "%"
                    }, measured),
                    "measured": true,
                    "width": width
                }) : _react2.default.cloneElement(element, {
                    "data-key": element.key,
                    "data-width": width,
                    "data-xkey": element.key,
                    "style": {
                        width: cardWidth * element.props.width + "%",
                        visibility: "hidden"
                    },
                    "width": width
                }));
                return acc;
            }, [[], []]),
                _React$Children$toArr2 = _slicedToArray(_React$Children$toArr, 2),
                measuredElements = _React$Children$toArr2[0],
                elementsToMeasure = _React$Children$toArr2[1];

            var actualHeight = elementsToMeasure.length ? this.fixedHeight : this.fixedHeight = this.state.containerHeight;
            return _react2.default.createElement(
                "div",
                { className: "xmasonry", style: _extends({}, XMasonry.containerStyle, {
                        height: actualHeight
                    }), ref: function ref(c) {
                        return _this3.container = c;
                    } },
                measuredElements,
                elementsToMeasure
            );
        }
    }], [{
        key: "getBestFitColumn",
        value: function getBestFitColumn(heights) {
            var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            var minIndex = 0,
                minHeight = Infinity;
            for (var i = 0; i < heights.length - width + 1; ++i) {
                var currentMinHeight = Math.max.apply(null, heights.slice(i, i + width));
                if (currentMinHeight < minHeight) {
                    minHeight = currentMinHeight;
                    minIndex = i;
                }
            }
            return { col: minIndex, height: minHeight };
        }
    }]);

    return XMasonry;
}(_react2.default.Component);

XMasonry.defaultProps = {
    responsive: true
};
XMasonry.containerStyle = {
    position: "relative"
};
exports.default = XMasonry;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.XBlock = exports.XMasonry = undefined;

var _XMasonry = __webpack_require__(2);

var _XMasonry2 = _interopRequireDefault(_XMasonry);

var _XBlock = __webpack_require__(1);

var _XBlock2 = _interopRequireDefault(_XBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.XMasonry = _XMasonry2.default;
exports.XBlock = _XBlock2.default;


if (typeof window !== "undefined") {
    window.XMasonry = _XMasonry2.default;
    window.XBlock = _XBlock2.default;
}

/***/ })
/******/ ]);