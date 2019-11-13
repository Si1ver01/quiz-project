import React from "react";
import "./answerList.css";
import AnswerItem from "./answerItem/answerItem";

const AnswerList = props => {
  console.log("answerList",props);
  return (
    <ul className="answer-list">
      {props.answers.map((answer, index) => (
        <AnswerItem answer={answer} key={index} onAnswerClick={props.onAnswerClick} />
      ))}
    </ul>
  );
};

export default AnswerList;
