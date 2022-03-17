import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quiz: []
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Quiz</h1>
                    <ActiveQuiz />
                </div>
            </div>
        );
    }
}
