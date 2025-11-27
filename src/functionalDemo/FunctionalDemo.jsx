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
    setUserData({
      fullname : e.target.full_name.value,
      email : e.target.email.value,
      phone : e.target.mobile.value
    });
  }

  return (
    <div>
      <h1>Name : {userData.fullname}</h1>
      <h1>Email : {userData.email}</h1>
      <h1>Phone : {userData.phone}</h1>
      <br/>
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
