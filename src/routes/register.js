const express = require('express');
const registerController = require('../controller/register')


const router = express.Router();



router.post('/', registerController.createDataUser);


module.exports = router;