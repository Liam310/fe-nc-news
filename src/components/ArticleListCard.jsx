import React from 'react';

const ArticleListCard = ({ title, author, topic, votes, comment_count }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>Written by: {author}</h4>
      <p>Topic: {topic}</p>
      <p>Votes: {votes}</p>
      <p>Number of comments: {comment_count}</p>
    </div>
  );
};

export default ArticleListCard;
