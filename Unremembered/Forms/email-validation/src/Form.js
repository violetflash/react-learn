import s from './Form.module.scss';
import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            isEmailValid: false,
            termsChecked: false,
            error: ''
        };

        this.emailValidationInput = this.emailValidationInput.bind(this);
        this.emailValidationBlur = this.emailValidationBlur.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    emailValidationInput(e) {
        e.target.value = e.target.value.replace(/\s|-(?=@)/gi, '').replace(/--/gi, '-');
        this.setState({email: e.target.value});
    }

    emailValidationBlur(e) {
        e.target.value = e.target.value.trim();
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({isEmailValid: regex.test(e.target.value)})


    }

    checkboxHandler(e) {
        this.setState({[e.target.name]: e.target.checked});
    }

    submitHandler(e) {
        e.preventDefault();

        if (!this.state.isEmailValid) {
            this.setState({ error: 'Invalid email' });
            return;
        }

        if (!this.state.termsChecked) {
            this.setState({ error: 'You should check all agreements'});
            return;
        }

        console.log('SUCCESSFULLY SEND');
        this.setState({error: ''});
        this.setState({email: ''});
        this.setState({isEmailValid: false});
        this.setState({termsChecked: false});
    }

    render() {
        const { email, error, termsChecked } = this.state;

        return (
            <form className={s.Form}>
                <label className={s.Form__label}>
                    <span className={s.Form__span}>Email</span>
                    <input
                        type="text"
                        value={email}
                        onChange={this.emailValidationInput}
                        onBlur={this.emailValidationBlur}
                    />
                </label>
                <label className={s.Form__labelCheck}>
                    <input
                        type="checkBox"
                        name="termsChecked"
                        checked={termsChecked}
                        onChange={this.checkboxHandler}
                    />
                    I agree with terms and conditions
                </label>

                <button
                    className={s.Form__button}
                    onClick={this.submitHandler}
                >Send</button>
                <p className={s.Form__errorMessage} >{error}</p>
            </form>
        );
    }
}

export default Form;
