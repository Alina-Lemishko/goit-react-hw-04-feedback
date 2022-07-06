import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      <ul>
        <li className={s.statList}>Good: {good}</li>
        <li className={s.statList}>Neutral: {neutral}</li>
        <li className={s.statList}>Bad: {bad}</li>
        <li className={s.statList}>Total: {total}</li>

        <li className={s.statList}>
          Positive feedback: {good > 0 ? positivePercentage + `%` : 0 + `%`}
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
