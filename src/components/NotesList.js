import React, { Component } from 'react';

export class NotesList extends Component {
    render() {
        return (
            <ul>
                {this.props.notes.map(note => (
                    <div className = "note" key = {note.id}>
                        <div>{note.title}{': '}{note.content}</div>
                        <div className="btn-array">
                            <button className = "btn btn-sm" onClick = {this.props.handleDelete.bind(this, note.id)}>del</button>
                            <button className = "btn btn-sm" onClick = {this.props.handleArchive.bind(this, note)}>arc</button>
                        </div>
                    </div>
                ))}
            </ul>
        )
    }
}

export default NotesList;