const express = require('express');

const router = express.Router();

const auth = require('./auth.routes');
const customer = require('./customer.routes');
const job = require('./job.routes')

router.use('/api/auth', auth);
router.use('/api/customer', customer);
router.use('/api/job', job);


module.exports = router;