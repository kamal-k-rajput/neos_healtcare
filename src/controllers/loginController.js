const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
function createToken(user) {
  return jwt.sign({ user }, "secret");
}
const login = async (req, res) => {
  try {
    let user = await User.findOne({ mobileNumber: req.body.mobileNumber })
      .lean()
      .exec();

    if (!user) {
      return res
        .status(201)
        .json({ message: "user not exists", status: false });
    }
    const passwordCompare = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordCompare) {
      success = false;
      return res
        .status(400)
        .json({ success, error: "please try to login correct credentials" });
    }

    const token = createToken(user); // creating token
    const { userName, _id } = user;
    return res.status(200).json({ userName, _id, token, status: true }); // returning response
  } catch (err) {
    // server error caught here...
    return res.status(401).json({ err: err.message, sucess: false });
  }
};

module.exports = login;
