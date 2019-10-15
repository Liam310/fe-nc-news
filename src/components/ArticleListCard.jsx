import React from 'react';
import { capitaliseFirstLetter, formatDate } from '../utils/utils';

const ArticleListCard = ({
  title,
  author,
  topic,
  votes,
  comment_count,
  created_at
}) => {
  console.log(formatDate(created_at));
  return (
    <div>
      <h2>{title}</h2>
      <p>{created_at}</p>
      <h4>Written by: {author}</h4>
      <p>Topic: {capitaliseFirstLetter(topic)}</p>
      <p>
        Votes: {votes}, Comments: {comment_count}
      </p>
    </div>
  );
};

export default ArticleListCard;
