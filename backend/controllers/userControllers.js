const User = require("../models/userSchema");
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

const addNewUser = async (req, res, next) => {

  const { name, username, password } = req.body;

  // custom email validator
  let existingUser;
  try {
    // finds one document that matches
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError("Signing up failed, try again", 500);
    return next(error);
  }

  // checks if user exists already
  if (existingUser) {
    const error = new HttpError("User already exists", 422);
    return next(error);
  }

  //name: name, username: username, password: password
  let newUser = new User({ name, username, password });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Cannot create this User, try again", 500);
    return next(error);
  }
  // 201 status because data is created/added
  res.status(201).json({message:"Signed Up", users: newUser.toObject({ getters: true })});
};
exports.addNewUser = addNewUser;
// exports.loginUser = loginUser;
