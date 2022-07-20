const Todos = require("../models/todosModel");
const express = require("express");
const router = express.Router();

var authentication = require("../middlewares/authentication");

// Route: 1 -  get all Todos of the user GET "/api/Todos/allTodos", login required
router.get("/:id/allTodos", authentication, async (req, res) => {
  try {
    const todos = await Todos.find({ user: req.params.id });
    // const alltodos = await Todos.find({user})

    return res.json(todos);
  } catch (error) {
    // console.log(error.message)
    return res.status(500).send("internal server error");
  }
});

// Route: 2 -  add a note POST "/api/Todos/addNote", login required
router.post("/:id/addTodos", authentication, async (req, res) => {
  try {
    const { title, description, timeReamaining } = req.body;

    // if there are errors , return bad request

    const todo = new Todos({
      title,
      description,
      timeReamaining,
      user: req.params.id,
    });
    const saveTodo = await todo.save();

    return res.json({ ...saveTodo._doc, status: true });
  } catch (error) {
    // console.log(error.message)
    return res.status(500).send("internal server error");
  }
});

// Route: 3 -  update an exist note PATCH or PUT "/api/Todos/", login required
router.patch("/updateNote/:id", authentication, async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }

    // Find the todo and update
    let todo = await Todos.findById(req.params.id);
    if (!todo) {
      res.status(404).send("Not found");
    }
    // Allow the user to update the note
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    todo = await Todos.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(todo);
  } catch (error) {
    // console.log(error.message)
    res.status(500).send("internal server error");
  }
});

// Route: 4 -  delete an exist todo DELETE "/api/Todos/", login required
router.delete("/deleteNote/:id", authentication, async (req, res) => {
  try {
    // Find the todo and delete
    let todo = await Todos.findById(req.params.id);
    if (!todo) {
      res.status(404).send("Not found");
    }
    // Allow to delete the todo
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    todo = await Todos.findByIdAndDelete(req.params.id);
    res.json({ success: "Todo has been deleted successfully!", todo });
  } catch (error) {
    // console.log(error.message)
    res.status(500).send("internal server error");
  }
});

module.exports = router;
