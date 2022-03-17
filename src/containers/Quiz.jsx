import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    answers: [
                        {text: 'Q1'},
                        {text: 'Q2'},
                        {text: 'Q3'},
                        {text: 'Q4'},
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        );
    }
}
