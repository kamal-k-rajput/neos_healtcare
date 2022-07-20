const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  mobileNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 4);
  this.password = hash;
  return next();
});

const User = mongoose.model("user", userSchema);

module.exports = User;
