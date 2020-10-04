const mongoose = require("mongoose");

const Expense = mongoose.model(
  "Expense",
  new mongoose.Schema({
    gcnno: Number,
    expenseDetails: Object,
    total: Number
  })
);

module.exports = Expense;