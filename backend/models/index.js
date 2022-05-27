const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.customer = require("./customer.model");
db.counter = require("./counter.model");
db.invoice = require("./invoice2021.model");
db.expense = require("./expense.model");
db.billCounter = require("./billCounter.model");
db.barcode = require("./barcode.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;