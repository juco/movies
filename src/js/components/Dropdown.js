import React, { Component } from 'react';
import classNames from 'classnames/bind';

import 'styles/components/TypeFilter.scss';

class TypeFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.itemSelected = this.itemSelected.bind(this);

    this.state = {
      isOpen: false,
      selected: this.props.default || 'Please select'
    };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  itemSelected(ev) {
    const value = ev.target.getAttribute('data-value');
    const text = ev.target.text;

    this.props.valueChanged(value);
    this.setState({ isOpen: false, selected: text });
  }

  renderItem(item) {
    return (
      <li key={item.value}>
        <a href="#" data-value={item.value} onClick={this.itemSelected}>
          {item.name}
        </a>
      </li>
    );
  }

  render() {
    let menuClasses = classNames({
      'dropdown-menu': true,
      open: this.state.isOpen
    });

    return (
      <div className="dropdown">
        <button className="dropdown-toggle"
                onClick={this.toggle}>
          { this.state.selected }
          <span className="dropdown-toggle-icon">
            &#9660;
          </span>
        </button>

        <ul className={menuClasses}>
          {this.props.values.map(item => this.renderItem(item))}
        </ul>
      </div>
    );
  }
}

export default TypeFilter;
