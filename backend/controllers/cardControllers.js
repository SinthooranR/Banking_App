const Card = require("../models/cardSchema");
const HttpError = require("../models/errorModel");
const User = require("../models/userSchema");
const mongoose = require("mongoose");

const getCardsByUserId = async (req, res, next) => {
  const userId = req.params.uid;

  let userWithCards;

  try {
      userWithCards = await User.findById(userId).populate('cards');
  } catch (err) {
    const error = new HttpError(
      "Fetching cards failed, please try again later",
      500
    );
    return next(error);
  }

  if (!userWithCards || userWithCards.cards.length === 0) {
    return next(new HttpError("Could not find cards for the provided user id", 404));
  }

  
  res.json({ card: userWithCards.cards.map(card => card.toObject({getters: true})) });

};

const addCard = async (req, res, next) => {
  const { userId, bank, cardNumber, cvc, expirationDate } = req.body;

  let newCard = new Card({
    userId,
    bank,
    cardNumber,
    cvc,
    expirationDate,
    image:
      "https://img.favpng.com/21/25/6/integrated-circuit-smart-card-png-favpng-xfdh4XZJkFekCnUaXuLRbMGZ3.jpg",
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

  // using mongooose session/transactions to create cards for the user
  try {
    // using transactions
    // starts a session with mongoos
    const session = await mongoose.startSession();
    session.startTransaction();
    await newCard.save({ session: session });
    // only adds the card created id
    user.cards.push(newCard);
    await user.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("Creating place failed, try aain", 500);
    return next(error);
  }

  res.status(201).json({
    card: newCard,
  });
};

exports.addCard = addCard;
exports.getCardsByUserId = getCardsByUserId;
