import React from 'react';

let Task = React.class({
  rawMarkup: function() {
    let md = new Remarkable();
    let rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup };
  },

  render: function() {
    return (
      <p>
     
          {this.props.author}
     
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </p>
    );
  }
});

export default Task;