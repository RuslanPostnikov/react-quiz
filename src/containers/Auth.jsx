import React from "react";
import styles from "./Auth.module.css";
import Button from "../components/UI/Button";

export default class Auth extends React.Component {
    logInHandler = () => {

    }

    signInHandler = () => {

    }

    submitHandler = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div className={styles.Auth}>
                <div>
                    <h1>Auth</h1>

                    <form onSubmit={this.submitHandler} className={styles.AuthForm}>
                        <input type="text"/>
                        <input type="text"/>
                        <Button type='success' onClick={this.logInHandler}>Log in</Button>
                        <Button type='primary' onClick={this.signInHandler}>Sign in</Button>
                    </form>
                </div>
            </div>
        );
    }
}
