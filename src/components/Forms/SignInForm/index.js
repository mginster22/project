import React, { Component } from "react";
import s from "./SignInForm.module.css";
import cx from "classnames";

const isValidValue = {
  email: "",
  password: "",
  emailValid: true,
  passwordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...isValidValue,
    };
  }

  handlerForm = (event) => {
    event.preventDefault();
    this.setState({ ...isValidValue });
  };

  handlerInput = ({ target: { value, name } }) => {
    this.setState({ [name]: value, [`${name}Valid`]: !value.includes(" ") });
  };

  render() {
    const { email, password, emailValid, passwordValid } = this.state;
    const emailClass = cx(s.input, { [s.invalid]: !emailValid });
    const passwordClass = cx(s.input, { [s.invalid]: !passwordValid });
    return (
      <form className={s.form} onSubmit={this.handlerForm}>
        <input
          onChange={this.handlerInput}
          value={email}
          type="email"
          className={emailClass}
          name="email"
          placeholder="email"
        />
        <input
          onChange={this.handlerInput}
          value={password}
          type="password"
          className={passwordClass}
          name="password"
          placeholder="password"
        />
        <input
          type="submit"
          className={s.submit + " " + s.input}
          name="submit"
          value="Send info"
        />
      </form>
    );
  }
}

export default SignInForm;
