import React from 'react';
// import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.btnList}>
      {options.map(el => (
        <li key={el}>
          <button
            className={s.btnItem}
            type="button"
            name={el}
            onClick={onLeaveFeedback}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf({
//     key: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }).isRequired,
//   onLeaveFeedback: PropTypes.func,
// };
