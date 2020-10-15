const express = require("express");

// express validation library
const { check } = require("express-validator");

const router = express.Router();

router.post("/login", [
  check("username").isLength({ min: 6, max: 10 }),
  check("password").isLength({ min: 6, max: 10 }),
]);

router.post("/signup", [
  check("name").not().isEmpty(),
  check("username").isLength({ min: 6, max: 10 }),
  check("password").isLength({ min: 6, max: 10 }),
]);
