const express = require('express');
const changePwdController = require('../controller/changePassword')
const authenticateToken = require('../middleware/verifyJwt')


const router = express.Router();


router.get('/',(req,res)=>{
    res.send('ini halaman change password')
})
router.put('/:id',authenticateToken, changePwdController.changePwdUser);


module.exports = router;