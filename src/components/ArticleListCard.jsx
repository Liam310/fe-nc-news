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
          <div className="ArticleListCardInfo">
            <p>
              Posted on {formatDate(created_at)} by <em> {author}</em>
            </p>
            <p>Topic: {capitaliseFirstLetter(topic)}</p>
            <p>
              {votes} votes | {comment_count} comments
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleListCard;
