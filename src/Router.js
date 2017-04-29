//defines all scenes (screens)
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="auth">
    <Scene
      key="login"
      component={LoginForm}
      title="Login Page"
      initial
    />
    </Scene>
      <Scene key="main">
      <Scene
        onRight={() => Actions.employeeForm()}
        rightTitle="Add"
        key="employeeList"
        component={EmployeeList}
        title="Employee List"
        initial
      />
      <Scene
        key="employeeForm"
        component={EmployeeCreate}
        title="Add Employee"
      />
      <Scene
        key="employeeEdit"
        component={EmployeeEdit}
        title="Edit Employee"
      />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
