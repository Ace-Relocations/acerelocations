const mongoose = require("mongoose");

const Invoice = mongoose.model(
  "Invoice",
  new mongoose.Schema({
    gcnno: Number,
    invoiceDetails: Object,
    total: Number
  })
);

module.exports = Invoice;
