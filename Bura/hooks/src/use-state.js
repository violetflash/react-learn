import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const HookSwitcher = () => {

    const [color, setColor] = useState('white');
    const [person, setPerson] = useState({
        firstName: 'Alex',
        lastName: 'Gro'
    })

    const changeColor = (e) => {
        setColor(e.target.name);
    }

    const changeName = () => {
        setPerson(() => {

            return person.firstName === 'Alex' ? {...person, firstName: 'Nastya'} : {...person, firstName: 'Alex'};
        })
    };

    return (
        <div>
            <div style={{ padding: '10px', backgroundColor: color }}>
                <button name="white" onClick={changeColor}>White</button>
                <button name="black" onClick={changeColor}>Black</button>
            </div>
            <span>{person.firstName}</span>
            <button onClick={changeName}>Change name</button>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <HookSwitcher />
        </div>

    )
};


ReactDOM.render(<App />, document.getElementById('root'));
