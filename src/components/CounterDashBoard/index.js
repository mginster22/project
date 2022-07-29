import React, { Component } from "react";

class CounterDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  back = () => {
    this.setState({ count: this.state.count - 1 });
  };
  go = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { count } = this.state;
    return (
      <>
        <p>{count}</p>
        <button onClick={this.go}>go</button>
        <button onClick={this.back}>back</button>
      </>
    );
  }
}

export default CounterDashBoard;
