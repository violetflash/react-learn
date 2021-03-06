import React from 'react';
import Person from "./Components/Person/Person";
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 70px;
  padding: 10px;
  background-color: ${props => props.alt ? 'red' : 'green'};
  font-weight: 700;
  color: white;
  border: 1px solid blue;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
  }
`;

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
                <Button alt={this.state.showPersons} onClick={this.toggleNames}>{this.state.showPersons ? 'Hide' : 'Show'}</Button>
                {persons}
            </div>
        );
    }
}

export default App;
