import React from "react";
import styles from './QuizList.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

export default class QuizList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizzes: []
        }
    }

    renderQuizzes() {
        return this.state.quizzes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'quiz/' + quiz.id}>
                        {quiz.name}
                    </NavLink>
                </li>
            )
        })
    }

    async componentDidMount() {
        try {
            const response = await axios.get('https://react-quiz-fc068-default-rtdb.europe-west1.firebasedatabase.app/quizes.json');

            const quizzes = [];
            Object.keys(response.data).forEach((key, index) => {
                quizzes.push({
                    id: key,
                    name: `Test #${index + 1}`
                })
            });

            this.setState({quizzes})
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className={styles.QuizList}>
                <div>
                    <h1>Quiz List</h1>

                    <ul>
                        {this.renderQuizzes()}
                    </ul>
                </div>
            </div>
        );
    }
}
