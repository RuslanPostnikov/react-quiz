import React from "react";
import styles from './QuizCreator.module.css';
import Button from "../components/UI/Button";
import {createControl} from "../form/formFramework";
import Input from "../components/UI/Input";
import Auxiliary from "../hoc/Auxiliary";
import Select from "../components/UI/Select";

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
            formControls: createFormControls(),
            rightAnswerId: 1
        }
    }


    submitHandler = e => {
        e.preventDefault();
    }

    AddQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

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
                        >
                            Add question
                        </Button>

                        <Button
                            type='success'
                            onClick={this.createQuizHandler}
                        >
                            Create test
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}
