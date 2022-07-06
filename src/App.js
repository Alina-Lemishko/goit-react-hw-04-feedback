import { useState } from 'react';
import Statistics from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const onHandleClick = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentageFeedback = 0;
    percentageFeedback = Math.floor((good / countTotalFeedback()) * 100);
    return percentageFeedback;
  };

  let total = countTotalFeedback();
  const objectName = Object.keys(state);

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={objectName}
        onLeaveFeedback={onHandleClick}
      ></FeedbackOptions>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
