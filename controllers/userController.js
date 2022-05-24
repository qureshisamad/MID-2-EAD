const User = require("../models/User");


const create = (req, res) => {
    res.render("create");
  };
  
  User.findByIdAndRemove
  User.findByIdAndDelete
  
  const signup = (req, res) => {
    console.log(req.body);
    User.create(req.body, (err, user) => {
      if (err) {
        return res.redirect("/signup");
      }
      console.log(user);
      res.redirect("/");
    });
  };
  module.exports = { create, signup };