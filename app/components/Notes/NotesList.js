/**
 * Created by Taichi1 on 8/7/15.
 */

import React from 'react';

class NotesList extends React.Component {
    render() {
        "use strict";
        var notes = this.props.notes.map((note, index)=> {
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
}
export default NotesList;