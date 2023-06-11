const express = require('express');
const listCityController = require('../controller/listCity')
const authenticateToken = require('../middleware/verifyJwt')

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('ini halaman list berdasarkan kota')
})
router.post('/',authenticateToken, listCityController.listByCity);


module.exports = router;