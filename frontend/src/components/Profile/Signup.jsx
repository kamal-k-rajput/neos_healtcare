import React, { useState } from "react";
import "./Signup.css";

export const Signup = () => {
  const [formdata, setFromData] = useState({
    userName: "",
    mobileNumber: "",
    email: "",
    password: "",
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFromData({ ...formdata, [name]: value });
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(formdata);
    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then(async (a) => {
      let response = await a.json();
      console.log(response, "response");
    });
  }
  return (
    <div id="/signup">
      <h3>sign up</h3>
      <form className="signup-form-container" onSubmit={submitForm}>
        <input
          type="text"
          name="userName"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <input
          inputMode="numeric"
          name="mobileNumber"
          placeholder="Enter mobile number"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
};
