import React from 'react';

let TaskCheckbox = React.class({
  getInitialState: function() {
    //console.log("initial state");
    return {complete: false};
  },
  handleChange: function(/*e*/) {
    // console.log('changed');
    // console.log(!this.state.complete);
    // console.log(this.props.taskId);
    this.setState({complete: !this.state.complete});

     //if(this.state.complete)
      $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      type: 'PUT',
      data: {taskId: this.props.taskId, complete:!this.state.complete},
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        if(err){
          //console.error(this.props.url, status, err.toString());
        }
      }.bind(this)
    });
  },
//https://facebook.github.io/react/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state
  render: function() {
    return (
        <input type="checkbox" checked={this.state.complete} onChange={this.handleChange} />
      );
  }
});

export default TaskCheckbox;