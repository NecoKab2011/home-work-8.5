import { Component } from "react";
import { List, Item, Btn } from "./FeedbackOptions";

export class FeedbackOptions extends Component {
  render() {
    return (
      <List>
        {this.props.options.map((element, id) => (
          <Item key={id}>
            <Btn onClick={this.props.onLeaveFeedback}>{element}</Btn>
          </Item>
        ))}
      </List>
    );
  }
}
