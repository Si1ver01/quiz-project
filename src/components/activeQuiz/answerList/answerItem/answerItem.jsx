import React from "react";
import "./answerItem.css";

const AnswerItem = props => {
  // console.log(props.answerState);
  const cls = ["answer-item"];

  if (props.answerState) {
    cls.push(props.answerState);
  }

  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
