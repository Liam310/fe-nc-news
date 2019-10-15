import React from 'react';
import { capitaliseFirstLetter, formatDate } from '../utils/utils';
import { Link } from '@reach/router';

const ArticleListCard = ({
  title,
  author,
  topic,
  votes,
  comment_count,
  created_at,
  article_id
}) => {
  return (
    <div>
      <Link to={`/articles/${article_id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{formatDate(created_at)}</p>
      <h4>Written by: {author}</h4>
      <p>
        Topic:{' '}
        <Link to={`/articles/topic/${topic}`}>
          {capitaliseFirstLetter(topic)}
        </Link>
      </p>
      <p>
        Votes: {votes}, Comments: {comment_count}
      </p>
    </div>
  );
};

export default ArticleListCard;
