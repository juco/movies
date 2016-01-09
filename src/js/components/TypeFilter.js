import React, { Component } from 'react';

export default ({filterChanged}) => {
  const changed = (ev) => {
    let filterType = ev.target.value || 'all';

    ev.preventDefault();
    filterChanged(filterType);
  }

  return (
    <select onChange={changed}>
      <option value="all">All</option>
      <option value="movies">Movies</option>
      <option value="shows">Shows</option>
    </select>
  );
}

