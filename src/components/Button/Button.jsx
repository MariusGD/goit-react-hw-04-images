import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick, show }) => {
  return (
    <button
      onClick={onClick}
      className={css.LoadMoreButton}
      style={{ display: show ? 'block' : 'none' }}
    >
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired, // Funcție pentru încărcarea următoarei serii de imagini
  show: PropTypes.bool.isRequired, // Afișează sau nu butonul în funcție de existența imaginilor
};

export default Button;
