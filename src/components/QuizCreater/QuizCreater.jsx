import React, { Component, Fragment } from "react";
import classes from "./QuizCreater.module.css";
import Button from "../Ui/Button/Button.js";
import { createControl, validate , validateForm } from "../../form/FormFramework.js";
import Input from "../Ui/Input/Input.jsx";
import Select from "../Ui/Select/Select.jsx";
import axios from 'axios';

function createOptionsControl(number) {
  return createControl(
    {
      label: `Вариант ${number}`,
      errorMessage: "Значение не может быть пустым",
      id: number
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: "Введите вопрос",
        errorMessage: "Вопрос не может быть пустым"
      },
      { required: true }
    ),
    option1: createOptionsControl(1),
    option2: createOptionsControl(2),
    option3: createOptionsControl(3),
    option4: createOptionsControl(4)
  };
}

export default class QuizCreater extends Component {
  state = {
    quiz: [],
    isFormValid : false,
    formControls: createFormControls(),
    rightAnswerID: 1
  };

  submitHandler = event => {
    event.preventDefault();
  };

  addQuestionHandler = event => {
    event.preventDefault();
    const quiz = [...this.state.quiz];
    const index = quiz.length + 1;
    const {question, option1, option2 , option3 , option4} = this.state.formControls


    const questionItem = {
      question : question.value,
      id : index,
      rightAnswerID : this.state.rightAnswerID,
      answers : [
        {text : option1.value , id : option1.id},
        {text : option2.value , id : option2.id},
        {text : option3.value , id : option3.id},
        {text : option4.value , id : option4.id},
      ]

    }

    quiz.push(questionItem);

    this.setState({
      quiz,
      isFormValid: false,
      formControls: createFormControls(),
      rightAnswerID: 1
    });

  };

  createQuizHandler = async event => {
    event.preventDefault();

    try {
      await axios.post('https://react-quiz-7b92e.firebaseio.com/quizes.json',this.state.quiz);
      this.setState({
        quiz : [],
        isFormValid: false,
        formControls: createFormControls(),
        rightAnswerID: 1
      })
    } catch (error){
      console.log(error)
    }
    // console.log(this.state.quiz)
  };

  changeHandler = (value, controlName) => {
    const formControls = {...this.state.formControls};
    const control = {...formControls[controlName]};

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid : validateForm(formControls)
    })

  };

  renderControls = () => {
    return Object.keys(this.state.formControls).map((name, index) => {
      const control = this.state.formControls[name];

      return (
        <Fragment key={name + index}>
          <Input
            label={control.label}
            valid={control.valid}
            value={control.value}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={event => this.changeHandler(event.target.value, name)}
          />
          {index === 0 ? <hr /> : null}
        </Fragment>
      );
    });
  };

  selectChangeHandler = event => {
    this.setState({
      rightAnswerID : Number(event.target.value)
    })
  }

  render() {
    const select = (
      <Select
        label="ВЫберите правильный ответ"
        value={this.state.rightAnswerID}
        onChange={this.selectChangeHandler}
        options={[
          {text: 1, value : 1},
          {text: 2, value : 2},
          {text: 3, value : 3},
          {text: 4, value : 4},
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
            {select}
            <Button type="primary" onClick={this.addQuestionHandler} disabled={!this.state.isFormValid}>
              Добавить вопрос
            </Button>
            <Button type="success" onClick={this.createQuizHandler} disabled={this.state.quiz.length === 0}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
