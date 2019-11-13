import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers:[
          {text:'Вопрос 1'},
          {text:'Вопрос 2'},
          {text:'Вопрос 3'},
          {text:'Вопрос 4'},
        ]
      }
    ]
  };

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>Quiz</h1>
          <Activequiz answers={this.state.quiz[0].answers}/>
        </div>
      </div>
    );
  }
}

export default Quiz;
