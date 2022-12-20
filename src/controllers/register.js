const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.status(400).json({ message: " error . .pls try again" });
    }
    let user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
    });
    user
      .save()
      .then((user) => {
        res.status(200).json({ message: "user added successfully" });
      })
      .catch((error) => {
        res.json({ message: "an error occured" });
      });
  });
};

module.exports = {
  register,
};
