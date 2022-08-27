import React, { useState, useEffect } from "react";

const LearnHook = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const handlerClickCount = () => {
    setCount((prevCount) => prevCount + step);
  };
  const handlerInputStep = ({ target: { value } }) => {
    setStep(Number(value));
  };
  useEffect(() => {
    console.log("add Listener");
    return console.log("remove listener");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handlerClickCount}>click</button>
      <input type="number" value={step} onChange={handlerInputStep} />
    </div>
  );
};

export default LearnHook;
