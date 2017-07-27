import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    state = {notes: []};

    componentDidMount() {
        fetch('/api/notes')
            .then(res => res.json())
            .then(notes => this.setState({notes}));
    }

    render() {
        return (
            <div className="App">
                <img className="logo" src={logo} alt="Logo"/>
                <h1>Notes</h1>
                {this.state.notes.map(note =>
                    <div key={note.id}>
                        <span>{note.title}</span>- <span>{note.text}</span>
                    </div>

                )}
            </div>
        );
    }
}

export default App;
