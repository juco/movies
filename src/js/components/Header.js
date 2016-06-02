import React, { Component } from 'react';
import 'styles/components/Header.scss';
import headerImage from '../../../img/header.jpg';

export default () => {
  return (
    <div className="header">
      <img className="header-img" src={headerImage} />
    </div>
  );
}
