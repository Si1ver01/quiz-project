import React from "react";
import "./answerList.css";
import AnswerItem from "./answerItem/answerItem";

const AnswerList = props => {
  // console.log(props.answerState, "answer list");
  return (
    <ul className="answer-list">
      {props.answers.map((answer, index) => (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          answerState={props.answerState ? props.answerState[answer.id] : null}
        />
      ))}
    </ul>
  );
};

export default AnswerList;
