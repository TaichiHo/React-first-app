/**
 * Created by Taichi1 on 8/7/15.
 */
var React = require("react");
var Router = require('react-router');
var UserProfile = require('./Github/UserProfile');
var Repos = require('./Github/Repos');
var Notes = require('./Notes/Notes');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');
var helpers = require("../utils/helpers");
var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        "use strict";
        return {
            notes: [],
            bio: {},
            repos: []
        }
    },
    render: function () {
        "use strict";
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio}/>
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos}/>
                </div>
                <div className="col-md-4">
                    <Notes username={username} notes={this.state.notes}
                           addNote={this.handleAddNote}/>
                </div>
            </div>
        )
    },
    componentWillReceiveProps: function () {
        "use strict";
        console.log("Here");
        this.unbind("notes");
        this.init();
    },
    init: function () {
        "use strict";
        var childRef = this.ref.child(this.getParams().username);
        this.bindAsArray(childRef, "notes");
        helpers.getGithubInfo(this.getParams().username)
            .then(function (dataObj) {
                "use strict";
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                })

            }.bind(this));

    },
    componentDidMount: function () {
        this.ref = new Firebase("https://reactfire-notetaker.firebaseio.com");
        //console.log(ref);

        this.init();
    },
    componentWillUnmount: function () {
        this.unbind('notes');
    }
    ,
    handleAddNote: function (newNote) {
        "use strict";
        this.ref.child(this.getParams().username).set(this.state.notes.concat([newNote]));
    }
});
module.exports = Profile;