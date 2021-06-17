 import React, {Component} from 'react';
import './App.css';

import Person from './Person/Person';


class App extends Component {
    constructor(props) {
        super();
        this.state = {
            persons: [
                {name: 'Alex', age: 36},
                {name: 'Steven', age: 32},
                {name: 'Sonya', age: 26}
            ]
        }
        // this.changeName = this.changeName.bind(this);
    }

    changeNameHandler(newName) {
        this.setState({
            persons: [
                {name: newName, age: 36},
                {name: 'Steven', age: 42},
                {name: 'Sonya', age: 26}
            ]
        })
    }

    setValue(e) {
        this.setState({
            persons: [
                {name: 'Alex', age: 36},
                {name: 'Steven', age: 32},
                {name: e.target.value, age: 26}
            ]
        })
    }

    render() {
        const { persons } = this.state;
        const btnStyle = {
            backgroundColor: 'teal',
            padding: '10px',
            color: '#fff',
            border: 0,
            cursor: 'pointer',
        }
        return (
            <div className="App">
                <Person name={persons[0].name} age={persons[0].age}/>
                <button style={btnStyle} onClick={this.changeNameHandler.bind(this, 'Mary Smith')}>Change name</button>
                <button onClick={() => this.changeNameHandler('Rose Atkinson')}>Change name</button>
                <Person name={persons[1].name} age={persons[1].age}/>
                <Person name={persons[2].name} age={persons[2].age} setValue={this.setValue.bind(this)}/>
            </div>
        );
    }
}

export default App;
