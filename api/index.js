const express = require("express");
const connectDB = require("./config/connectDB.js");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const { json } = require("body-parser");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const session = require('express-session');
const flash = require('express-flash'); 
const User = require("./models/users/userSchema.js");
require("dotenv").config();
connectDB();

// Express Session middleware


app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(json());
const port = process.env.PORT || 5000;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.get("/", (req, res) => {
  res.send("hello from simple server :");
});

app.use("/users", userRoutes);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);