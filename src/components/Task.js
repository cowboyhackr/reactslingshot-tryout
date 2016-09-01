import React, {PropTypes} from 'react';
import Remarkable from 'remarkable';

class Task extends React.Component{

  constructor(props){
    super(props);

  }

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

Task.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired

};

export default Task;