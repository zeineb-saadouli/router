
// src/components/Filter.js
import React, { useState } from 'react';

const Filtre = ({ onFilterChange }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    onFilterChange({ title: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onFilterChange({ title, rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Search by rating"
        value={rating}
        onChange={handleRatingChange}
        min="1"
        max="10"
      />
    </div>
  );
};

export default Filtre;



