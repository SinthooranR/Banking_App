require('dotenv').config();
const uri = process.env.MONGO_URI;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(bodyParser.json());
app.use(cors());

// middleware which uses the logic from places-route
// app.use("/api/cards", ); // => api/cards/....

app.use("/api/users", userRoutes);

// app.use("/", (req, res, next) => {
//   res.send("<h1>Hello</h1>");
// });

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
