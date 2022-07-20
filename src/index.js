const express = require("express");

const app = express();
app.use(express.json());

const signup = require("./controllers/UserController");
const login = require("./controllers/loginController");
const todosController = require("./controllers/todosController");

app.post("/signup", signup);
app.post("/login", login);
app.use("/api/v1", todosController);

module.exports = app;
