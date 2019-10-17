import React from 'react';

const SortSelector = ({ setSortCriteria, sort_by }) => {
  return (
    <form>
      <select onChange={e => setSortCriteria(e.target.value)} value={sort_by}>
        <option value="created_at">Most recent</option>
        <option value="comment_count">Most commented</option>
        <option value="votes">Most upvoted</option>
      </select>
    </form>
  );
};

export default SortSelector;
