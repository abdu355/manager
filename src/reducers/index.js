//contains keys for reducers to be accessible in app
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
  auth: AuthReducer
});
