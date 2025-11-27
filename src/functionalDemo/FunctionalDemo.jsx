import React, { useState } from "react";
import "./FunctionalDemo.css";

function FunctionalDemo() {
  const [counter, setCounter] = useState(0);
  function increaseValue() {
    setCounter(counter + 1);
    console.log(`Value of the counter is : ${counter}`);
  }
  return (
    <div className="heading">
      <h1>Counter: {counter}</h1>
      <button className="brown-pill" onClick={increaseValue}>
        Increase
      </button>
    </div>
  );
}

export default FunctionalDemo;
