import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import { Input } from "./components/Todo/Input";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Signup } from "./components/Profile/Signup";
import { Login } from "./components/Profile/Login";
import { DisplayTodo } from "./components/Todo/DisplayTodo/DisplayTodo";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/:id/todos" element={<DisplayTodo></DisplayTodo>} />
      </Routes>
    </div>
  );
}

export default App;
