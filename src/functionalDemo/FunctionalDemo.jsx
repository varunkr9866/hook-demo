import React, { useState } from "react";
import "./FunctionalDemo.css";

function FunctionalDemo() {
  const [userData, setUserData] = useState({
    fullname: null,
    email: null,
    phone: null,
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.full_name.value);
    console.log(e.target.email.value);
    console.log(e.target.mobile.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Name : <input name="full_name"/></h2>
        <h2>Email : <input name="email"/></h2>
        <h2>Phone: <input name="mobile"/></h2><br/>
        <button className="brown-pill" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FunctionalDemo;
