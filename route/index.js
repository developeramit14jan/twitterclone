const express = require('express');
const router = express.Router();
const home = require('./../controller/home')
router.use('/v1' , require('./api/index'));
router.get('/login' , home.login);
module.exports = router;