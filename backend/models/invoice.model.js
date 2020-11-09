const mongoose = require("mongoose");

const Invoice = mongoose.model(
  "Invoice",
  new mongoose.Schema({
    gcnno:{
      type: Number,
      required: true,
      unique: true,
    },
    billno:{
      type: Number,
      required: true,
      unique: true,
    },
    invoiceDetails: Object,
    total: Number,
    totalInText: String
  })
);

module.exports = Invoice;
