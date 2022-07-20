
const mongoose = require("mongoose");

module.exports = async () => {
  console.log("connected to mongodb://127.0.0.1:27017/neos_healthcare_todo");
  return await mongoose.connect(
    "mongodb://127.0.0.1:27017/neos_healthcare_todo"
  );
};
