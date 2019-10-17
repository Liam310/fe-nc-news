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
    <div className="ArticleListCard">
      <Link to={`/articles/${article_id}`}>
        <div>
          <h2>{title}</h2>
          <p>{formatDate(created_at)}</p>
          <h4>Written by: {author}</h4>
          <p>Topic: {capitaliseFirstLetter(topic)}</p>
          <p>
            Votes: {votes}, Comments: {comment_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ArticleListCard;
