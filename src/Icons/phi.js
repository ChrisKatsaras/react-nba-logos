"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PHI = function PHI(props) {
  var size = props.size;
  return _react["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: size,
    height: size,
    viewBox: "0 0 150 150",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "A_PHI",
    d: "M.103.043H44.43v64.644H.103z"
  }), _react["default"].createElement("path", {
    id: "B_PHI",
    d: "M0 .08h46.163v65.796H0z"
  }), _react["default"].createElement("path", {
    id: "C_PHI",
    d: "M.063 0h6.82v6.442H.063z"
  })), _react["default"].createElement("g", {
    transform: "translate(33 24)",
    fill: "none",
    fillRule: "evenodd"
  }, _react["default"].createElement("g", {
    transform: "translate(38.632 37.188)"
  }, _react["default"].createElement("mask", {
    id: "D_PHI",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#A_PHI"
  })), _react["default"].createElement("path", {
    d: "M22.48 58.327c-4.855 0-4.648-6.215-4.648-13.382 0-7.173.68-13.37 4.648-13.37 4.873 0 5.134 6.196 5.134 13.37 0 7.168-1 13.382-5.134 13.382m6.027-35.17c-4.342 0-8.8 1.734-11.13 5.37h-.082l.436-6.292c.253-4.25 1.22-15.812 7.12-15.812 2.836 0 2.2 3.762 2.52 5.47.78 4 2.526 8.6 8.01 8.6 3.736 0 7.652-2.473 7.652-7.528 0-7.794-6.523-12.91-14.438-12.91C8.264.043.103 15.546.103 34.318c0 16.3 6.338 30.37 23.798 30.37 11.337 0 20.53-8.056 20.53-21.596 0-11.44-6.056-19.934-15.923-19.934",
    fill: "#006ab6",
    mask: "url(#D_PHI)"
  })), _react["default"].createElement("g", {
    transform: "translate(0 36.125)"
  }, _react["default"].createElement("mask", {
    id: "E_PHI",
    fill: "#fff"
  }, _react["default"].createElement("use", {
    xlinkHref: "#B_PHI"
  })), _react["default"].createElement("path", {
    d: "M0 .773v24.193c13.562 2 29.75.672 41.19-16.052.48-.71.763-.21.454.4-3.197 6.503-10.757 12.514-17.293 17.64C18.07 31.89 1.225 49.556 1.446 65.1c.016 1.193.054.866 1.104.085 5.115-3.793 15.127-3.914 21.276-.97.864.402.926.28.825-.827-1.18-12.043 1.53-25.198 6.698-32.83C34.905 25.255 44.484 11.64 46.134.956c.17-1.108-.4-.936-1.784.523C33.497 12.932 13.88 12.653 1.225.518.425-.252.07.093 0 .773",
    fill: "#ec174b",
    mask: "url(#E_PHI)"
  })), _react["default"].createElement("mask", {
    fill: "#fff",
    transform: "translate(20.025)"
  }, _react["default"].createElement("use", {
    xlinkHref: "#C_PHI"
  })), _react["default"].createElement("path", {
    d: "M23.5 0l.775 2.47h2.622l-2.133 1.545.78 2.427-2.045-1.487-2.078 1.487.774-2.437-2.12-1.535h2.622zm15.532 9.03l.795 2.45h2.63l-2.134 1.555.782 2.423-2.065-1.497-2.072 1.497.8-2.423-2.16-1.555h2.636zm-6.747-6.905l.788 2.46h2.635L33.586 6.14l.774 2.434-2.058-1.5-2.058 1.5.774-2.444-2.132-1.545h2.622zM41.5 17.53l.788 2.46h2.622l-2.12 1.544.768 2.43-2.045-1.504-2.065 1.504.788-2.43L38.1 20h2.6zm-1.07 9.033l.788 2.455h2.63l-2.132 1.564.78 2.427-2.06-1.5-2.05 1.5.767-2.44-2.126-1.55h2.622zm-4.94 7.083l.774 2.46H38.9l-2.133 1.554.775 2.42-2.038-1.493-2.072 1.493.782-2.42-2.147-1.554h2.636zm-7.982 4.074l.794 2.46h2.6l-2.127 1.558.788 2.433-2.058-1.497-2.066 1.497.775-2.438L24.1 40.18h2.623zM7.84 8.146l-.795 2.45H4.43l2.12 1.56-.775 2.424 2.052-1.504 2.078 1.504-.787-2.424 2.146-1.56H8.63zm6.38-6.02l-.788 2.46H10.8l2.133 1.555-.788 2.434 2.064-1.5 2.066 1.5L15.5 6.13l2.133-1.545h-2.63zM4.822 16.47l-.774 2.45h-2.63l2.14 1.545-.78 2.44 2.045-1.493 2.066 1.493-.775-2.44L8.26 18.92H5.637zm.728 8.853l-.8 2.468H2.127l2.133 1.56-.775 2.43 2.05-1.504L7.6 31.78l-.788-2.437 2.132-1.55h-2.62zm4.95 7.437l-.78 2.464H7.1l2.133 1.55-.787 2.424 2.065-1.503 2.08 1.503-.795-2.43 2.133-1.545h-2.622zm7.796 4.605l-.782 2.468h-2.63l2.133 1.55-.774 2.42 2.038-1.48 2.085 1.48-.795-2.438 2.147-1.534H19.1z",
    fill: "#006ab6"
  })));
};

PHI.propTypes = {
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
PHI.defaultProps = {
  size: '100'
};
var _default = PHI;
exports["default"] = _default;