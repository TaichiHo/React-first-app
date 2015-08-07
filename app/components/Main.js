/**
 * Created by Taichi1 on 8/6/15.
 */
var React = require('react');
var Routehandler = require("react-router").RouteHandler;
var SearchGithub = require("./SearchGithub");
var Main = React.createClass({
    render: function () {
        return (
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
                        <SearchGithub />
                    </div>
                </nav>
                <div className="container">
                    <Routehandler />
                </div>
            </div>
        )
    }
});
//React.render(<Main />, document.getElementById('app'));

module.exports = Main;