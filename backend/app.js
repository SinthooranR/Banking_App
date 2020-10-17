require('dotenv').config({path: "../../Banking_App/.env"});
const uri = process.env.MONGO_URI;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const cardRoutes = require("./routes/cardRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", userRoutes); // => api/users/....

app.use("/api/cards", cardRoutes); // => api/cards/....



// when you have 4 params express treats its as a error middleware
app.use((error, req, res, next) => {
    // checks if response has been sent
    if (res.headerSent) {
      // prevents furthers responses from being sent
      return next(error);
    }
    // status of a error code or default 500 code
    res.status(error.code || 500);
    res.json({ message: error.message || "An unknown error occured" });
  });

// running the port after mongodb is connected
mongoose
  .connect(
    uri
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
