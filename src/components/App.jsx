import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  // static defaultProps = {
  //   initialValue: 0,
  // };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    // console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFeedback = this.state.good;

    const result = Math.round((goodFeedback / total) * 100);

    return Number(result);
  };

  render() {
    const options = Object.keys(this.state);
    const { good, bad, neutral } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          width: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          backgroundColor: 'black',
        }}
      >
        <Section title="Please leve feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClickBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
