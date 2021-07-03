const express = require('express');

const router = express.Router();

const auth = require('./auth.routes');
const customer = require('./customer.routes');
const job = require('./job.routes');
const invoice = require('./invoice.routes');
const expense = require('./expense.routes');
const dashboard = require('./dashboard.routes');

router.use('/api/auth', auth);
router.use('/api/customer', customer);
router.use('/api/job', job);
router.use('/api/invoice', invoice);
router.use('/api/expense', expense);
router.use('/api/dashboard', dashboard);



module.exports = router;