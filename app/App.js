/**
 * Created by Taichi1 on 8/6/15.
 */

var React = require('react');
var Router = require("react-router");
var routes = require("./config/routes");


Router.run(routes, function(Root) {
    "use strict";
    React.render(<Root />, document.getElementById('app'));
});