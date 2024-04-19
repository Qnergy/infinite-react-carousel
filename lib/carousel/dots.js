"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _types = require("./types");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var getDotCount = function getDotCount(spec) {
  return Math.ceil(spec.slideCount / spec.dotsScroll);
};
var Dots = function Dots(_ref) {
  var slideCount = _ref.slideCount,
    dotsScroll = _ref.dotsScroll,
    slidesToShow = _ref.slidesToShow,
    infinite = _ref.infinite,
    activeIndex = _ref.activeIndex,
    clickHandler = _ref.clickHandler,
    onMouseEnter = _ref.onMouseEnter,
    onMouseOver = _ref.onMouseOver,
    onMouseLeave = _ref.onMouseLeave,
    customPaging = _ref.customPaging,
    appendDots = _ref.appendDots,
    dotsClass = _ref.dotsClass;
  var ClickHandler = function ClickHandler(options, e) {
    // In Autoplay the focus stays on clicked button even after transition
    // to next slide. That only goes away by click somewhere outside
    e.preventDefault();
    clickHandler(options);
  };
  // Apply join & split to Array to pre-fill it for IE8
  //
  // Credit: http://stackoverflow.com/a/13735425/1849458
  var dotCount = getDotCount({
    slideCount: slideCount,
    dotsScroll: dotsScroll,
    slidesToShow: slidesToShow,
    infinite: infinite
  });
  var dots = Array.apply([], Array(dotCount + 1).join('0').split('')).map(function (x, i) {
    var leftBound = i * dotsScroll;
    var rightBound = i * dotsScroll + (dotsScroll - 1);
    var className = (0, _classnames["default"])({
      'carousel-dots-active': activeIndex >= leftBound && activeIndex <= rightBound
    });
    var dotOptions = {
      message: 'dots',
      index: i,
      dotsScroll: dotsScroll,
      activeIndex: activeIndex
    };
    return /*#__PURE__*/_react["default"].createElement("li", {
      className: "".concat(className, " carousel-dot-").concat(i + 1),
      key: "".concat(new Date().getTime() * i)
    }, /*#__PURE__*/_react["default"].cloneElement(customPaging(i), {
      onClick: function onClick(e) {
        return ClickHandler(dotOptions, e);
      }
    }));
  });
  return /*#__PURE__*/_react["default"].cloneElement(appendDots(dots), _objectSpread({
    className: dotsClass
  }, {
    onMouseEnter: onMouseEnter,
    onMouseOver: onMouseOver,
    onMouseLeave: onMouseLeave
  }));
};
Dots.defaultProps = _types.dotsDefaultProps;
Dots.propTypes = _types.dotsPropTypes;
var _default = exports["default"] = Dots;