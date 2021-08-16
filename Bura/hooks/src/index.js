import React, { Component, useEffect, useState } from 'react';
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

//выделение логики асинхронной операции в отдельную функцию
const getPlanet = async id => {
    const res = await fetch(`https://swapi.dev/api/planets/${id}`);
    return await res.json();
};

//Хук который получит данные из любой асинхронной операции
const useRequest = request => {
    const [dataState, setDataState] = useState(null);

    useEffect(() => {
        let cancelled = false; //будем игнорировать результат асинх. задачи, если эффект был очищен
        request()
            .then(data => !cancelled && setDataState(data));
        return () => cancelled = true;
    }, [request]);

    return dataState;
};

//Создание своего хука
const usePlanetInfo = id => {
    const request = () => getPlanet(id);
    // console.log(request);
    return useRequest(request);
}

const PlanetInfo = ({ id }) => {
    const data = usePlanetInfo(id);


    return (
        <div>{id} - {data && data.name}</div>
    );
}

const App = () => {
    const [counter, setCounter] = useState(1);
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

    const toggleTitle = isVisible ? 'Hide' : 'Show';




    return (
        <>
            <button onClick={toggleCounters}>{toggleTitle}</button>
            {counters}
            <Notification />
            <PlanetInfo id={counter}/>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
