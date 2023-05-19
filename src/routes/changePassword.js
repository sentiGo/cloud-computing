const express = require('express');
const changePwdController = require('../controller/changePassword')
const authenticateToken = require('../middleware/verifyJwt')


const router = express.Router();



router.put('/:id',authenticateToken, changePwdController.changePwdUser);


module.exports = router;