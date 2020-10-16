const User = require('../models/userSchema')
// based off the validators set in the route then add this in here
const { validationResult } = require("express-validator");
const HttpError = require("../models/errorModel");

// const loginUser = (req, res) => {
//     let User = new User(req.body);
//     newUser.save((err, User) => {
//       if (err) {
//         res.send(err);
//       }
//       res.json(User);
//     });
//   };

const addNewUser = async(req, res) => {
    let newUser = new User(req.body);
  
    await newUser.save((err, User) => {
      if (err) {
        res.send(err);
      }
      res.json(User);
    });
    
  };
exports.addNewUser = addNewUser;
// exports.loginUser = loginUser;