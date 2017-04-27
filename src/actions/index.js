//switches actions based on type
import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => { //returning a function
    //we can use dispatch to run an action later on
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => { //return the logged in user via dispatch
      dispatch({ type: 'LOGIN_USER-SUCCESS', payload: user });
    });
  };
};
