import React from 'react';
import PropTypes from 'prop-types';

// Компонент для пошуку, фільтрації данних при введені у інпут
const Filter = ({ filter, onChange }) => {
  return (
    <label>
      Find contact by name
      <input type="text" value={filter} onChange={onChange} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
