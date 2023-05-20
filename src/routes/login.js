const express = require('express');
const loginController = require('../controller/login')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('ini halaman login')
})
router.post('/', loginController.validasiUser);


module.exports = router;