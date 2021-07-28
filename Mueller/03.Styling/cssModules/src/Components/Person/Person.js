import React from 'react';
import classes from './Person.module.scss';

const Person = props => {

    // const rnd = Math.random();
    // if (rnd > 0.7) {
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={classes.Person}>
           <span  onClick={props.click} >
                {props.name}, {props.age}
            </span>
            <input type="text" onChange={props.change}/>
            <button className={classes.Button}>example</button>
        </div>

    )

};

export default Person;
