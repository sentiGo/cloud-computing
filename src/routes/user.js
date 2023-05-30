const express = require('express');
const userController = require('../controller/user')
const authenticateToken = require('../middleware/verifyJwt')

const router = express.Router();

router.get('/:id',authenticateToken, userController.userProfile);

module.exports = router;