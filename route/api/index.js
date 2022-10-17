const express = require('express');
const router = express.Router();
const login = require('../../middleware/loginMiddleware');
// ,login.loginRequire 
router.use('/' , require('./v1/home'));
module.exports = router;