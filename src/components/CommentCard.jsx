import React from 'react';
import { formatDate } from '../utils/utils';
import CommentDeleter from './CommentDeleter';
import Voter from './Voter';

const CommentCard = ({
  author,
  body,
  created_at,
  votes,
  user,
  comment_id,
  removeComment
}) => {
  return (
    <div className="CommentCard">
      <p>
        <strong>{author}: </strong>
        {body}
      </p>
      <p>Posted on {formatDate(created_at)}</p>
      <Voter votes={votes} type="comments" id={comment_id} />
      <br />
      {user === author && (
        <CommentDeleter comment_id={comment_id} removeComment={removeComment} />
      )}
    </div>
  );
};

export default CommentCard;
