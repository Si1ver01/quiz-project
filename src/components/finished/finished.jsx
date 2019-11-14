import React from 'react';
import './finished.css'

export default () => {


  return (
    <div className="finished">
      <ul>
        <li>
          <strong>1. </strong>
          How are you
          <i className="fas fa-check ml-2 text-success"></i>
        </li>
        <li>
          <strong>2. </strong>
          How are you
          <i className="fas fa-times ml-2 text-primary"></i>
        </li>
      </ul>
      <p>Правильно 4 из 10</p>
      <div>
        <button>Reload</button>
      </div>
    </div>
  )
}
