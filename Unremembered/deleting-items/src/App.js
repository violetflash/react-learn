import './App.css';
import {Component} from "react";
import Persons from './components/Persons/Persons';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persons: [
                {id: 1, name: 'Lisa', age: 36},
                {id: 2, name: 'Alex', age: 32},
                {id: 3, name: 'Ann', age: 33},
            ]
        }

        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler(id) {

        this.setState({persons: this.state.persons.filter((person) => person.id !== id)});
    }

    render() {
        const {persons} = this.state;
        return (
            <Persons persons={persons} deleteHandler={this.deleteHandler}/>
        );
    }
}

export default App;
