import React, {Component} from "react";
import Person from '../Person/Person';

export default class Persons extends Component {

    render() {
        const { persons, deleteHandler } = this.props;

        return (
            persons.map((person) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    deleteHandler={deleteHandler}
                    id={person.id}
                />
            })

        )
    }
}