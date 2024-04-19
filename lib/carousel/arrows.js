"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevArrow = exports.NextArrow = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    block: false // arrowsBlock,
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
var PrevArrow = exports.PrevArrow = function PrevArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    type: "prev"
  }, props));
};
var NextArrow = exports.NextArrow = function NextArrow(props) {
  return /*#__PURE__*/_react["default"].createElement(Arrow, _extends({
    type: "next"
  }, props));
};