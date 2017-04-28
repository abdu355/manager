//handles all authentication inside app
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER }
  from '../actions/types';

const INITIAL_STATE =
{
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

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
        case LOGIN_USER_SUCCESS:
        //save user model on state.auth.user
          return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
          //show error and reset password
          return { ...state,
            error: 'Authentication Failed',
            password: '',
            loading: false
          };
        case LOGIN_USER:
          return { ...state, loading: true, error: '' };
      default:
        return state;
  }
};
