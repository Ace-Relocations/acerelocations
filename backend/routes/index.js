const express = require('express');

const router = express.Router();

const auth = require('./auth.routes');
const test = require('./user.routes')

router.use('/api/auth', auth);
router.use('/api/test', test)


module.exports = router;