const mongoose = require("mongoose");

const Invoice = mongoose.model(
  "Invoice",
  new mongoose.Schema({
    detail: [Schema.Types.Mixed],
    expense: [Schema.Types.Mixed]
  })
);

module.exports = Invoice;
