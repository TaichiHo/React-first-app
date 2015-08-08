/**
 * Created by Taichi1 on 8/7/15.
 */
import React from 'react'

class AddNote extends React.Component {
    render() {
        "use strict";
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add new Note"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" tyep="button"
                            onClick={this.handleSubmit.bind(this)}>
                        Submit
                    </button>
                    </span>
            </div>
        )
    }

    handleSubmit() {
        "use strict";
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = "";
        this.props.addNote(newNote);
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};
export default AddNote;