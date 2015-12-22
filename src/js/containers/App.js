import React from 'react';
import { Link } from 'react-router';

import 'styles/style.scss';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}
