import React, { Component } from 'react';
import 'styles/components/Header.scss';

export default ({ text }) => {
  return (
    <div className="header">
      <img className="header-img" src="../../../img/header.jpg" />
    </div>
  );
}
