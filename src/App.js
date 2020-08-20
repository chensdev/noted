import React, {useState} from 'react';
import NotesList from './components/NotesList';

export default function App() {
  const [notes, setNotes] = useState(['note 1', 'note 2']);
  return (
    <div>
      <div className="container">
        <>
          <h1>Enter a new note!</h1>
          <input type="text" name="" id=""/>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button type="submit">Submit!</button>
          <NotesList notes = {notes} />
        </>
      </div>
    </div>
  )
}
