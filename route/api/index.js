const express = require('express');
const router = express.Router();
const login = require('../../middleware/loginMiddleware');
router.use('/' ,login.loginRequire , require('./v1/home'));
module.exports = router;