import { combineReducers } from 'redux';
import errorReducer from './AuthReducers/errorReducer';
import authReducer from './AuthReducers/authReducer';

export default combineReducers({
  errors: errorReducer,
  auth: authReducer
})