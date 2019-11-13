import React from 'react'
import './answerItem.css'

const AnswerItem = props => {
  return(
    <li className='answer-item'>
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;