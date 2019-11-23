import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import './QuizList.css'

export default class QuizList extends Component {

  rendeQuizes = () => {
    return [1,2,3].map((elem,index) => (
      <li key={index}> 
        <NavLink
          to={'/quiz/' + elem}

        >
          Тест : {elem}
        </NavLink>
      </li>
    ))
  }

  render() {
    return (
      <div className='QuizList'>
        <div >
          <h1>Список тестов</h1>
          <ul>
            {this.rendeQuizes()}
          </ul>
        </div>
      </div>
    );
  }
}
