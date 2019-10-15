import React from 'react';
import { formatDate } from '../utils/utils';

const CommentCard = ({ author, body, created_at, votes }) => {
  return (
    <div className="CommentCard">
      <p>
        <strong>{author}: </strong>
        {body}
      </p>
      <p>Posted on {formatDate(created_at)}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
