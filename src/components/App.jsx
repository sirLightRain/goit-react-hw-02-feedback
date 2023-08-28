import { GlobalStyle } from 'GlobalStyle';
import { Layout } from 'Layuot';
import { Component } from 'react';
import { FeedbackOptions } from './Buttons/Buttons';
import { NoFeetback } from './NoFeetback/NoFeetback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedbackType => {
    this.setState(
      prevState => ({
        [feedbackType]: prevState[feedbackType] + 1,
      }),
      () => {
        this.updateStatistics();
      }
    );
  };

  updateStatistics = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage =
      total > 0 ? ((good / total) * 100).toFixed(2) : 0;

    this.setState({
      total,
      positivePercentage,
    });
  };

  noFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good === 0 && neutral === 0 && bad === 0;
  };

  render() {

    return (
      <Layout>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.noFeedback() ? (
            <NoFeetback />
          ) : (
            <Statistics dataState={this.state} />
          )}
        </Section>

        <GlobalStyle />
      </Layout>
    );
  }
}

