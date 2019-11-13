import React from "react";
import "./activeQuiz.css";
import AnswerList from "./answerList/answerList.jsx";

const activeQuiz = props => {
  console.log("activeQuiz",props)
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>1.</strong>&nbsp; {props.question}
        </span>
        <small>1 from 12</small>
      </p>
      <AnswerList answers={props.answers} onAnswerClick={props.onAnswerClick}/>
    </div>
  );
};

export default activeQuiz;
