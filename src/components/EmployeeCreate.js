import React, { Component } from 'react';
import { Picker, Text, Platform, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  componentWillUpdate() {
      //call spring animation when component is about to re-render to device
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.spring();
  }
  render() {
    return (
      <Card>
      <CardSection>
      <Input
      label="Full Name"
      placeholder="John Smith"
      value={this.props.name}
      onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
      />
      </CardSection>

      <CardSection>
      <Input
      label="Phone"
      placeholder="555-555-555"
      value={this.props.phone}
      onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
      />
      </CardSection>

      <CardSection style={{ flexDirection: 'column' }}>
      <Text style={styles.pickerTextStyle}>Select Shift</Text>
      <Picker
      style={{ marginLeft: 15 }}
      selectedValue={this.props.shift}
      onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
      >
       <Picker.Item label="Sunday" value="Sunday" />
        <Picker.Item label="Monday" value="" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
      </Picker>
      </CardSection>

      <CardSection>
      <Button>
      Create
      </Button>
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm; //index.js reducers

  return { name, phone, shift };
};
// mapStateToProps, { actions }(classname)
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
