import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';

class CommentList extends Component {
  state = {
    comments: []
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <h3>Comments!</h3>
        {comments.map(comment => {
          return <CommentCard {...comment} key={comment.comment_id} />;
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
}

export default CommentList;
