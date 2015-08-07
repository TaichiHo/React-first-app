/**
 * Created by Taichi1 on 8/7/15.
 */
var React = require('react');
var Addnote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {
        "use strict";
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = "";
        this.props.addNote(newNote);
    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add new Note"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" tyep="button" onClick={this.handleSubmit}>
                        Submit
                    </button>
                    </span>
            </div>
        )
    }
});
module.exports = Addnote;