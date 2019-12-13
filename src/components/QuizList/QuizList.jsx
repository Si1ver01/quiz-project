import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./QuizList.css";
import Loader from "../Ui/Loader/Loader.jsx";
import {connect} from 'react-redux'
import { fetchQuizes } from "../../store/actions/quiz";

 class QuizList extends Component {

   componentDidMount() {
     this.props.fetchQuizes();

  }

  rendeQuizes = () => {
    return this.props.quizes.map(elem => (
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
          {this.props.pageLoading && this.props.quizes.length !== 0 ? <Loader /> : <ul>{this.rendeQuizes()}</ul>}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    quizes : state.quiz.quizes,
    loading : state.quiz.loading
  }

}

function mapDispatchToProps(dispatch){
  return{
    fetchQuizes: () => dispatch(fetchQuizes())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(QuizList)