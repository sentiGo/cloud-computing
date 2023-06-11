const express = require('express');
const findDestinasiController = require('../controller/findDestinasi')
const authenticateToken = require('../middleware/verifyJwt')

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('ini halaman find destinasi by user request')
})
router.post('/',authenticateToken, findDestinasiController.userRequest);


module.exports = router;