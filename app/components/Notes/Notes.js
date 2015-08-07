/**
 * Created by Taichi1 on 8/7/15.
 */


var React = require('react');
var AddNote = require('./AddNote');
var NotesList = require("./NotesList");
var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    render: function () {

        "use strict";
        return (
            <div>
                <h3> Notes for {this.props.username} </h3>
                <AddNote username={this.props.username} addNote={this.props.addNote}/>
                <NotesList notes={this.props.notes}/>
            </div>
        )
    }
});

module.exports = Notes;
