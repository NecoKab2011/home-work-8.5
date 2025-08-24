import { Component } from "react";
import { List, Item } from "./Statistics.js";
import { Notification } from "../Notification/Notification.jsx";

export class Statistics extends Component {
  render() {
    return (
      <>
        {
          this.props.total === 0
            ? <Notification message="There is no feedback" />
            : <List>
              <Item>Good: {this.props.good}</Item>
              <Item>Neutral: {this.props.neutral}</Item>
              <Item>Bad: {this.props.bad}</Item>
              <Item>Total: {this.props.total}</Item>
              <Item>Positive feedback: {this.props.positivePercentage}</Item>
            </List>
        }
      </>
    );
  }
}