const User = require("../models/userSchema");
const HttpError = require("../models/errorModel");

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  let realUser;

  //Grabs data based off the single value
  try {
    realUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError("Unable to login", 500);
    return next(error);
  }

  //Checks if credentials are valid
  if (!realUser || realUser.password !== password) {
    const error = new HttpError(
      "Login Failed, check credentials and try again",
      400
    );
    return next(error);
  }

  res.json({
    message: "logged in",
    user: realUser.toObject({ getters: true }),
  });
};

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
  let newUser = new User({ name, username, password, cards: [] });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Cannot create this User, try again", 500);
    return next(error);
  }
  // 201 status because data is created/added
  res.status(201).json({
    message: "Signed Up",
    users: newUser.toObject({ getters: true }),
  });
};

const updateUser = async (req, res, next) => {
  const { username, password } = req.body;
  const userId = req.params.userId;
  const existingUser = await User.findOne({ username: username });
  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Can't find user, try again", 404);
    return next(error);
  }

  user.username = username;
  user.password = password;

  // checks if user exists already
  if (existingUser) {
    const error = new HttpError("User already exists", 422);
    return next(error);
  }

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Can't update user information, try again",
      500
    );
    return next(error);
  }

  res.json({
    user: user.toObject({ getters: true }),
  });
};

const getUserInfo = async (req, res, next) => {
  const userId = req.params.userId;

  let user;

  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Fetching user data failed, please try again later",
      500
    );
    return next(error);
  }
  res.json({
    user: user.toObject({ getters: true }),
  });
};

exports.getUserInfo = getUserInfo;
exports.updateUser = updateUser;
exports.addNewUser = addNewUser;
exports.loginUser = loginUser;
