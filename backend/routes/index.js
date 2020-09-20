const express = require('express');

const router = express.Router();

const wallet = require('./wallet.routes');
const token = require('./token.routes');

router.use('/wallet', wallet);
router.use('/token', token);


module.exports = router;