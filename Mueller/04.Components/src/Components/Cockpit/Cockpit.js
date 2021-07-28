import React, { useEffect } from 'react';
import classes from "./Cockpit.module.scss";

const Cockpit = ({ personsLength, toggleNames, showPersons, title }) => {

    //Combines componentDidMount and componentDidUpdate
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //fake Http request
        setTimeout(() => {
            alert('saved data to cloud...');
        }, 1000)
        //this will work right when useEffect runs for the last time
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); //[] - empty dependency array - this will work just for the first time when component will be mounted.

    useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect');

        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    }); //there's no dependency so return functionality would be done EVERY time the component rendered

    const btnClass = [classes.Button];

    if (showPersons) {
        btnClass.push(classes.Red);
    }


    const classList = [];
    if (personsLength <= 2) {
        classList.push(classes.red);
    }

    if (personsLength <= 1) {
        classList.push(classes.bold);
    }

    return (
        <>
            <h1 className={classList.join(' ')}>Hello! <span className={classes.Cockpit__title}>I am a simple {title}!</span></h1>
            <button className={btnClass.join(' ')} onClick={toggleNames}>{showPersons ? 'Hide' : 'Show'}</button>
        </>
    );

};

export default React.memo(Cockpit);
//react will store a snapshot of this component and only if its input changes, it will re-render it
