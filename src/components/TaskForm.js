import React, {PropTypes} from 'react';
import TaskTextInput from './TaskTextInput';


class TaskForm extends React.Component {

  constructor(props, context){
    super(props, context);

    this.save = this.save.bind(this);
  }

  handleTaskContextChange() {

    //this.props.context = e.target.value;
    //this.setState({author: e.target.value});
  }

  handleDescriptionChange() {
 
    //this.props.description;
    //this.setState({text: e.target.value});
  }

  save() {

    this.props.saveNewTask(this.props.task);
 
    // let author = this.state.author.trim();
    // let text = this.state.text.trim();
    // if (!text || !author) {
    //   return;
    // }
    // this.props.onTaskSubmit({author: author, text: text});
    // this.setState({author: '', text: ''});
  }

  render() {
    const {task} = this.props;

    return (
      <div >
                <TaskTextInput
                onChange={this.handleDescriptionChange}
                name="description"
                value={task.description}/>

                <TaskTextInput
                onChange={this.handleTaskContextChange}
                name="context"
                value={task.context}/> 

        <input type="submit" value="Save" onClick={this.save} />
      </div>
    );
  }
}

TaskForm.propTypes = {

  saveNewTask:PropTypes.func.isRequired,
  task:PropTypes.object.isRequired

};

export default TaskForm;