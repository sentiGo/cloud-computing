const express = require('express');
const registerController = require('../controller/register')


const router = express.Router();


router.get('/',(req,res)=>{
    res.send('ini halaman register')
})
router.post('/', registerController.createDataUser);


module.exports = router;