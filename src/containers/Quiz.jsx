import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";
import FinishedQuiz from "../components/FinishedQuiz";

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: {}, // { [id]: 'success' 'error' }
            isFinished: false,
            activeQuestion: 0,
            answerState: null, // { [id]: 'success' 'error' }
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
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success') return;
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success';
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }

        const timeout = window.setTimeout(() => {
            if(this.isQuizFinished()) {
                this.setState({isFinished: true})
            } else {
                this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                })
            }

            window.clearTimeout(timeout)
        }, 1000);
    }

    isQuizFinished = () => this.state.activeQuestion + 1 === this.state.quiz.length;

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        })
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>
                    {
                        this.state.isFinished ?
                            <FinishedQuiz
                                results={this.state.results}
                                quiz={this.state.quiz}
                                onRetry={this.retryHandler}
                            /> :
                            <ActiveQuiz
                                question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLength={this.state.quiz.length}
                                questionNumber={this.state.activeQuestion + 1}
                                state={this.state.answerState}
                            />
                    }

                </div>
            </div>
        );
    }
}
