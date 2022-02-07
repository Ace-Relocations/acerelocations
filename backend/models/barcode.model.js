const mongoose = require("mongoose");
require('mongoose-type-email');

var Barcode = mongoose.model(
  "Barcode",
  new mongoose.Schema({
    empCode: {
      type: Number,
      unique: true,
      required: true
    },
    empName: {
      type: String,
      required: true
    },
    fromLocation: String,
    fromFloor: String,
    fromWing: String,
    department: String,
    box: String,
    boxLabels: [[Number]],
    toLocation: String,
    toFloor: String,
    toWing: String,
    workstationNo: String,
    createdBy: String,
    date: String,
    createdAt: { type: Date, default: Date.now() },
  })
);


module.exports = Barcode;