const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String, //gets URL not a actual file
    required: true,
  },
  cards: [
    {
      type: mongoose.Types.ObjectId, //helps mongo determine the id
      required: true,
      ref: "Card", //connects current scheme with another Schema
    },
  ],
  savingsGoal: {
    type: Number,
    required: true,
  }
});

// a special module export for mongoose, the first being the Model name, and the second being the Schema being used
module.exports = mongoose.model("User", userSchema);
