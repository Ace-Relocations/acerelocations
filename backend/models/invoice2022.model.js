const mongoose = require("mongoose");

const Invoice2022 = mongoose.model(
  "Invoice2022",
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
    invoiceDate: String,
    total: Number,
    totalInText: String
  })
);

module.exports = Invoice2022;
