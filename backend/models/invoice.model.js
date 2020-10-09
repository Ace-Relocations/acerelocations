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
    total: Number
  })
);

module.exports = Invoice;
