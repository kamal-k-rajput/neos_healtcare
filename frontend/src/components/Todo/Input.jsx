import React from "react";
import { useState, useContext } from "react";
import "./Input.css";
import { TodosContext } from "../../context/TodosContext";
export const Input = () => {
  let { todos, setTodos } = useContext(TodosContext);
  let id = localStorage.getItem("id");
  let token = localStorage.getItem("token");
  const [formdata, setFromData] = useState({
    title: "",
    completed: false,
    timeReamaining: 0,
    description: "",
    user: id,
  });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFromData({ ...formdata, [name]: value });
  }
  function submitTask(e) {
    e.preventDefault();
    fetch(`http://localhost:8080/api/v1/${id}/addTodos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": token,
      },
      body: JSON.stringify(formdata),
    }).then(async (resp) => {
      let result = await resp.json();
      if (result.status) {
        alert("task added successfully");
        setTodos(!todos);
      }
    });
  }
  return (
    <div className="input-box-container">
      <form onSubmit={submitTask}>
        <h3>Task Details</h3>

        <textarea
          name="description"
          placeholder="Enter task here.."
          rows="4"
          onChange={handleChange}
        ></textarea>

        <input type="time" name="timeReamaining" onChange={handleChange} />
        <input
          type="text"
          name="title"
          placeholder="Title .."
          onChange={handleChange}
        />
        <input type="submit" value="ADD TASK" />
      </form>
    </div>
  );
};
