import React, { Component } from 'react';

import 'styles/components/Rating.scss';

const STAR_COUNT = 10;

export default ({stars}) => {
  let el = () => {
    let els = [];
    stars = parseInt(stars);

    for(let i = 1; i <= STAR_COUNT; i++) {
      els.push(i <= stars ?
        <span className="star" key={i}>&#9733;</span> :
        <span className="star" key={i}>&#9734;</span>
      );
    }

    return els;
  };

  return (
    <div className="rating">{el()}</div>
  );
}

