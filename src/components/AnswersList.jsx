import styles from './AnswersList.module.css';
import AnswerItem from "./AnswerItem";

const AnswersList = (props) => (
    <ul className={styles.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                />
            )
        })}
    </ul>
)

export default AnswersList;
