import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import NotesList from './components/NotesList';
import {v4 as uuidv4} from 'uuid';

const LOCAL_STORAGE_KEY = "notesApp.notes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: [], text: ''};
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  handleChangeContent(e) {
    this.setState({ content: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title.length === 0 || this.state.content.length === 0) {
      return;
    }
    const newNote = {
      id: uuidv4(),
      title: this.state.title,
      content: this.state.content
    };
    this.setState(state => ({
      notes: state.notes.concat(newNote),
      text: ''
    }));
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <h3>Remember, remember...</h3>
        <NotesList items = {this.state.notes} />
        <form onSubmit = {this.handleSubmit}>
          <input 
            id = "new-note"
            onChange = {this.handleChangeTitle}
            value = {this.state.title} 
          />
          <textarea 
            id="new-note"
            onChange = {this.handleChangeContent}
            value = {this.state.content}
          />
          <button>submit!</button>
        </form>
      </div>
    )
  }
}

export default App;

//future: add some sort of tag system - research this
//future: filter by tag