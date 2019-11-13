import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          { text: "Very well" , id: 1},
          { text: "So so" , id: 2 },
          { text: "Nice" , id: 3 },
          { text: "Very bad" , id: 4}
        ],
        question: "How do you like the weather?",
        correctAnswerID : 2
      }
    ]
  };

  onAnswerClick = index => {
    console.log(index);
  };

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>Quiz</h1>
          <Activequiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClick}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
