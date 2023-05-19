const express = require('express');
const loginController = require('../controller/login')

const router = express.Router();

router.post('/', loginController.validasiUser);


module.exports = router;