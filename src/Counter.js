import React, { Fragment, useState } from "react";

const Counter = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = () => {
    setCounter(counter + 1);
  };
  const handleSubset = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>

      <h2>{counter === 20 ? <h1>"hola mundo"</h1> : " jodete"}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubset}>-1</button>
    </>
  );
};

export default Counter;
