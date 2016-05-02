import React from 'react';
import Nav from 'components/nav';

import 'styles/style.scss';

export default class TodoApp extends React.Component {
  render() {
    return (
      <div className="page-container">
        {this.props.children}
      </div>
    );
  }
}
