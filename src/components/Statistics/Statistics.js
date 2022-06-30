import React from 'react';
import shortid from 'shortid';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const goodKey = shortid.generate();
  const badKey = shortid.generate();
  const neutralKey = shortid.generate();
  const totalKey = shortid.generate();
  const feedbackKey = shortid.generate();
  return (
    <>
      {' '}
      <h2 className={s.title}>Statistics</h2>
      <ul>
        <li className={s.statList} key={goodKey}>
          Good: {good}
        </li>
        <li className={s.statList} key={neutralKey}>
          Neutral: {neutral}
        </li>
        <li className={s.statList} key={badKey}>
          Bad: {bad}
        </li>
        <li className={s.statList} key={totalKey}>
          Total: {total}
        </li>

        <li className={s.statList} key={feedbackKey}>
          Positive feedback: {good > 0 ? positivePercentage + `%` : 0 + `%`}
        </li>
      </ul>
    </>
  );
};

export default Statistics;
