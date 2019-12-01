import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./QuizList.css";
import Loader from "../Ui/Loader/Loader.jsx";
import axios from "axios";

export default class QuizList extends Component {
  state = {
    quizes: [],
    pageLoading: true
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://react-quiz-7b92e.firebaseio.com/quizes.json"
      );
      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Тест №${index + 1}`
        });
      });

      this.setState({
        quizes,
        pageLoading : false
      });

    } catch (error) {
      console.log(error);
    }
  }

  rendeQuizes = () => {
    return this.state.quizes.map(elem => (
      <li key={elem.id}>
        <NavLink to={"/quiz/" + elem.id}>{elem.name}</NavLink>
      </li>
    ));
  };

  render() {
    return (
      <div className="QuizList">
        <div>
          <h1>Список тестов</h1>
          {this.state.pageLoading ? <Loader /> : <ul>{this.rendeQuizes()}</ul>}
        </div>
      </div>
    );
  }
}
