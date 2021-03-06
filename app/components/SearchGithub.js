/**
 * Created by Taichi1 on 8/7/15.
 */
var React = require('react');

var Router = require('react-router');

var SearchGithub = React.createClass({
    mixins: [Router.Navigation],
    handleSubmit: function() {
        "use strict";
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value="";
        this.transitionTo("profile", {username: username});
    },
    render: function () {
        "use strict";
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref="username"/>
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
});
module.exports = SearchGithub;