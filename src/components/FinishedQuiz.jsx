import styles from "./FinishedQuiz.module.css";

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
                <button onClick={props.onRetry}>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
