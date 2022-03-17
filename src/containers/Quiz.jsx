import React from "react";
import styles from './Quiz.module.css'

export default class Quiz extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quiz: []
        }
    }

    render() {
        return (
            <div className={styles.Quiz}>
                <h1>Quiz</h1>
            </div>
        );
    }
}
