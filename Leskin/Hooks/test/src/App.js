import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [count, changeCount] = React.useState(0);

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={() => changeCount(count + 1)}>{count}</button>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
