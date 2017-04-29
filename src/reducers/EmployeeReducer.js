import {
  EMPLOYEE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_FETCH_SUCCESS:
      //console.log(action)
      return action.payload; //return the whole object

      //if by ID use:
      //return { ...state, [id]: action.payload }
      //return state;
    default:
      return state;
  }
};
