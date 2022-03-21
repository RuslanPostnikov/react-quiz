import React from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";
import FinishedQuiz from "../components/FinishedQuiz";
import axios from '../axios/axios-quiz';
import withRouter from "../hoc/withRouter";
import Loader from "../components/UI/Loader";


class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
            quiz: [],
            loading: true
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

    async componentDidMount() {
        console.log(this.props.params.id);
        try {
            const response = await axios.get(`/quizes/${this.props.params.id}.json`);
            const quiz = response.data;

            this.setState({quiz, loading: false})
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>

                    {
                        this.state.loading
                        ? <Loader />
                        : this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        : <ActiveQuiz
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

export default withRouter(Quiz);
