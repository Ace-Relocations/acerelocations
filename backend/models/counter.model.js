const mongoose = require("mongoose");

var Counter = mongoose.model(
    "Counter",
    new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
  })
);

  module.exports = Counter;