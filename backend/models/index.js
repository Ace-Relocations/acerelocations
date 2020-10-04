const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.customer = require("./customer.model");
db.counter = require("./counter.model");
db.invoice = require("./invoice.model");
db.expense = require("./expense.model");


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;