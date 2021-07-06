import React from 'react';

const style = {
    display: 'block'
}

const Person = props => {
    return (
        <>
           <span onClick={props.click} style={style}>
                {props.name}, {props.age}
            </span>
            <input type="text" onChange={props.change}/>
        </>

    )

};

export default Person;