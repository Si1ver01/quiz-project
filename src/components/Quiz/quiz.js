import React, { Component } from "react";
import "./quiz.css";
import Activequiz from "../activeQuiz/activeQuiz.js";
import Finished from "../finished/finished.jsx";
import Loader from "../Ui/Loader/Loader.jsx";
import {connect} from 'react-redux'
import { fetchQuizById, quizAnswerClick, retryQuiz } from "../../store/actions/quiz";

class Quiz extends Component {
   componentDidMount() {
    this.props.fetchQuizById(this.props.match.params.id)
  }

  componentWillMount(){
    this.props.retryQuiz();
  }

 

  render() {
    return (
      <div className="quiz">
        <div className="quiz-wraper">
          <h1>JS Test</h1>

          {this.props.loading || !this.props.quiz ? (
            <Loader />
          ) : this.props.isFinished ? (
            <Finished
              results={this.props.results}
              quiz={this.props.quiz}
              reload={this.props.retryQuiz}
            />
          ) : (
            <Activequiz
              answers={this.props.quiz[this.props.currentQuiz].answers}
              question={this.props.quiz[this.props.currentQuiz].question}
              onAnswerClick={this.props.quizAnswerClick}
              quizLength={this.props.quiz.length}
              currentQuiz={this.props.currentQuiz + 1}
              answerState={this.props.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    results: state.quiz.results,
    currentQuiz: state.quiz.currentQuiz,
    answerState: state.quiz.answerState,
    isFinished: state.quiz.isFinished,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  }
}

function mapDispatchToProps(dispatch){
  return{
    fetchQuizById : id => dispatch(fetchQuizById(id)),
    quizAnswerClick : answerId => dispatch(quizAnswerClick(answerId)),
    retryQuiz : () => dispatch(retryQuiz())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
