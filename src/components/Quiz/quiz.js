import React, { Component } from 'react'
import './quiz.css';


class Quiz extends Component{
  state = {
    quiz : []
  }

  render(){
    return(
      <div className="quiz">
        <h1>Quiz</h1>
      </div>
    )
  }
}

export default Quiz;