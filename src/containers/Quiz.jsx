import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: 0,
            quiz: [
                {
                    question: 'What color is the sky ?',
                    id: 1,
                    rightAnswerId: 2,
                    answers: [
                        {text: 'Black', id: 1},
                        {text: 'Blue', id: 2},
                        {text: 'Red', id: 3},
                        {text: 'Green', id: 4},
                    ]
                },
                {
                    question: 'What year is now ?',
                    id: 2,
                    rightAnswerId: 4,
                    answers: [
                        {text: '2019', id: 1},
                        {text: '2020', id: 2},
                        {text: '2021', id: 3},
                        {text: '2022', id: 4},
                    ]
                },
            ]
        }
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id: ', answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    <ActiveQuiz
                        question={this.state.quiz[this.state.activeQuestion].question}
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        questionNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        );
    }
}
