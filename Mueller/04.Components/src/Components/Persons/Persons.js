import React from 'react';
import Person from "./Person/Person";

class Persons extends React.Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        //compare current props with next props and return true or false to render or not
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[PersonS.js] rendering...');
        return (
            this.props.persons.map((person, index) => (
                <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    change={(e) => this.props.changed(e, person.id)}
                />
            ))
        );

    }
}

export default Persons;
