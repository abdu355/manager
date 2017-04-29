import React, { Component } from 'react';
import _ from 'lodash';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    //asynch request is called initially (might have no data)
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    //nextProps is the next set of props the component will be rendered with
    //this.props is old set
    this.createDataSource(nextProps);
  }
  // componentWillUpdate() {
  //     //call spring animation when component is about to re-render to device
  //     if (Platform.OS === 'android') {
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //     }
  //     LayoutAnimation.spring();
  // }
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    return <ListItem employee={employee} />;
  }
  render() {
    return (
      <ListView
      enableEmptySections
      dataSource={this.dataSource}
      renderRow={this.renderRow}
      />
      //<Text> txt </Text>
    );
  }
}

const mapStateToProps = (state) => {
  //for each key value pari run arrow function called with each value and key
  //val has name,phone,shift
  //return new object { shift: 'Monday' ,name: 'S', id: 'ased23'}
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  }); //index.js reducers


  return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
