import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/taskActions';
//import TaskBox from '../components/TaskBox';
import TaskForm from '../components/TaskForm';
//import TaskList from '../components/TaskList';

export const TaskOrganizationPage = (props) => {
//<TaskList  />
  return (
        <TaskForm 
        saveNewTask={props.actions.saveNewTask} 
        task={props.task}
        />
  );
};

TaskOrganizationPage.propTypes = {
  //url: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired

};



function mapStateToProps(state) {
  return {
    task: state.task
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(TaskOrganizationPage);