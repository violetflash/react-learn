import React from 'react';

const UserOutput = props => {
    return (
        <div>
            <p>{props.username} welcomes you!</p>
            <p>{props.username} wants you to sit</p>
        </div>
    )

};

export default UserOutput;