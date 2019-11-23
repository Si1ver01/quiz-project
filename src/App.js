import React from "react";
import Layout from "./components/layout/layout.js";
import {Route,Switch} from 'react-router-dom'
import Quiz from "./components/Quiz/quiz.js"
import QuizList from './components/QuizList/QuizList.jsx'
import QuizCreater from './components/QuizCreater/QuizCreater.jsx'
import Auth from './components/Auth/Auth.jsx'


function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/quiz-creator' component={QuizCreater}/>
        <Route path='/quiz/:id' component={Quiz}/>
        <Route path='/' component={QuizList}/>
      </Switch>
    </Layout>
  );
}

export default App;
