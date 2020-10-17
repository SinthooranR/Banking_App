const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  bank: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  cvc: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

// a special module export for mongoose, the first being the Model name, and the second being the Schema being used
module.exports = mongoose.model("Card", cardSchema);
