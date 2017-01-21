"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var s = require('./style.css');
        return (<nav className={s.nav}>
        <ul>
          <li><react_router_1.Link to="/">Home</react_router_1.Link></li>
          <li><react_router_1.Link to="about">About</react_router_1.Link></li>
        </ul>
      </nav>);
    };
    return Header;
}(React.Component));
exports.Header = Header;
