const express = require('express');
const detailController = require('../controller/detail')
const authenticateToken = require('../middleware/verifyJwt')


const router = express.Router();



router.get('/:id', authenticateToken, detailController.detail);


module.exports = router;