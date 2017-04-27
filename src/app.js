import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'; //middleware
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBh-YG27jLEBqJRcO5qiAJftXXIVs0huVc',
      authDomain: 'manager-28950.firebaseapp.com',
      databaseURL: 'https://manager-28950.firebaseio.com',
      projectId: 'manager-28950',
      storageBucket: 'manager-28950.appspot.com',
      messagingSenderId: '904994811786'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); //wire up redux thunk
    return (
      <Provider store={store}>
      <View>

      <LoginForm />

      </View>
      </Provider>
    );
  }
}
export default App;
