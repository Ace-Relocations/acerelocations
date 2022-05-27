const mongoose = require("mongoose");

const Invoice2021 = mongoose.model(
  "Invoice2021",
  new mongoose.Schema({
    gcnno:{
      type: Number,
      required: true,
      unique: true,
    },
    billno:{
      type: String,
      required: true,
      unique: true,
    },
    invoiceDetails: Object,
    invoiceDate: String,
    total: Number,
    totalInText: String
  })
);

module.exports = Invoice2021;
