import React, { Component } from 'react';
import 'styles/components/Header.scss';

export default ({ text }) => {
  return <h1 className='page-header'>{text}</h1>;
}
