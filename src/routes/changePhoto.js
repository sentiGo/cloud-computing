const express = require('express');
const changePhotoController = require('../controller/changePhoto')
const authenticateToken = require('../middleware/verifyJwt')
const multerUpload = require('../middleware/multerUpload')

const router = express.Router();


router.get('/',(req,res)=>{
    res.send('ini halaman change photo profile')
})
router.put('/:id',authenticateToken, multerUpload.upload, changePhotoController.uplodPhotoProfile);


module.exports = router;