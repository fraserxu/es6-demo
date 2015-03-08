"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var Demo = React.createClass({
  displayName: "Demo",

  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello from Shanghai JavaScript Meetup!"
    );
  }

});

React.render(React.createElement(Demo, null), document.body);