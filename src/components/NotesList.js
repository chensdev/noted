import React, { Component } from 'react'

export class NotesList extends Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <div key = {item.id}>{item.title}{': '}{item.content}</div>
                ))}
            </ul>
        )
    }
}

export default NotesList;