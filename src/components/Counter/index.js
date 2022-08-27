import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  increment = () => {
    const { count } = this.state;
    const { step } = this.props;
    const { currentAmount } = this.props;
    this.setState({ count: count + currentAmount });
  };
  decrement = () => {
    const { count } = this.state;
    const { step } = this.props;
    const { currentAmount } = this.props;

    this.setState({ count: count - currentAmount });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
