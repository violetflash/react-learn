import './App.css';
import {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            email: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.validateName = this.validateName.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
    }

    changeHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    validateName(e) {
        e.target.value = e.target.value
            .replace(/[^A-Za-zА-Яа-я ]/gi, '')
            .replace(/\s\s/, ' ')
            .replace(/(?<= )\w|^\w/gi, match => match.toUpperCase());
        this.setState({firstName: e.target.value})
    }

    nameHandler(e) {
        this.changeHandler(e);
        this.validateName(e);
    }

    nameBlurHandle(e) {
        e.target.value = e.target.value.trim();
    }

    render() {

        const style = {
            display: 'block',
            margin: '10px'
        }
        return (
            <div>
                <input style={style}
                       type="text"
                       name='firstName'
                       placeholder='firstName'
                       value={this.state.firstName}
                       onChange={this.nameHandler}
                       onBlur={this.nameBlurHandle}
                       autoComplete='off'
                />
                <input style={style}
                       type="text"
                       name='email'
                       placeholder='email'
                       value={this.state.email}
                       onChange={this.changeHandler}
                       autoComplete='off'

                />
            </div>
        );
    }
}

export default Form;
