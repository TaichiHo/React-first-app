/**
 * Created by Taichi1 on 8/7/15.
 */


import React from 'react';
import AddNote from './AddNote.js';
import NotesList from './NotesList.js'

class Notes extends React.Component {
    render() {
        "use strict";
        return (
            <div>
                <h3> Notes for {this.props.username} </h3>
                <AddNote username={this.props.username} addNote={this.props.addNote}/>
                <NotesList notes={this.props.notes}/>
            </div>
        )
    }
}
Notes.propTypes = {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default Notes;
