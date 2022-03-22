import React from "react";
import styles from './QuizList.module.css';
import {NavLink} from "react-router-dom";
import Loader from "../components/UI/Loader";
import {connect} from "react-redux";
import {fetchQuizzes} from "../store/actions/quiz";

class QuizList extends React.Component {
    renderQuizzes() {
        return this.props.quizzes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        this.props.fetchQuizzes()
    }

    render() {
        console.log(this.props);
        return (
            <div className={styles.QuizList}>
                <div>
                    <h1>Quiz List</h1>
                    {
                        this.props.loading && this.props.quizzes.length !== 0
                            ? <Loader />
                            : <ul>
                                {this.renderQuizzes()}
                            </ul>
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        quizzes: state.quiz.quizzes,
        loading: state.quiz.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuizzes: () => dispatch(fetchQuizzes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
