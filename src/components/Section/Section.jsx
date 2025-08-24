import { Component } from "react";
import { Sec, Title } from "./Section";

export class Section extends Component {
  render() {
    return (
      <Sec>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </Sec>
    );
  }
}