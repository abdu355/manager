import React, { Component } from 'react';
import { Picker, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
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
      </View>
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
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
