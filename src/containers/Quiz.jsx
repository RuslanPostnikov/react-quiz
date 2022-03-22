import React, {useEffect} from "react";
import styles from './Quiz.module.css';
import ActiveQuiz from "../components/ActiveQuiz";
import FinishedQuiz from "../components/FinishedQuiz";
import Loader from "../components/UI/Loader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, retryQuiz} from "../store/actions/quiz";
import {useParams} from "react-router-dom";


// class Quiz extends React.Component{
//
//     componentDidMount() {
//         this.props.fetchQuizById(this.props.params.id)
//     }
//
//     componentWillUnmount() {
//         this.props.retryQuiz()
//     }
//
//     render() {
//         return (
//             <div className={styles.Quiz}>
//                 <div className={styles.QuizWrapper}>
//                     <h1>Answer all questions</h1>
//
//                     {
//                         this.props.loading || !this.props.quiz
//                         ? <Loader />
//                         : this.props.isFinished
//                         ? <FinishedQuiz
//                             results={this.props.results}
//                             quiz={this.props.quiz}
//                             onRetry={this.props.retryQuiz}
//                         />
//                         : <ActiveQuiz
//                             question={this.props.quiz[this.props.activeQuestion].question}
//                             answers={this.props.quiz[this.props.activeQuestion].answers}
//                             onAnswerClick={this.props.quizAnswerClick}
//                             quizLength={this.props.quiz.length}
//                             questionNumber={this.props.activeQuestion + 1}
//                             state={this.props.answerState}
//                         />
//                     }
//
//                 </div>
//             </div>
//         );
//     }
// }

const Quiz = props => {
    const { id } = useParams();
    const {fetchQuizById, retryQuiz} = props;

    useEffect(() => {
        fetchQuizById(id);
        return () => retryQuiz();
    }, [fetchQuizById, id, retryQuiz])

        return (
            <div className={styles.Quiz}>
                <div className={styles.QuizWrapper}>
                    <h1>Answer all questions</h1>

                    {
                        props.loading || !props.quiz
                            ? <Loader />
                            : props.isFinished
                                ? <FinishedQuiz
                                    results={props.results}
                                    quiz={props.quiz}
                                    onRetry={props.retryQuiz}
                                />
                                : <ActiveQuiz
                                    question={props.quiz[props.activeQuestion].question}
                                    answers={props.quiz[props.activeQuestion].answers}
                                    onAnswerClick={props.quizAnswerClick}
                                    quizLength={props.quiz.length}
                                    questionNumber={props.activeQuestion + 1}
                                    state={props.answerState}
                                />
                    }

                </div>
            </div>
        );
}

function mapStateToProps(state) {
    return {
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        activeQuestion: state.quiz.activeQuestion,
        answerState: state.quiz.answerState,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
