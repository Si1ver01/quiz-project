import React from "react";
import "./finished.css";
import {Link} from 'react-router-dom'
import Button from "../Ui/Button/Button";

export default props => {
  console.log(props)
  const countSuccessAnswer = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);

  return (
    <div className="finished">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const clsForIcon = [
            "fas",
            props.results[quizItem.id] === "success"
              ? "fa-check text-success"
              : "fa-times text-primary",
            "ml-2"
          ];

          return (
            <li key={index}>
              <strong>{quizItem.id}.</strong>&nbsp;
              {quizItem.question}
              <i className={clsForIcon.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p className="mt-2">
        Правильно {countSuccessAnswer} из {props.quiz.length}
      </p>
      <div>
        <Button type='primary' onClick={props.reload}>
          Reload
        </Button>
        <Link to='/'>
          <Button type='success'>Перейти к списку тестов</Button>
        </Link>
      </div>
    </div>
  );
};
