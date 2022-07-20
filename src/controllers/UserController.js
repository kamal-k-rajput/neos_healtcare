const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, "secret");
};
async function signup(req, res) {
  try {
    let user = await User.findOne({
      mobileNumber: req.body.mobileNumber,
    })
      .lean()
      .exec();

    if (!user) {
      let newUser = await User.create(req.body);
      var token = createToken(user); // generating token for the user
      return res.status(201).send({
        status: "ok",
        token: token,
        userName: newUser.userName,
        _id: newUser._id,
      });
    }
    return res.status(301).send({ message: "user already exist " });
  } catch (err) {
    return res.status(401).send({ err: err.message });
  }
}
module.exports = signup;
