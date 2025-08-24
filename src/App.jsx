import { Component } from "react";
import { Section } from "./components/Section/Section.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Statistics } from "./components/Statistics/Statistics.jsx";
import { GlobalStyles } from "./GlobalStyles.js"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = (event) => {
    const key = event.target.textContent.toLowerCase();
    this.setState({ [key]: this.state[key] + 1 });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total ? `${Math.round((good * 100) / total)}%` : "0%";
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    return (
      <>
      <GlobalStyles/>
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.countTotalFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}

export default App;