"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var appConfig = require('../../../../config/main');
var React = require("react");
var Helmet = require("react-helmet");
var components_1 = require("components");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var s = require('./style.css');
        return (<section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <components_1.Header />
        {this.props.children}
      </section>);
    };
    return App;
}(React.Component));
exports.App = App;
