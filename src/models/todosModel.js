const mongoose = require("mongoose");

const todosSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    timeReamaining: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Todos = mongoose.model("todos", todosSchema);

module.exports = Todos;
