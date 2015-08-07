/**
 * Created by Taichi1 on 8/7/15.
 */

var React = require('react');

var NotesList = React.createClass({
    render: function () {
        var notes = this.props.notes.map(function (note, index) {
            "use strict";
            //console.log(note.value);
            //console.log(note);
            return (
                <li className="list-group-item" key={index}>
                  {note}
                </li>);
        });
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }

});
module.exports = NotesList;