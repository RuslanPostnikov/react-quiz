import styles from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList";

const ActiveQuiz = props => (
    <div className={styles.ActiveQuiz}>
        <p className={styles.Question}>
            <span>
                <strong>2. </strong>
                How you doing ?
            </span>

            <small>4/12</small>
        </p>

        <AnswersList answers={props.answers}/>
    </div>
)

export default ActiveQuiz;
