import React from "react";
import styles from "./Auth.module.css";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            formControls: {
                email: {
                    value: '',
                    type: 'email',
                    label: 'Email',
                    errorMessage: 'Enter correct email',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                password: {
                    value: '',
                    type: 'password',
                    label: 'Password',
                    errorMessage: 'Enter correct password',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        minLength: 6
                    }
                }
            }
        }
    }


    logInHandler = () => {

    }

    signInHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    validateControl(value, validation) {
        if(!validation) return true;

        let isValid = true;

        if(validation.required) isValid = value.trim() !== '' && isValid;
        if(validation.email) isValid = validateEmail(value) && isValid;
        if(validation.minLength) isValid = value.length >= validation.minLength && isValid;

        return isValid
    }

    onChangeHandler = (e, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => isFormValid = formControls[name].valid && isFormValid);



        this.setState({formControls, isFormValid});
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={e => this.onChangeHandler(e, controlName)}
                />
            )
        })
    }


    render() {
        console.log(this.props.id);
        return (
            <div className={styles.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                        {this.renderInputs()}
                        <Button
                            type='success'
                            onClick={this.logInHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Log in
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.signInHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Sign in
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
