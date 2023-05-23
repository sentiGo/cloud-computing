// const multer = require('multer');

// function upload(req, res, next) {
//   const uploadMiddleware = multer({
//     storage: multer.memoryStorage(),
//     limits: {
//       fileSize: 5 * 1024 * 1024, // Batasan ukuran berkas (5MB)
//     },
//   });
//     res.json({
//       error: true,
//       message: 'minimum file size is 5MB'
//     })
//   uploadMiddleware.single('photo')(req, res, next);
// }

// module.exports = {
//   upload
// };

const multer = require('multer');

function upload(req, res, next) {
  const uploadMiddleware = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024, // Batasan ukuran berkas (5MB)
    },
  });

  // Gunakan middleware multer
  uploadMiddleware.single('photo')(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // Kesalahan yang terjadi karena batasan ukuran berkas
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          error: true,
          message: 'File size exceeds the limit of 5MB',
        });
      }
    } else if (err) {
      // Kesalahan lainnya
      return res.status(500).json({
        error: true,
        message: 'An error occurred while uploading the file',
      });
    }

    // Jika tidak ada kesalahan, lanjutkan ke middleware berikutnya
    next();
  });
}

module.exports = {
  upload
};