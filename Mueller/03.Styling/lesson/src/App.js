import React from 'react';
import Person from "./Components/Person/Person";
import './App.css';

class App extends React.Component {
    state = {
        persons: [
            {id: 'shsh', name: 'Alex', age: 36},
            {id: '3636', name: 'Steven', age: 32},
            {id: 'dfjdfj', name: 'Sonya', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    changeNameHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex((elem) => elem.id === id);
        const person = {...this.state.persons[personIndex]};
        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    toggleNames = () => {
        this.setState({showPersons: !this.state.showPersons})
    }

    render() {

        const style = {
            minWidth: '70px',
            padding: '10px',
            backgroundColor: 'green',
            fontWeight: 700,
            color: 'white'
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <React.Fragment>
                    {this.state.persons.map((person, index) => (
                        <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonHandler(index)}
                            key={person.id}
                            change={(e) => this.changeNameHandler(e, person.id)}
                        />
                    ))}
                </React.Fragment>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }

        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <p className={classes.join(' ')}>Hello! I am a simple React App!</p>
                <button style={style} onClick={this.toggleNames}>{this.state.showPersons ? 'Hide' : 'Show'}</button>
                {persons}

            </div>
        );
    }
}

export default App;