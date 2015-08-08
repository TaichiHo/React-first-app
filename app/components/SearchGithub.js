/**
 * Created by Taichi1 on 8/7/15.
 */
import React from 'react'

class SearchGithub extends React.Component {
    handleSubmit() {
        "use strict";
        var router = this.context.router;
        var username = this.refs.username.getDOMNode().value;
        this.refs.username.getDOMNode().value = "";
        router.transitionTo("profile", {username: username});
    }

    render() {
        "use strict";
        return (
            <div className="col-sm-12">
                <form onSubmit={this.handleSubmit.bind(this)}>
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
}

SearchGithub.contextTypes = {
    router: React.PropTypes.func.isRequired
};
// no mixins for es6
//var SearchGithub = React.createClass({
//    mixins: [Router.Navigation],
//
//});
module.exports = SearchGithub;