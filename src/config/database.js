const mysql = require('mysql2');

//menyambungkan ke database
const dbPool = mysql.createPool({
  host: '35.225.179.14',
  user: 'member1',
  password: '.*PAF3yuq^DSjrn+',
  database: 'project',
});

dbPool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Koneksi ke database terputus.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Terlalu banyak koneksi ke database.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Koneksi ke database ditolak.');
    }
    console.error('Error saat terhubung ke database:', err.message);
  } else {
    console.log('Berhasil terkoneksi ke database MySQL.');
    connection.release();
  }
});

module.exports = dbPool.promise();