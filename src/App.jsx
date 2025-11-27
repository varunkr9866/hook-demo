import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(200);

  useEffect(printCounter, [counterTwo,counterOne]);

  function printCounter() {
    console.log(`Value of counter is ${counterTwo}`);
  }
  return (
    <div>
      <h1 className="heading">Counter One Value is : {counterOne}</h1>
      <button
        className="brown-pill"
        onClick={() => {
          setCounterOne(counterOne + 1);
        }}
      >
        Increase
      </button>
      <h1 className="heading">Counter One Value is : {counterTwo}</h1>
      <button
        className="green-pill"
        onClick={() => {
          setCounterTwo(counterTwo + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default App;
