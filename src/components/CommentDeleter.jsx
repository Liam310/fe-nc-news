import React from 'react';

const CommentDeleter = ({ comment_id, removeComment }) => {
  const handleClick = () => {
    removeComment(comment_id);
  };
  return (
    <button onClick={handleClick} className="DeleteButton">
      DELETE COMMENT
    </button>
  );
};

export default CommentDeleter;
