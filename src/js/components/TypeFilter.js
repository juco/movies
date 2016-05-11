import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';

import 'styles/components/TypeFilter.scss';

export default ({valueChanged}) => {
  return (
    <div className="type-filter">
      <Dropdown valueChanged={valueChanged}
        defaultSelected="all"
        values={[
          { name: 'All', value: 'all' },
          { name: 'Movies', value: 'movies' },
          { name: 'TV', value: 'tv' }]}>
      </Dropdown>
    </div>
  );
};
