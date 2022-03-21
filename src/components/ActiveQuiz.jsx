import styles from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList";

const ActiveQuiz = props => {
    console.log(props);

    return <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>{props.questionNumber}. </strong>
                {props.question}
            </span>

            <small>{props.questionNumber} / {props.quizLength}</small>
        </p>

        <AnswersList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
}

export default ActiveQuiz;
