import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/fuelSavingsActions';
import TaskBox from '../components/TaskBox';

export const TaskOrganization = () => {
  return (
    <TaskBox/>
  );
};

// FuelSavingsPage.propTypes = {
//   actions: PropTypes.object.isRequired,
//   fuelSavings: PropTypes.object.isRequired
// };

// function mapStateToProps(state) {
//   return {
//     fuelSavings: state.fuelSavings
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

export default TaskOrganization;