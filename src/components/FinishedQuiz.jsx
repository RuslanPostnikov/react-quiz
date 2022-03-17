import styles from "./FinishedQuiz.module.css";

const FinishedQuiz = props => {
    return (
        <div className={styles.FinishedQuiz}>
            <ul>
                <li className={styles.success}>
                    <strong>1. </strong>
                    Test
                </li>
                <li className={styles.error}>
                    <strong>1. </strong>
                    Test
                </li>
            </ul>

            <p>Right 4 / 10</p>

            <div>
                <button>Repeat</button>
            </div>
        </div>
    )
}

export default FinishedQuiz;
