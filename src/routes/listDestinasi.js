const express = require('express');
const listDestinasiController = require('../controller/listDestinasi')
const authenticateToken = require('../middleware/verifyJwt')

const router = express.Router();

router.get('/',authenticateToken, listDestinasiController.listDestinasi);

module.exports = router;