const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected!");
  }
);

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  googleID: String,
  photo: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
