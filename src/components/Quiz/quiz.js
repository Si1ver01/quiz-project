import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";

class Quiz extends Component {
  state = {
    currentQuiz: 0,
    answerState: null,
    quiz: [
      {
        answers: [
          { text: "Very well", id: 1 },
          { text: "So so", id: 2 },
          { text: "Nice", id: 3 },
          { text: "Very bad", id: 4 }
        ],
        question: "How do you like the weather?",
        correctAnswerID: 2,
        id: 1
      },
      {
        answers: [
          { text: "Bishkek", id: 1 },
          { text: "Batken", id: 2 },
          { text: "Osh", id: 3 },
          { text: "Tokmok", id: 4 }
        ],
        question: "Capital of Kyrgyzstan?",
        correctAnswerID: 1,
        id: 2
      }
    ]
  };

  onAnswerClick = index => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.currentQuiz];

    if (question.correctAnswerID === index) {
      this.setState({
        answerState: { [index]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinishid()) {
          console.log("Finishid");
        } else {
          this.setState({
            currentQuiz: this.state.currentQuiz + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [index]: "error" }
      });
    }
  };

  isQuizFinishid = () => this.state.currentQuiz + 1 === this.state.quiz.length;

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>Quiz</h1>
          <Activequiz
            answers={this.state.quiz[this.state.currentQuiz].answers}
            question={this.state.quiz[this.state.currentQuiz].question}
            onAnswerClick={this.onAnswerClick}
            quizLength={this.state.quiz.length}
            currentQuiz={this.state.currentQuiz + 1}
            answerState={this.state.answerState}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
