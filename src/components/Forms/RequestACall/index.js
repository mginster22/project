import React, { Component } from "react";
import s from "./RequestACall.module.css";
import cx from "classnames";

const isValueValid = {
  text: "",
  tel: "",
  telValid: true,
  textValid: true,
};

class RequestACall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...isValueValid,
    };
  }
  handlerForm = (event) => {
    event.preventDefault();
    this.setState({ ...isValueValid });
  };
  handlerInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value, [`${name}Valid`]: !value.includes(" ") });
  };
  render() {
    const { text, tel, telValid, textValid } = this.state;
    const textCLass = cx(s.input, { [s.invalid]: !textValid });
    const telClass = cx(s.input, { [s.invalid]: !telValid });
    return (
      <section className={s.section}>
        <h2 className={s.heading}>Request a call</h2>
        <p className={s.text}>
          Enter your contact phone number and we will call you back within 5
          minutes
        </p>
        <form onSubmit={this.handlerForm}>
          <label className={s.labelform}>
            <span>Enter your Name:</span>
            <input
              onChange={this.handlerInput}
              value={text}
              className={textCLass}
              type="text"
              name="text"
            />
            <span> Enter your number:</span>
            <input
              onChange={this.handlerInput}
              value={tel}
              className={telClass}
              type="tel"
              name="tel"
            />
            <input className={s.submit} type="submit" />
          </label>
        </form>
      </section>
    );
  }
}

export default RequestACall;
