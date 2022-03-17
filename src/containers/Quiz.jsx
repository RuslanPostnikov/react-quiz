import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quiz: [
                {
                    question: 'What color is the sky ?',
                    rightAnswerId: 2,
                    answers: [
                        {text: 'Black', id: 1},
                        {text: 'Blue', id: 2},
                        {text: 'Red', id: 3},
                        {text: 'Green', id: 4},
                    ]
                }
            ]
        }
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id: ', answerId)
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        question={this.state.quiz[0].question}
                        answers={this.state.quiz[0].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                    />
                </div>
            </div>
        );
    }
}
