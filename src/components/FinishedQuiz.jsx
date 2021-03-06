import styles from "./FinishedQuiz.module.css";
import Button from "./UI/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success') {
            total++
        }
        return total
    }, 0);

    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = styles[props.results[quizItem.id]];

                    return (
                        <li
                            className={cls}
                            key={index}
                        >
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                        </li>
                    )
                })}
            </ul>

            <p>Right {successCount} / {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type="primary">Repeat</Button>
                <Link to='/'>
                    <Button type="success">Quiz List</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz;
