import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
export const Login = () => {
  const [formdata, setFromData] = useState({
    mobileNumber: "",
    password: "",
  });
  const { setIsAuthenticated, isAuthenticated, setUserData, userData } =
    useContext(AuthContext);
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFromData({ ...formdata, [name]: value });
  }
  function submitForm(e) {
    e.preventDefault();
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    }).then(async (a) => {
      // response we get from the server..
      let response = await a.json();

      if (response.status) {
        const { userName, _id, token } = response;
        setIsAuthenticated(true);
        setUserData({
          userName,
          id: _id,
          token,
        });
        localStorage.setItem("token", token);
        localStorage.setItem("id", _id);
        alert("login success");
        // history.push("/");
      } else {
        alert("invalid credentials", "danger");
      }
      console.log(response, "response");
    });
  }

  return (
    <div id="/login">
      <h4>log in </h4>
      <form onSubmit={submitForm}>
        <label>Enter Mobile number</label>

        <input type="number" name="mobileNumber" onChange={handleChange} />

        <label> Enter password</label>
        <input type="password" name="password" onChange={handleChange} />

        <input type="submit" value="LOG IN" />
      </form>
      {isAuthenticated && (
        <Navigate to={`/${userData.id}/todos`} replace={true} />
      )}
    </div>
  );
};
