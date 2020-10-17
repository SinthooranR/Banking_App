const express = require("express");
// express validation library
const { check } = require("express-validator");
const cardController = require("../controllers/cardControllers");

const router = express.Router();

// used to show all cards the user owns
router.get("/:uid", cardController.getCardsByUserId);

// Used to add a card
router.post(
  "/addCard",
  check("name").not().isEmpty(),
  [check("username").isLength({ min: 6, max: 10 })],
  cardController.addCard
);

// Used to update card information or adding money
router.patch("/updateCard");

// Used to remove a card
router.delete("/removeCard");

module.exports = router;
