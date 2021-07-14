import React from 'react';
import classes from "./Cockpit.module.scss";

const Cockpit = ({ persons, toggleNames, showPersons, title }) => {

    const btnClass = [classes.Button];

    if (showPersons) {
        btnClass.push(classes.Red);
    }


    const classList = [];
    if (persons.length <= 2) {
        classList.push(classes.red);
    }

    if (persons.length <= 1) {
        classList.push(classes.bold);
    }

    return (
        <>
            <h1 className={classList.join(' ')}>Hello! <span className={classes.Cockpit__title}>I am a simple {title}!</span></h1>
            <button className={btnClass.join(' ')} onClick={toggleNames}>{showPersons ? 'Hide' : 'Show'}</button>
        </>
    );

};

export default Cockpit;
