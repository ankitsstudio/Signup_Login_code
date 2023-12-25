const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;