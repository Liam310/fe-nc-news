import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentList extends Component {
  state = {
    comments: [],
    commentFailed: false,
    deleteFailed: false
  };
  render() {
    const { comments, commentFailed, deleteFailed } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h3>Comments!</h3>
        <CommentAdder addComment={this.addComment} />
        {commentFailed && (
          <p className="FailedRequest">
            It seems like we weren't able to post your comment for some reason.
            Please make sure you are logged in as one of the available users, then
            refresh the page and try again.
          </p>
        )}
        <br />
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
        {deleteFailed && (
          <p>
            Oh dear! It seems we weren't able to delete that comment. Please
            refresh the page and try again.
          </p>
        )}
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

  addComment = async commentBody => {
    const { user, article_id } = this.props;
    try {
      const newComment = await api.postComment(article_id, user, commentBody);
      this.setState(currentState => {
        return {
          comments: [newComment, ...currentState.comments],
          commentFailed: false
        };
      });
    } catch (err) {
      this.setState({ commentFailed: true });
    }
  };

  removeComment = async comment_id => {
    try {
      await api.deleteComment(comment_id);
      this.getComments();
    } catch (err) {
      this.setState({ deleteFailed: true });
    }
  };
}

export default CommentList;
