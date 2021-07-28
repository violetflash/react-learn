import React, { Component } from 'react';

export default class Person extends Component {

    render() {
        const { name, deleteHandler, id } = this.props;

        return (
            <div style={{display: 'flex'}}>
                <h1>{name}</h1>
                <button onClick={() => deleteHandler(id)}>Delete {name}</button>
            </div>
        )
    }
}