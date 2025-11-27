import { useState } from "react";


function HandleChangeDemo() {
    const [input,setInput] = useState('empty');

    function handleChange(e){
        setInput(e.target.value);
    }
  return (
    <div>
      <h2 style={{"color" : "orange", "fontWeight" : "bold"}}>Typed name : {input}</h2>
      Input : <input type="text" name="input" onChange={handleChange}/>
    </div>
  );
}

export default HandleChangeDemo;
