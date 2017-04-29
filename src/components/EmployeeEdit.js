import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';

import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, ConfirmModal } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
      //employee comes from the listItem prop
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    //employee comes from the listItem prop
  }
  onTextPress() {
    const { phone, shift } = this.props;
    text(phone, `Your upcoming shift is on ${shift}`);
  }
  onFirePress() {
    this.setState({ showModal: !this.state.showModal });
  }
  onAccept() { //fire employee
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }
  onDecline() { //close Modal
    this.setState({ showModal: !this.state.showModal });
  }
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button ifPressed={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button ifPressed={this.onTextPress.bind(this)}>
            Send Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button ifPressed={this.onFirePress.bind(this)}>
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Fire Employee?
        </ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
