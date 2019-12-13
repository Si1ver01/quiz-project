import axios from '../../axios/axios-quiz.js'
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERR, FETCH_QUIZ_SUCCESS, QUIZ_SET_STATE, FINISH_QUIZ, QUIZ_NEXT_QUESTION, RETRY_QUIZ } from './actionTypes.js';

export function fetchQuizes() {
  return async dispatch => {
    try {
      dispatch(fetchQuizesStart());
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

     dispatch(fetchQuizesSuccess(quizes))
    } catch (error) {
      dispatch(fetchQuizesError(error))
    }
  };
}

export function fetchQuizesStart(){
  return{
    type: FETCH_QUIZES_START
  }
}

export function fetchQuizById(quizId){
  return async dispatch => {
    dispatch(fetchQuizesStart())

    try {
      const response = await axios.get(
        `/quizes/${quizId}.json`
      );
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz))
    } catch (error) {
      fetchQuizesError(error)
    }
  }
}

export function fetchQuizSuccess(quiz){
  return{
    type : FETCH_QUIZ_SUCCESS,
    quiz
  }
}

export function fetchQuizesSuccess(quizes){
  return{
    type : FETCH_QUIZES_SUCCESS,
    quizes
  }
}

export function quizSetState(answerState,results){
  console.log(answerState)
  console.log(results)
  return{
    type : QUIZ_SET_STATE,
    answerState,
    results
  }
}

export function quizNextQuestion(number){
  return{
    type: QUIZ_NEXT_QUESTION,
    number
  }
}

export function fetchQuizesError(e){
  return{
    type: FETCH_QUIZES_ERR,
    error : e
  }
  
}

export function finishQuiz(){
  return{
    type: FINISH_QUIZ
  }
}

export function retryQuiz(){
  return{
    type: RETRY_QUIZ
  }
}

export function quizAnswerClick(answerId){
  return (dispatch,getState) => {
    const state = getState().quiz;
    console.log('State in dispatch',state)

    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === "success") {
        return;
      }
    }

    const question = state.quiz[state.currentQuiz];
    const results = state.results;

    if (question.rightAnswerID === answerId) {
      
      if (!results[question.id]) {
        results[question.id] = "success";
      }

      dispatch(quizSetState({[answerId]: 'success' }, results))

      const timeout = window.setTimeout(() => {
        if (isQuizFinishid(state)) {
          dispatch(finishQuiz())
        } else {
          dispatch(quizNextQuestion(state.currentQuiz + 1))
        }

        window.clearTimeout(timeout);
      }, 1000);
    } else {
      results[question.id] = "error";

      dispatch(quizSetState({[answerId]: 'error'},results))

    }
  }
}

function isQuizFinishid(state){
   return state.currentQuiz + 1 === state.quiz.length;
}