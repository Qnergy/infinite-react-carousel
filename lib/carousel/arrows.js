"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Arrow = function Arrow(_ref) {
  var arrowsScroll = _ref.arrowsScroll,
    clickHandler = _ref.clickHandler,
    type = _ref.type,
    prevArrow = _ref.prevArrow,
    nextArrow = _ref.nextArrow,
    arrowsBlock = _ref.arrowsBlock;
  var ClickHandler = function ClickHandler(options, e) {
    e.preventDefault();
    clickHandler(options, e);
  };
  var classes = {
    'carousel-arrow': true,
    block: arrowsBlock
  };
  var arrowOptions = {
    arrowsScroll: arrowsScroll
  };
  if (type === 'prev') {
    Object.assign(classes, {
      'carousel-prev': true
    });
    if (prevArrow) {
      Object.assign(classes, {
        custom: true
      });
    }
    Object.assign(arrowOptions, {
      message: 'previous'
    });
  } else {
    Object.assign(classes, {
      'carousel-next': true
    });
    if (nextArrow) {
      Object.assign(classes, {
        custom: true
      });
    }
    Object.assign(arrowOptions, {
      message: 'next'
    });
  }
  var arrowProps = {
    key: type === 'prev' ? '0' : '1',
    'data-role': 'none',
    className: (0, _classnames["default"])(classes),
    // style: { display: 'block' },
    onClick: function onClick(e) {
      return ClickHandler(arrowOptions, e);
    }
  };
  // const customProps = {
  //   currentSlide,
  //   slideCount,
  // };
  var customArrow = null;
  if (prevArrow && type === 'prev') {
    customArrow = /*#__PURE__*/_react["default"].cloneElement(prevArrow, _objectSpread({}, arrowProps));
  } else if (nextArrow && type === 'next') {
    customArrow = /*#__PURE__*/_react["default"].cloneElement(nextArrow, _objectSpread({}, arrowProps));
  } else {
    customArrow = /*#__PURE__*/_react["default"].createElement("button", _extends({}, arrowProps, {
      key: type === 'prev' ? '0' : '1',
      type: "button"
    }), ' ', type === 'prev' ? 'Previous' : 'Next');
  }
  return customArrow;
};
Arrow.propTypes = _types.arrowsPropTypes;
Arrow.defaultProps = _types.arrowsDefaultProps;
var PrevArrow = function PrevArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    type: "prev"
  }, props));
};
exports.PrevArrow = PrevArrow;
var NextArrow = function NextArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    type: "next"
  }, props));
};
exports.NextArrow = NextArrow;