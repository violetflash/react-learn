import s from './Form.module.scss';
import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            isNameValid: false,
            email: '',
            select: '',
            subscription: false,
            gender: ''
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.validateName = this.validateName.bind(this);
        this.nameHandler = this.nameHandler.bind(this);
        this.nameBlurHandler = this.nameBlurHandler.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.checkNameValid = this.checkNameValid.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    checkboxHandler(e) {
        this.setState({ [e.target.name]: e.target.checked });
    }

    changeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    validateName(e) {
        e.target.value = e.target.value
            .replace(/[^A-Za-zА-Яа-я ]/gi, '')
            .replace(/\s\s/, ' ')
            .replace(/(?<= )\w|^\w/gi, match => match.toUpperCase());
        this.setState({ firstName: e.target.value });
    }

    nameHandler(e) {
        this.changeHandler(e);
        this.validateName(e);
    }

    nameBlurHandler(e) {
        e.target.value = e.target.value.trim();
        this.setState({ isNameValid: this.state.firstName.length > 2 });

    }

    submitForm(e) {
        e.preventDefault();

        if (!this.state.isNameValid) {
            console.log('invalid name input value');
            return;
        }

        console.log('WAS SUCCESSFULLY SEND');
    }

    checkNameValid() {
        let className = [s.Form__input];

        if (this.state.firstName && !this.state.isNameValid) {
            className.push(s.invalid);
        } else {
            className = [s.Form__input];
        }

        return className;
    }

    render() {

        const { gender, email, firstName, select, subscription } = this.state;
        return (
            <form className={s.Form}>
                <input className={this.checkNameValid().join(' ')}
                       type="text"
                       name="firstName"
                       placeholder="firstName"
                       value={firstName}
                       onChange={this.nameHandler}
                       onBlur={this.nameBlurHandler}
                       autoComplete="off"
                />
                <input className={s.Form__input}
                       type="text"
                       name="email"
                       placeholder="email"
                       value={email}
                       onChange={this.changeHandler}
                       autoComplete="off"
                />
                <select name="select" onChange={this.changeHandler} value={select}>
                    <option value="" disabled/>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <label>
                    Subscription
                    <input
                        type="checkbox"
                        name="subscription"
                        onChange={this.checkboxHandler}
                        checked={subscription}
                    />
                </label>

                <div className={s.Form__radios}>
                    <label>
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={this.changeHandler}
                            checked={gender === 'male'}
                        />
                    </label>
                    <label>
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={this.changeHandler}
                            checked={gender === 'female'}
                        />
                    </label>
                </div>

                <button onClick={this.submitForm}>Submit</button>
            </form>
        );
    }
}

export default Form;
