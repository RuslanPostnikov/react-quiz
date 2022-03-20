import React from "react";
import styles from './QuizCreator.module.css';
import Button from "../components/UI/Button";

export default class QuizCreator extends React.Component {

    submitHandler = e => {
        e.preventDefault();
    }

    AddQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    render() {
        return (
            <div className={styles.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>

                        <input type="text"/>
                        <hr/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>
                        <input type="text"/>

                        <select></select>

                        <Button
                            type='primary'
                            onClick={this.AddQuestionHandler}
                        >
                            Add question
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
