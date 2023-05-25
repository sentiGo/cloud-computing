const { Storage } = require('@google-cloud/storage');
const updateDataUrl = require("../models/changePhoto");
const path = require('path');



const uplodPhotoProfile = async (req, res) => {
    try {
        //menghubungkan ke google cloud storage
        const storage = new Storage({
            projectId: 'capstoneproject-387305',
            keyFilename: path.join(__dirname, '../../public/keyfile.json')
        });
        const bucketName = 'foto-profil-capstone';

        //ambil data dari request
        const userId = req.params.id;
        const file = req.file;

        //validasi apakah file yg di upload kosong/tidak
        if (!file) {
            return res.status(400).json({ error: true, message: 'No file uploaded' });
        }
        
        //deklarisi pra upload file
        const bucket = storage.bucket(bucketName);
        const filename = `${userId}_${file.originalname}`;
        const fileUpload = bucket.file(filename);
        
        //upload file ke google cloud storage
        await fileUpload.save(file.buffer, {
            contentType: file.mimetype,
            metadata: {
              cacheControl: 'public, max-age=31536000',
            },
        });
    
        const publicUrl = `https://storage.googleapis.com/${bucketName}/imgProfile/${filename}`;

        //update data url_images berdasarkan id user
        await updateDataUrl.updateImgUrl(userId, publicUrl)

        res.json({ 
            error: false, 
            message: 'Photo is updated',
         });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
    
}

module.exports = {
    uplodPhotoProfile
}