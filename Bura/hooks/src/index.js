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
            console.log('HookCounter UNmounted'); // Очистка предыдущего эффекта перед запуском следующего эффекта
        }
    }, [counter]);
    // если хотя бы одно значение массива изменится - useEffect сработает.
    // пустой массив - Чтобы он сработал всего 1 раз (как componentDidMount)
    // Если массив не передать - будет срабатывать при маунте и при каждом обновлении компонента.

    return (
        <span style={{ display: 'block' }}>
            {counter}
        </span>
    )
}

const Notification = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setIsVisible(false);
        }, 3000)
        return () => {
            clearTimeout(timeoutID);
        }
    }, []);
    return isVisible ? <div><p>Hello</p></div> : null;
};

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
            <Notification />
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
