import React from "react";
import "./answerList.css";
import AnswerItem from "./answerItem/answerItem";

const AnswerList = props => {
  return (
    <ul className="answer-list">
      {props.answers.map((answer, index) => (
        <AnswerItem answer={answer} key={index} />
      ))}
    </ul>
  );
};

export default AnswerList;
