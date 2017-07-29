import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import './style.css';

class App extends Component {
    state = {notes: []};

    componentDidMount() {
        fetch('/api/notes')
            .then(res => res.json())
            .then(notes => this.setState({notes}));
    }
    render() {

        const {className, ...props} = this.props;
        return (
            <div className={classnames('App', 'main', className)} {...props}>

                <p className="App-intro">
                    <h1>Users</h1>
                    {this.state.notes.map(note =>
                        <div key={note.id}>
                            <span>{note.title}</span>- <span>{note.text}</span>
                        </div>
                    )}
                </p>
            </div>
        );
    }
}

export default App;
