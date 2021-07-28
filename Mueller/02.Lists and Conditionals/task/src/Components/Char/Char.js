import React from 'react';

const Char = props => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black',
        cursor: 'pointer'
    }

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    )

};

export default Char;