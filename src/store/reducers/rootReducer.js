import {combineReducers} from 'redux'
import quizReducer from './quiz';
import creteReducer from './create';
import authReducer from './auth';

export default combineReducers({
  quiz: quizReducer,
  create : creteReducer,
  auth : authReducer
})