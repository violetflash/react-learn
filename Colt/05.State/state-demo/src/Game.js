import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }

    render() {
        return (
            <div>
                <h1>You Scrore Is: {this.state.score}</h1>
            </div>
        )
    }
}