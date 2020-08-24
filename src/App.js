import React from 'react';
import Header from './components/layout/Header';
import NotesList from './components/NotesList';
import {v4 as uuidv4} from 'uuid';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {notes: [], id:'', title:'', content:''};
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
      id:'',
      title: '',
      content: ''
    }));
  }

  handleDelete= id => {
    this.setState({notes: [...this.state.notes.filter(note => note.id !== id)]})
  }

  handleArchive(e) {
    
  }

  render() {
    return (
      <div className = "App">
        <header>
          <Header />
        </header>
        <div className="container">
          <div className="app-left">
            <h3 className = "title">Remember, remember...</h3>
            <form className = "note-form" onSubmit = {this.handleSubmit}>
              <input 
                id = "note-title"
                onChange = {this.handleChangeTitle}
                value = {this.state.title} 
              />
              <textarea 
                id= "note-content"
                onChange = {this.handleChangeContent}
                value = {this.state.content}
              />
              <button className = "btn btn-lg">submit!</button>
            </form>
          </div>
          <div className="app-right">
            <NotesList notes = {this.state.notes} handleDelete = {this.handleDelete} handleArchive = {this.handleArchive}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

//future: add some sort of tag system - research this
//future: filter by tag