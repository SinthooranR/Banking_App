const Card = require("../models/cardSchema");
const HttpError = require("../models/errorModel");
const User = require("../models/userSchema");
const mongoose = require("mongoose");

const addCard = async (req, res, next) => {
  const { userId, name, bank, cardNumber, cvc, expirationDate, balance } = req.body;

  let newCard = new Card({
    userId,
    name,
    bank,
    cardNumber,
    cvc,
    expirationDate,
    image:
      "https://img.favpng.com/21/25/6/integrated-circuit-smart-card-png-favpng-xfdh4XZJkFekCnUaXuLRbMGZ3.jpg",
      balance
  });

  let user;

  try {
    //the id used in the post requests (Can be found on the db)
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Adding Card Failed, cant find Username.", 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError("No User found in database", 404);
    return next(error);
  }

  try {
    await newCard.save();
    // only adds the card created id
    // references specific card attached to userId to add
    user.cards.push(newCard);
    await user.save();
  } catch (err) {
    const error = new HttpError("Creating card failed, try again", 500);
    return next(error);
  }

  res.status(201).json({
    card: newCard,
  });
};

const getCardsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithCards;

  try {
    userWithCards = await User.findById(userId).populate("cards");
  } catch (err) {
    const error = new HttpError(
      "Fetching cards failed, please try again later",
      500
    );
    return next(error);
  }

  if (!userWithCards || userWithCards.cards.length === 0) {
    return next(
      new HttpError("Could not find cards for the provided user id", 404)
    );
  }

  res.json({
    card: userWithCards.cards.map((card) => card.toObject({ getters: true })),
  });
};

const updateCard = async (req, res, next) => {
  const { name, expirationDate, balance } = req.body;
  const cardId = req.params.cid;
  let card;
  try {
    card = await Card.findById(cardId);
  } catch (err) {
    const error = new HttpError("Can't find card, try again", 404);
    return next(error);
  }
  card.name = name;
  card.expirationDate = expirationDate;
  card.balance = balance;

  try {
    await card.save();
  } catch (err) {
    const error = new HttpError("Can't update card, try again", 500);
    return next(error);
  }
  res.json({
    card: card.toObject({ getters: true }),
  });
};

const deleteCard = async (req, res, next) => {
  const cardId = req.params.cid;
  let card;
  try {
    // checks if the Place has user and checkss the user of all the data it has using populate
    card = await Card.findById(cardId).populate("userId");
  } catch (err) {
    const error = new HttpError(
      "Something went wrong, could not delete card.",
      500
    );
    return next(error);
  }

  try {
    await card.remove();
    // only adds the card created id
    // references specific card attached to userId to remove
    card.userId.cards.pull(card);
    await card.userId.save();
  } catch (err) {
    const error = new HttpError("Deleting card failed, try again", 500);
    return next(error);
  }

  res.json({
    message: "Deleted card",
  });
};

exports.deleteCard = deleteCard;
exports.updateCard = updateCard;
exports.addCard = addCard;
exports.getCardsByUserId = getCardsByUserId;
