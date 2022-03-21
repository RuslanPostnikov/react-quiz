import React from "react";
import styles from './QuizCreator.module.css';
import Button from "../components/UI/Button";
import {createControl, validate, validateForm} from "../form/formFramework";
import Input from "../components/UI/Input";
import Auxiliary from "../hoc/Auxiliary";
import Select from "../components/UI/Select";
import axios from "axios";

function createOptionControl(number) {
    return createControl({
        label: `Option ${number}`,
        id: number,
        errorMessage: 'Value cannot be empty'
    }, {required: true})
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Type question',
            errorMessage: 'Question cannot be empty'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

export default class QuizCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            isFormValid: false,
            formControls: createFormControls(),
            rightAnswerId: 1
        }
    }


    submitHandler = e => {
        e.preventDefault();
    }

    AddQuestionHandler = e => {
        e.preventDefault();

        const quiz = this.state.quiz.concat();
        const index = quiz.length + 1;

        const {question, option1, option2, option3, option4} = this.state.formControls;

        const questionItem = {
            question: question.value,
            id: index,
            rightAnswerId: this.state.rightAnswerId,
            answer: [
                {text: option1.value, id: option1.id},
                {text: option2.value, id: option2.id},
                {text: option3.value, id: option3.id},
                {text: option4.value, id: option4.id},
            ]
        }

        quiz.push(questionItem);

        this.setState({
            quiz,
            isFormValid: false,
            formControls: createFormControls(),
            rightAnswerId: 1
        })
    }

    createQuizHandler = async e => {
        e.preventDefault();

        try {
            await axios.post('https://react-quiz-fc068-default-rtdb.europe-west1.firebasedatabase.app/quizes.json', this.state.quiz);

            this.setState({
                quiz: [],
                isFormValid: false,
                formControls: createFormControls(),
                rightAnswerId: 1
            })
        } catch (e) {
            console.log(e);
        }

        // axios.post('https://react-quiz-fc068-default-rtdb.europe-west1.firebasedatabase.app/quizes.json', this.state.quiz)
        //     .then(response => console.log(response))
        //     .catch(e => console.log(e))

    }

    changeHandler = (value, controlName) => {
        const formControls = {...this.state.formControls};
        const control = {...formControls[controlName]};

        control.touched = true;
        control.value = value;
        control.valid = validate(control.value, control.validation);

        formControls[controlName] = control;

        this.setState({ formControls, isFormValid: validateForm(formControls)})
    }

    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];

            return (
                <Auxiliary key={controlName + index} >
                    <Input

                        label={control.label}
                        value={control.value}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        touched={control.touched}
                        errorMEssage={control.errorMessage}
                        onChange={e => this.changeHandler(e.target.value, controlName)}
                    />
                    {index === 0 ? <hr/> : null}
                </Auxiliary>
            )
        })
    }

    selectChangeHandler = e => {
        this.setState({
            rightAnswerId: +e.target.value
        })
    }

    render() {
        const select = <Select
            label='Choose correct answer'
            value={this.state.rightAnswerId}
            onChange={this.selectChangeHandler}
            options={[
                {text: 1, value: 1},
                {text: 2, value: 2},
                {text: 3, value: 3},
                {text: 4, value: 4},
            ]}
        />

        return (
            <div className={styles.QuizCreator}>
                <div>
                    <h1>Quiz Creator</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}

                        {select}

                        <Button
                            type='primary'
                            onClick={this.AddQuestionHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Add question
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                            disabled={this.state.quiz.length === 0}
                        >
                            Create test
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
