const mongoose = require("mongoose");

var Counter = mongoose.model(
    "BillCounter",
    new mongoose.Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
  })
);

  module.exports = Counter;