import React, { Component } from 'react';

export class NotesList extends Component {
    render() {
        return (
            <ul>
                {this.props.notes.map(note => (
                    <div key = {note.id}>
                        <div>{note.title}{': '}{note.content}</div>
                        <button onClick = {this.props.handleDelete.bind(this, note.id)}>del</button>
                        <button onClick = {this.props.handleArchive.bind(this, note)}>arc</button>
                    </div>
                ))}
            </ul>
        )
    }
}

export default NotesList;