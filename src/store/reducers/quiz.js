import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERR,
  FETCH_QUIZ_SUCCESS,
  QUIZ_SET_STATE,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  RETRY_QUIZ
} from "../actions/actionTypes";

const inititalState = {
  quizes: [],
  pageLoading: false,
  error: null,
  results: {},
  currentQuiz: 0,
  answerState: null,
  isFinished: false,
  quiz: null
};

export default function quizReducer(state = inititalState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        pageLoading: true
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        pageLoading: false,
        quizes: action.quizes
      };
    case FETCH_QUIZES_ERR:
      return {
        ...state,
        pageLoading: false,
        error: action.error
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        pageLoading: false,
        quiz: action.quiz
      };
    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results
      };
    case FINISH_QUIZ:
      return {
        ...state,
        isFinished: true
      };
    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        answerState: null,
        currentQuiz: action.number
      };
    case RETRY_QUIZ:
      return {
        ...state,
        results: {},
        currentQuiz: 0,
        answerState: null,
        isFinished: false
      };
    default:
      return state;
  }
}
