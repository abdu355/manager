import React, { Component } from 'react';
import { View, Text, Platform, UIManager, LayoutAnimation } from 'react-native';

class EmployeeList extends Component {
  componentWillUpdate() {
      //call spring animation when component is about to re-render to device
      if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
      LayoutAnimation.spring();
  }
  render() {
    return (
      <View>
        <Text> Employee List </Text>
        <Text> Employee List </Text>
        <Text> Employee List </Text>
        <Text> Employee List </Text>
        <Text> Employee List </Text>
      </View>
    );
  }
}

export default EmployeeList;
