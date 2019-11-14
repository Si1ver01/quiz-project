import React from "react";
import "./activeQuiz.css";
import AnswerList from "./answerList/answerList.jsx";

const activeQuiz = props => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>{props.currentQuiz}.</strong>&nbsp; {props.question}
        </span>
        <small>
          {props.currentQuiz} from {props.quizLength}
        </small>
      </p>
      <AnswerList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
        answerState={props.answerState}
      />
    </div>
  );
};

export default activeQuiz;
