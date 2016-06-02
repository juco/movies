import React, { Component } from 'react';
import Dropdown from 'components/Dropdown';
import { FILTER_ALL, FILTER_TV, FILTER_MOVIE } from 'constants';


import 'styles/components/TypeFilter.scss';

export default ({valueChanged}) => {
  return (
    <div className="type-filter">
      <Dropdown valueChanged={valueChanged}
        defaultSelected="all"
        values={[
          FILTER_ALL,
          FILTER_MOVIE,
          FILTER_TV]}>
      </Dropdown>
    </div>
  );
};
