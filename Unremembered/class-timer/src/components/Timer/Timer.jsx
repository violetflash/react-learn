import React, {Component} from 'react';
import s from './Timer.module.scss';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 0,
            started: false
        }

        this.startHandler = this.startHandler.bind(this);
        this.pauseHandler = this.pauseHandler.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentDidMount() {
        const value = localStorage.getItem('react-timer') ? +JSON.parse(localStorage.getItem('react-timer')) : 0
        this.setState({
            timer: value
        })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    componentDidUpdate() {
        localStorage.setItem('react-timer', JSON.stringify(this.state.timer.toFixed(2)));
    }

    startHandler() {
        this.setState({started: true})
        this.intervalId = setInterval(() => {
            this.setState({
                timer: this.state.timer + 0.02
            })
        }, 20);
    }

    pauseHandler() {
        clearInterval(this.intervalId);
        this.setState({started: false});
    }

    resetTimer() {
        this.setState({timer: 0});
    }

    render() {
        return (
            <div className={s.timer}>
                <h1 className={s.timer__title}>Class based React Timer</h1>
                <span className={s.timer__output}>{this.state.timer.toFixed(2)}</span>
                <div className={s.timer__buttons}>
                    <button
                        className={s.timer__button}
                        onClick={this.state.started ? this.pauseHandler : this.startHandler}>
                        {this.state.started ? 'pause' : 'start'}
                    </button>
                    <button
                        className={s.timer__button}
                        onClick={this.resetTimer}
                    >reset</button>
                </div>
            </div>
        );
    }
}


export default Timer;
