import React, { useState, useReducer } from "react";
import reducer from "./reducer";

const SignUpForm = () => {
  const reducer = (state, action) => {
    const { name, value } = action;
    const newState = {
      ...state,
      [name]: value,
    };
    return newState;
  };
  const [state, dispatch] = useReducer(reducer, {
    fname: "",
    sname: "",
    email: "",
    password: "",
    phone: "",
    age: 18,
  });
  const {fname,sname,email,password,phone,age}=state
  const handlerInput = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" name="fname" value={fname} onChange={handlerInput} />
        <input type="text" name="sname" value={sname} onChange={handlerInput} />
        <input
          type="email"
          name="email"
          value={email}
          onChange={handlerInput}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlerInput}
        />
        <input type="text" name="phone" value={phone} onChange={handlerInput} />
        <input type="number" name="age" value={age} onChange={handlerInput} />
      </form>
    </div>
  );
};

export default SignUpForm;
