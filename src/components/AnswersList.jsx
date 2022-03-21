import styles from './AnswersList.module.css';
import AnswerItem from "./AnswerItem";

const AnswersList = (props) => {
    console.log(props);
    return (<ul className={styles.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                    state={props.state ? props.state[answer.id] : null}
                />
            )
        })}
    </ul>)
}

export default AnswersList;
