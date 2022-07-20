import React, { useEffect, useState, useContext } from "react";

import { Input } from "../Input";
import "./DisplayTodo.css";
import { TodosContext } from "../../../context/TodosContext";
export const DisplayTodo = () => {
  const { todos } = useContext(TodosContext);
  const [data, setdata] = useState([]);
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");
  useEffect(() => {
    /// fetch todos function here
    token &&
      fetch(`http://localhost:8080/api/v1/${id}/allTodos`, {
        headers: {
          "auth-token": token,
        },
      }).then(async (response) => {
        let result = await response.json();
        setdata(result);
      });
  }, [id, token, todos]);
  return (
    <div id="/todos">
      <Input />
      <h1> Your todo's here</h1>
      {data.map((el) => {
        console.log(el);
        return (
          <div className="todo-container">
            <div>Title:{el.title}</div>
            <div>Discription:{el.description}</div>
            <div>time remaining:{el.timeReamaining}</div>
            {/* <Link to="/update">update</Link> */}
          </div>
        );
      })}
    </div>
  );
};
