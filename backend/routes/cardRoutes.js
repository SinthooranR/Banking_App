const express = require("express");
// express validation library
const { check } = require("express-validator");
const cardController = require("../controllers/cardControllers");

const router = express.Router();

// used to show all cards the user owns
// :uid - userID
router.get("/:uid", cardController.getCardsByUserId);


// Used to add a card
router.post(
  "/addCard",
  check("name").not().isEmpty(),
  [check("username").isLength({ min: 6, max: 10 })],
  cardController.addCard
);

// Used to update card information or adding money
//:uid - userID
// :cid - cardID
router.patch("/:cid", cardController.updateName);
router.patch("/:cid/expiration", cardController.updateRenewDate);
router.patch("/:cid/withdraw", cardController.updateWithdraw);
router.patch("/:cid/deposit", cardController.updateDeposit);


// Used to remove a card
router.delete("/:cid", cardController.deleteCard);

module.exports = router;
