import React, { Component } from "react";
import Counter from "./../components/Counter/index";
import config from "./../configs/index";

export default class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      currentAmount: config.DEFAULT_AMOUNT,
    };
  }
  handlerRange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };
  handlerRadio = ({ target: { value } }) => {
    this.setState({ currentAmount: Number(value) });
  };
  render() {
    const { step, currentAmount } = this.state;
    return (
      <section>
        <h2>Counter:</h2>
        <Counter step={step} currentAmount={currentAmount} />
        <input
          type="range"
          min={1}
          max={100}
          value={step}
          onChange={this.handlerRange}
        />
        {config.DEFAULT_AMOUNTS.map((elem, i) => (
          <label key={i}>
            <input
              type="radio"
              value={elem}
              checked={currentAmount === elem}
              onChange={this.handlerRadio}
            />
            {elem}
          </label>
        ))}
        <h3>{step}</h3>
      </section>
    );
  }
}
