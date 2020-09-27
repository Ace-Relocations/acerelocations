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
    consignor: {
        type: String,
        required: true
      },
    consignee: {
        type: String,
        required: true
      },
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
    insuranceP: Number,
    insuranceA: Number,
    type: String,
    createdBy: String,
    status: String,
    date: String,
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    // invoice : [new Schema({
    //     expense: {type: String},
    //     amount : {type: Number}
    // }, {strict: false})
    // ]   
  }, {strict: false} )
);


module.exports = Customer;