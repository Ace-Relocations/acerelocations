const mongoose = require("mongoose");
//const Any = new Schema({ any: Schema.Types.Mixed });
const Schema = require('mongoose').Schema;

const Invoice = mongoose.model(
  "Invoice",
  new mongoose.Schema({
    gcnno: Number,
    invoiceDetails: Object
  })
);

module.exports = Invoice;
