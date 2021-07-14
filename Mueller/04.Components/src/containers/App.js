import React from 'react';
import Cockpit from "../Components/Cockpit/Cockpit";
import Persons from "../Components/Persons/Persons";
import classes from './App.module.scss';

class App extends React.Component {
    state = {
        persons: [
            { id: 'shsh', name: 'Alex', age: 36 },
            { id: '3636', name: 'Steven', age: 32 },
            { id: 'dfjdfj', name: 'Sonya', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    changeNameHandler = (e, id) => {
        const personIndex = this.state.persons.findIndex((elem) => elem.id === id);
        const person = { ...this.state.persons[personIndex] };
        person.name = e.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    toggleNames = () => {
        this.setState({ showPersons: !this.state.showPersons });
    };

    render() {
        let persons = null;


        if (this.state.showPersons) {
            persons = (
                <React.Fragment>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.changeNameHandler}
                    />
                </React.Fragment>
            );


            // style.backgroundColor = 'red';
            // style[':hover'] = {
            //     backgroundColor: 'salmon',
            // }
        }


        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.title}
                    persons={this.state.persons}
                    toggleNames={this.toggleNames}
                    showPersons={this.state.showPersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;
