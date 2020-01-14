import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import eventReducer from './eventReducer';
import todoReducer from './todoReducer'

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  event: eventReducer,
  todo: todoReducer
})