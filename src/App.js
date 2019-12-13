import React, { Component } from "react";
import Layout from "./components/layout/layout.js";
import { Route, Switch, Redirect , withRouter} from "react-router-dom";
import Quiz from "./components/Quiz/quiz.js";
import QuizList from "./components/QuizList/QuizList.jsx";
import QuizCreater from "./components/QuizCreater/QuizCreater.jsx";
import Auth from "./components/Auth/Auth.jsx";
import { connect } from "react-redux";
import Logout from "./components/Logout/Logout.jsx";
import { autoLogin } from "./store/actions/auth.js";

class App extends Component {
  componentDidMount(){
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/" exact component={QuizList} />
        <Redirect to="/"  />
      </Switch>
    );

    if (this.props.isAuthentificated) {
      routes = (
        <Switch>
          <Route path="/quiz-creator" component={QuizCreater} />
          <Route path="/quiz/:id" component={Quiz} />
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={QuizList} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return <Layout>{routes}</Layout>;
  }
}

function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.auth.token
  };
}

function mapDispatchToProps(dispatch){
  return{
    autoLogin : () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App)) ;
