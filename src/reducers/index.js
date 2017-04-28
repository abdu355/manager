//contains keys for reducers to be accessible in app
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});
