
var jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "invalid token" });
  }
  try {
    const data = jwt.verify(token, "secret");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "invalid token" });
  }
};

module.exports = authentication;
