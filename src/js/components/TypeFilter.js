import React, { Component } from 'react';

export default ({filterChanged}) => {
  const onChange = (ev) => {
    let filterType = ev.target.id || 'all';

    ev.preventDefault();
    filterChanged(filterType);
  }

  return (
    <ul>
      <li><a href="#" id="all" onClick={onChange}>All</a></li>
      <li><a href="#" id="movies" onClick={onChange}>Movies</a></li>
      <li><a href="#" id="shows" onClick={onChange}>Shows</a></li>
    </ul>
  );
}

