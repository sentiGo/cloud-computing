const express = require('express');
const byDistancerController = require('../controller/byDistance')
const authenticateToken = require('../middleware/verifyJwt')

const router = express.Router();

router.get('/',authenticateToken, byDistancerController.recByDistance);

module.exports = router;