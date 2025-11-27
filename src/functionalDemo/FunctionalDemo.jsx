import React, { useState } from "react";
import "./FunctionalDemo.css";

function FunctionalDemo() {
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="heading">
      <h1>Counter: {counter}</h1>
      <button
        className="brown-pill"
        onClick={() => {
          setCounter(counter + 1);
          console.log(`Value of counter is : ${counter}`);
        }}
      >
        Increase
      </button>
      <button
        className="green-pill"
        onClick={() => {
          setCounter(counter - 1);
          console.log(`Value of the counter is : ${counter}`);
        }}
      >
        Decrease
      </button>
      <button className="blue-pill" onClick={()=>{
        setCounter(0);
        console.log(`Value of the Counter is :${counter}`);
        
      }}>
        Reset
      </button>
    </div>
  );
}

export default FunctionalDemo;
