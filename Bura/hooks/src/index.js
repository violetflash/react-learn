import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

class ClassCounter extends Component {

    componentDidMount() {
        console.log('ClassCounter mounted');
    }

    componentDidUpdate() {
        console.log('ClassCounter updated');
    }

    componentWillUnmount() {
        console.log('ClassCounter UNmounted');
    }

    render() {
        const { counter } = this.props;

        return (
            <span style={{ display: 'block' }}>
                {counter}
            </span>
        )
    }
}

const HookCounter = ({ counter }) => {


    useEffect(() => {
        console.log('HookCounter mounted');

        return () => {
            console.log('HookCounter UNmounted');
        }
    }, [counter]);

    return (
        <span style={{ display: 'block' }}>
            {counter}
        </span>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    const incrementCounter = () => {
        setCounter(counter => counter + 1);
    };

    const toggleCounters = () => {
        setIsVisible(value => !value);
    };

    const counters = isVisible ?
        <div>
            <button onClick={incrementCounter}>+</button>
            <ClassCounter  counter={counter} />
            <HookCounter style={{ display: 'block' }} counter={counter} />
        </div> :
        null;

    const toggleTitle = isVisible ? 'Hide' : 'Show'
    return (
        <>
            <button onClick={toggleCounters}>{toggleTitle}</button>
            {counters}
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));