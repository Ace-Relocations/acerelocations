const mongoose = require("mongoose");
require('mongoose-type-email');

var Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    gcnno: {
      type: Number,
      unique: true,
      required: true
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
      type: String
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
    gst: String,
    dcity: {
      type: String,
      required: true
    },
    dstate: String,
    dpincode: String,
    carGcnno: Number,
    insuranceP: Number,
    insuranceA: Number,
    insuranceCarP: Number,
    insuranceCarA: Number,
    insuranceAInText: String,
    insuranceCarAInText: String,
    type: String,
    createdBy: String,
    status: String,
    date: String,
    item: Object,
    assignedUser: String,
    isInvoiceAdded: {
      type: Boolean,
      default: false
    },
    isExpenseAdded: {
      type: Boolean,
      default: false
    },
    items: Number,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    invoice: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invoice2021"
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