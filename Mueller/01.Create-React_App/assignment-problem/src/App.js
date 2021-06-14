import React, { Component } from 'react';
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'Alice Miller'
        };
    }

    usernameHandler(e) {
        this.setState({
            username: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <UserOutput username={this.state.username}/>
                <UserOutput username="Jessie Rogers"/>
                <UserInput username={this.state.username} changeName={this.usernameHandler.bind(this)}/>
            </div>
        );
    }
}


export default App;