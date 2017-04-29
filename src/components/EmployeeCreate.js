import React, { Component } from 'react';
//import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    //default values here - call action creator manually

  }
  // componentWillUpdate() {
  //     //call spring animation when component is about to re-render to device
  //     if (Platform.OS === 'android') {
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //     }
  //     LayoutAnimation.spring();
  // }
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    //action that will create a user in firebase
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button ifPressed={() => this.onButtonPress()}>
            Create
            </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm; //index.js reducers

  return { name, phone, shift };
};
// mapStateToProps, { actions }(classname)
export default connect(mapStateToProps, {
  employeeUpdate,
  employeeCreate
 })(EmployeeCreate);
