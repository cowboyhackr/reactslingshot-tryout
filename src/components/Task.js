import React from 'react';
import Remarkable from 'remarkable'

class Task extends React.Component{
  rawMarkup() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  }

  render() {
    return (
      <p>
     
          {this.props.author}
     
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </p>
    );
  }
}

export default Task;