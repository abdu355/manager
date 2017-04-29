import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCESS }
  from './types';

export const employeeUpdate = ({ prop, value }) => {
  //only return action type
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

//push new employee to firebase
export const employeeCreate = ({ name, phone, shift }) => {
  //console.log(name, phone, shift);
  const { currentUser } = firebase.auth();

  //use redux-thunk to return an action type to reducer + store data
  return (dispatch) => {
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift })
  .then(() => {
    dispatch({ type: EMPLOYEE_CREATE });
    Actions.employeeList({ type: 'reset' });
    });
  };
};

//get employees from firebase + return an action type to reducer
export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => { //snapshot describes the data (handle)
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() });
        //snapshot.val() returns the actual data (object of employees)
        //is called anytime the data updates in firebase
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCESS });
        Actions.employeeList({ type: 'reset' });
      });
    };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
        Actions.employeeList({ type: 'reset' });
    });
  };
};
