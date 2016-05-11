import React, { Component } from 'react';
import classNames from 'classnames/bind';

import 'styles/components/Dropdown.scss';

class Dropdown extends Component {
  static propTypes = {
    values: React.PropTypes.array.isRequired,
    defaultSelected: React.PropTypes.string
  }

  constructor(props) {
    const { values, defaultSelected } = props;
    const defDefault = { name: 'Please select', value: null };

    super(props);

    this.state = {
      isOpen: false,
      selected: values.find(v => v.value === defaultSelected) || defDefault
    };

    this.toggle = this.toggle.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  itemSelected(selected) {
    this.props.valueChanged(selected.value);
    this.setState({ isOpen: false, selected });
  }

  renderItem(item) {
    const clickHandler = this.itemSelected.bind(this, item);

    return (
      <li key={item.value}>
        <a href="#" onClick={clickHandler}>
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
          {this.state.selected.name}
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

export default Dropdown;
