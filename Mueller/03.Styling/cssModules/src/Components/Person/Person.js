import React from 'react';

const Person = props => {

    const style = {
        display: 'block',
        '@media (min-width: 500px)': {
            backgroundColor: 'palegreen',
            padding: '15px'
        }
    };

    return (
        <>
           <span onClick={props.click} style={style}>
                {props.name}, {props.age}
            </span>
            <input type="text" onChange={props.change}/>
            <button className="button">example</button>
        </>

    )

};

export default Person;
