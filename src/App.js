import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    let percentageFeedback = 0;
    percentageFeedback = Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return percentageFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    let total = this.countTotalFeedback();
    const objectName = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={objectName}
          onLeaveFeedback={this.onHandleClick}
        ></FeedbackOptions>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default App;

// App.propTypes = {
//   title: PropTypes.string.isRequired,
//   // options: PropTypes.arrayOf({
//   //   key: PropTypes.string.isRequired,
//   //   type: PropTypes.string.isRequired,
//   //   name: PropTypes.string.isRequired,
//   // }).isRequired,
//   onLeaveFeedback: PropTypes.func,
// };
