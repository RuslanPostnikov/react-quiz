import React from "react";
import styles from './QuizList.module.css';
import {NavLink} from "react-router-dom";

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
