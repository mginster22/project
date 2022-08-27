import React, { useState, useEffect } from "react";
import { format, addMilliseconds } from "date-fns";
const FunkStopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);

  const handlerStSt = () => {
    setIsRunning(!isRunning);
  };
  const handlerReset = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      const idInterval = setInterval(
        () => setTime((time) => addMilliseconds(time, 1000)),
        1000
      );
      return () => {
        clearInterval(idInterval);
      };
    }
  }, [isRunning]);

  return (
    <div>
      <h2>Time: {format(time, "HH:mm:ss")}</h2>
      <button onClick={handlerStSt}>{isRunning ? "stop" : "start"}</button>
      <button onClick={handlerReset}>Reset</button>
    </div>
  );
};

export default FunkStopWatch;
