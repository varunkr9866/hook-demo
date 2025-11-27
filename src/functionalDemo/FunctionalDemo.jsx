import React from "react";
import "./FunctionalDemo.css";

function FunctionalDemo() {
  let state = {
    counter: 0,
  };
  function increaseValue() {
    state.counter++;
    console.log(`Value of the counter is :${state.counter}`);
  }
  return (
    <div className="heading">
      <h1>Counter: {state.counter}</h1>
      <button className="brown-pill" onClick={increaseValue}>
        Increase
      </button>
    </div>
  );
}

export default FunctionalDemo;
