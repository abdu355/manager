//handles all authentication inside app
import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  
  switch (action.type) {
      case EMAIL_CHANGED:
      //  state.email = action.payload; (wrong)
        return { ...state, email: action.payload };
        //make a new object, take values from state, replace email with new payload
        //trick redux to see it as a new object
        case PASSWORD_CHANGED:
          return { ...state, password: action.payload };
      default:
        return state;
  }
};
