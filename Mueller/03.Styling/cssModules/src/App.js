import React from 'react';
import Person from "./Components/Person/Person";
import classes from './App.module.scss';

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

            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            // }
        }

        const classList = [];
        if (this.state.persons.length <= 2) {
            classList.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            classList.push(classes.bold);
        }

        return (
            <div className={classes.App}>
                <p className={classList.join(' ')}>Hello! I am a simple React App!</p>
                <button className={classes.Button} onClick={this.toggleNames}>{this.state.showPersons ? 'Hide' : 'Show'}</button>
                {persons}
            </div>
        );
    }
}

export default App;
