const express = require("express");
const passport = require("passport");
var bodyParser = require("body-parser");
const { Strategy } = require("passport-local");
const app = express();
const connectDB = require("./src/db/connect");
const userRoute = require("./src/routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", userRoute);

port = 3002;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server listening on port ${port}. . .`));
  } catch (error) {
    console.log(error);
  }
};
start();
