import React from 'react';

const SortSelector = ({ setSortCriteria, sort_by }) => {
  return (
    <form>
      <select onChange={e => setSortCriteria(e.target.value)} value={sort_by}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Number of comments</option>
        <option value="votes">Number of votes</option>
      </select>
    </form>
  );
};

export default SortSelector;
