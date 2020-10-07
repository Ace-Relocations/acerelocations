const mongoose = require("mongoose");

const Expense = mongoose.model(
  "Expense",
  new mongoose.Schema({
    gcnno: {
      type: Number,
      required: true,
      unique: true,
    },
    expenseDetails: Object,
    total: Number
  })
);

module.exports = Expense;