const express = require('express');
const router = express.Router();
const home = require('../../../controller/home');
router.get('/home', home.homePage);
router.get('/register' , home.signUp);
console.log('router');
module.exports = router;