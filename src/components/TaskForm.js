import React, {PropTypes} from 'react';


class TaskForm extends React.Component {
  getInitialState() {
    return {author: '', text: ''};
  }

  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }

  handleTextChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onTaskSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }

  render() {
    return (
      <form className="taskForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Task..."
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Context..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}

TaskForm.propTypes = {
  onTaskSubmit: PropTypes.func.isRequired

};

export default TaskForm;