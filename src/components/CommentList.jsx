import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentList extends Component {
  state = {
    comments: [],
    commentFailed: false
  };
  render() {
    const { comments } = this.state;
    const { user } = this.props;
    return (
      <div>
        <h3>Comments!</h3>
        <CommentAdder addComment={this.addComment} />
        {this.state.commentFailed && (
          <p className="CommentFailedPosting">
            It seems like we weren't able to post your comment for some reason.
            Please refresh the page and try again.
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
        return { comments: [newComment, ...currentState.comments] };
      });
    } catch (err) {
      this.setState({ commentFailed: true });
    }
  };

  removeComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.getComments();
    });
  };
}

export default CommentList;
