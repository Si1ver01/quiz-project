import React from "react";
import "./activeQuiz.css";
import AnswerList from "./answerList/answerList.jsx";

const activeQuiz = props => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>1.</strong>&nbsp; How do yoou like the weather ?
        </span>
        <small>1 from 12</small>
      </p>
      <AnswerList answers={props.answers} />
    </div>
  );
};

export default activeQuiz;
