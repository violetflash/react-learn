import React, {Component} from 'react'
import s from './FormWithRef.module.scss';

export default class FormWithRef extends Component {
    constructor(props) {
        super(props)

        this.state = {
            card: '',
            firstName: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.firstNameRef);
        this.firstNameRef.current.focus();
    }

    handleChange(e) {
        if (e.target.name === 'card') {
            e.target.value = e.target.value
                .replace(/[^\d]/, '')
                .replace(/\d{4}/g, match => match + ' ');
        }

        this.setState(() => ({[e.target.name]: e.target.value}), () => {
            if (this.state.card.length === 16) {
                this.emailRef.current.focus();
            }
        });
    }


    render() {
        const {firstName, email, card} = this.state;
        return (
            <form className={s.Form}>
                <input
                    type="text"
                    name="firstName"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={firstName}
                    placeholder="firstName"
                    ref={this.firstNameRef}
                />
                <input
                    type="text"
                    name="card"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={card}
                    placeholder="card"
                />
                <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    onChange={this.handleChange}
                    value={email}
                    placeholder="email"
                    ref={this.emailRef}
                />
            </form>
        )
    }
}

