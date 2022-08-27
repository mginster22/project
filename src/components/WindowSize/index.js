import React, { useState } from "react";

const WindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const { width, height } = size;

  const handlerMove = (event) => {
    setSize({ width: event.clientX, height: event.clientY });
  };
  return (
    <div onMouseMove={handlerMove}>
      <p>x : {width}</p>
      <p>y : {height}</p>
    </div>
  );
};

export default WindowSize;
