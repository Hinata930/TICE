import React, { useState } from 'react';

const SortDropdown = ({ onSortChange }) => {
  const [sortType, setSortType] = useState('createdAtDesc');

  const handleChange = (event) => {
    const value = event.target.value;
    setSortType(value);
    onSortChange(value);
  };

  return (
    <select value={sortType} onChange={handleChange}>
      <option value="dueDateAsc">Due Date Ascending</option>
      <option value="dueDateDesc">Due Date Descending</option>
      <option value="createdAtAsc">Created At Ascending</option>
      <option value="createdAtDesc">Created At Descending</option>
    </select>
  );
};

export default SortDropdown;
