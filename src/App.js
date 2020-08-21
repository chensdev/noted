import React, { useState, useRef, useEffect } from 'react';
import Header from './components/layout/Header';
import NotesList from './components/NotesList';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = "notesApp.notes";

export function App() {
  const [notes, setNotes] = useState([])
  const noteNameRef = useRef()
  const noteContentRef = useRef()

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedNotes) setNotes(storedNotes)
  }, []) //store current notes

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
  }, [notes]) //get stored notes from local storage

  function handleAddNote(e) {
    const name = noteNameRef.current.value //grab name of input
    const content = noteContentRef.current.value
  
    if (name === '' && content === '') return //if blank don't add
    setNotes(prevNotes => {
      return [...prevNotes, { id: uuidv4(), name: name, content: content}]
    })
    noteNameRef.current.value = null//empty input
    noteContentRef.current.value = null
  }

  function handleClearNotes() {
    setNotes([]); //clear all notes
  }

  return(
    <div className="container">
      <>
      <Header className = "header"/>
      <NotesList notes = {notes} />
      <div className="note-container">
        <form>
          <input ref={noteNameRef} type="text" name="title" value={notes.name} />
          <textarea ref={noteContentRef} value={notes.content} name="content" cols="30" rows="10" />
          <button onClick={handleAddNote}>Add</button>
          <button onClick={handleClearNotes}>Clear All</button>
        </form>
        </div>
      </>
    </div>
  )
}

export default App

//future: add some sort of tag system - research this
//future: filter by tag