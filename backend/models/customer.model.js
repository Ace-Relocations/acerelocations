const mongoose = require("mongoose");
require('mongoose-type-email');

var Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    gcnno: {
        type: Number,
        required: true,
        unique: true,
      },
    consignorF: {
        type: String,
        required: true
      },
    consignorL: String,
    consigneeF: {
        type: String,
        required: true
      },
    consigneeL: String,
    contact: Number,
    email: {
        type: mongoose.SchemaTypes.Email
        },
    oaddress1: String,
    oaddress2: String,
    ocity: {
        type: String,
        required: true
      },
    ostate: String,
    opincode: String,
    daddress1: String,
    daddress2: String,
    dcity: {
        type: String,
        required: true
      },
    dstate: String,
    dpincode: String,
    car: Boolean,
    carGcnno: Number,
    insuranceP: Number,
    insuranceA: Number,
    insuranceAInText: String,
    type: String,
    createdBy: String,
    status: String,
    date: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    invoice: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice"
      }
    ],
    expense: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Expense"
      }
    ]   
  })
);


module.exports = Customer;