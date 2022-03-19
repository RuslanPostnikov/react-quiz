import React from "react";
import styles from "./Auth.module.css";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onChangeHandler = (e, controlName) => {
        console.log(`${controlName}: `, e.target.value)
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
        return (
            <div className={styles.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                        {this.renderInputs()}
                        <Button type='success' onClick={this.logInHandler}>Log in</Button>
                        <Button type='primary' onClick={this.signInHandler}>Sign in</Button>
                    </form>
                </div>
            </div>
        );
    }
}
