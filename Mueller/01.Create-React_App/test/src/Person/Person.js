import React from 'react';
import './Person.css';

const Person = props => {
    return (
        <div className="Person">
            <h2>name: {props.name}. age: {props.age}</h2>
            <input type="text" onChange={props.setValue} placeholder={props.name}/>
        </div>
    )
};

export default Person;