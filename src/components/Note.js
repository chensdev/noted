import React from 'react'

export default function Note({note}) {
    return (
        <div>
            {note.name}
            {note.content}
        </div>
    )
}
