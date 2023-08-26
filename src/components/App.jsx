import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layuot';
import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { NoFeetback } from './NoFeetback/NoFeetback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
    const feedbackType = event.currentTarget.value;
    const updatedState = { ...this.state };
    updatedState[feedbackType] += 1;
    this.setState(updatedState);
    this.countTotalFeedback(updatedState);
    this.countPositiveFeedbackPercentage(updatedState);
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    this.setState({ total });
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const positivePercentage =
      total > 0 ? ((good / total) * 100).toFixed(2) : 0;
    this.setState({ positivePercentage });
  };

  noFeetback = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <Layout>
        <h1>Please leave feedback</h1>
        <Buttons buttonClick={this.handleClick} />
        <h2>Statistics</h2>
        {this.noFeetback() ? (
          <NoFeetback/>
        ) : (
          <Statistics dataState={this.state} />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
