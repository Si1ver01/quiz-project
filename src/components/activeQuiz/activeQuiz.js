import React from 'react'
import './activeQuiz.css'

const activeQuiz = () => {
  return(
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong>1.</strong>&nbsp;
          How do yoou like the weather ?
        </span>
        <small>1 from 12</small>
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default activeQuiz;