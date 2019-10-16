import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {
    commentBody: ''
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.commentBody}
          required
        />
        <button>Add comment</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.commentBody);
    this.setState({ commentBody: '' });
  };

  handleChange = event => {
    this.setState({ commentBody: event.target.value });
  };
}

export default CommentAdder;
