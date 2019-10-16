import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentList extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h3>Comments!</h3>
        <CommentAdder addComment={this.addComment} />
        {comments.map(comment => {
          return (
            <CommentCard
              {...comment}
              key={comment.comment_id}
              user={user}
              removeComment={this.removeComment}
            />
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    const { article_id } = this.props;
    const comments = await api.fetchCommentsById(article_id);
    this.setState({ comments });
  };

  addComment = commentBody => {
    const { user, article_id } = this.props;
    api.postComment(article_id, user, commentBody).then(newComment => {
      this.setState(currentState => {
        return { comments: [newComment, ...currentState.comments] };
      });
    });
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.getComments();
    });
  };
}

export default CommentList;
