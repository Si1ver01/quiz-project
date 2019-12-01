import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";
import Finished from "../finished/finished.jsx";
import axios from "../../axios/axios-quiz.js";
import Loader from "../Ui/Loader/Loader.jsx";

class Quiz extends Component {
  state = {
    results: {},
    currentQuiz: 0,
    answerState: null,
    isFinished: false,
    quiz: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `/quizes/${this.props.match.params.id}.json`
      );
      const quiz = response.data;

      this.setState({
        quiz,
        loading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  onAnswerClick = index => {
    console.log(index);
    console.log(this.state.currentQuiz)
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    const question = this.state.quiz[this.state.currentQuiz];
    const results = this.state.results;

    if (question.rightAnswerID === index) {
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      this.setState({
        answerState: { [index]: "success" }
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinishid()) {
          this.setState({ isFinished: true });
        } else {
          this.setState({
            currentQuiz: this.state.currentQuiz + 1,
            answerState: null,
            results
          });
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      this.setState({
        answerState: { [index]: "error" },
        results
      });
    }
  };

  isQuizFinishid = () => this.state.currentQuiz + 1 === this.state.quiz.length;

  reloadQuestion = () => {
    this.setState({
      results: {},
      currentQuiz: 0,
      answerState: null,
      isFinished: false
    });
  };

  render() {
    console.log(this.state.quiz)
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>JS Test</h1>

          {this.state.loading ? (
            <Loader />
          ) : this.state.isFinished ? (
            <Finished
              results={this.state.results}
              quiz={this.state.quiz}
              reload={this.reloadQuestion}
            />
          ) : (
            <Activequiz
              answers={this.state.quiz[this.state.currentQuiz].answers}
              question={this.state.quiz[this.state.currentQuiz].question}
              onAnswerClick={this.onAnswerClick}
              quizLength={this.state.quiz.length}
              currentQuiz={this.state.currentQuiz + 1}
              answerState={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
