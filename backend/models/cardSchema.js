const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },

});

// a special module export for mongoose, the first being the Model name, and the second being the Schema being used
module.exports = mongoose.model("Card", cardSchema);
