import { Component } from 'react';
import Buttons from './Buttons/Buttons';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBadBtnClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? (good * 100) / totalFeedback : 0;
  };
  render() {
    const totalFeedback = this.countTotalFeedback();
    return (
      <div className="container">
        <Buttons
          goodBtn={this.onGoodBtnClick}
          neutralBtn={this.onNeutralBtnClick}
          badBtn={this.onBadBtnClick}
        />

        {totalFeedback > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
