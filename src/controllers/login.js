const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (err) {
          res.json({ message: "password incorrect" });
        }
        if (result) {
          token = jwt.sign({ name: user.name }, "secret value", {
            expiresIn: "1h",
          });
          res.json({ message: "Login successful!!", token: token });
        }
      });
    } else {
      res.send(404).json({ message: "no user found" });
    }
  });
};

module.exports = { login };
