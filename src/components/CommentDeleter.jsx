import React from 'react';

class CommentDeleter extends React.Component {
  // { comment_id, removeComment }
  state = {
    deleteDisabled: false
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        className="DeleteButton"
        disabled={this.state.deleteDisabled}
      >
        DELETE COMMENT
      </button>
    );
  }
  handleClick = () => {
    const { comment_id, removeComment } = this.props;
    this.setState({ deleteDisabled: true });
    removeComment(comment_id);
  };
}

export default CommentDeleter;
