import React from "react";
import styles from './QuizList.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";

export default class QuizList extends React.Component {
    renderQuizes() {
        return [1,2,3].map((quiz, index) => {
            return (
                <li key={index}>
                    <NavLink to={'quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    componentDidMount() {
        axios.get('https://react-quiz-fc068-default-rtdb.europe-west1.firebasedatabase.app/quiz.json')
            .then(response => console.log(response))
    }

    render() {
        return (
            <div className={styles.QuizList}>
                <div>
                    <h1>Quiz List</h1>

                    <ul>
                        {this.renderQuizes()}
                    </ul>
                </div>
            </div>
        );
    }
}
