import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";

class Quiz extends Component {
  state = {
    quiz: []
  };

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>Quiz</h1>
          <Activequiz/>
        </div>
      </div>
    );
  }
}

export default Quiz;
