import React from 'react';

import TaskCheckbox from './TaskCheckbox';
import Task from './Task';


class TaskList extends React.Component{
  render() {
    let taskNodes = this.props.data.map(function(task) {
      return (
        <div key={task.id}>
          <Task author={task.author} >
            {task.text}
          </Task>
          <TaskCheckbox url="/api/tasks" taskId={task.id}/>
          <hr />
        </div>
      );
    });
    return (
      <div className="taskList">
        {taskNodes}
      </div>
    );
  }
}

export default TaskList;

// ReactDOM.render(
//   <TaskBox url="/api/tasks" pollInterval={200000} />,
//   document.getElementById('content')
// );



