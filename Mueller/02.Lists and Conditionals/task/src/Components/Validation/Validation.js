import React from 'react';

const Validation = props => {
    const result = props.length >= 5 ? 'Text long enough' : 'Text too short';
    return (
        <>
            {result}
        </>
    )

};

export default Validation;