// Periksa apakah oldPassword sesuai dengan password yang ada dalam database
connection.query('SELECT password FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error('Error retrieving user:', error);
      return res.status(500).json({ error: true, message: 'Internal Server Error' });
    }

    // Periksa apakah pengguna dengan ID yang diberikan ditemukan
    if (results.length === 0) {
      return res.status(404).json({ error: true, message: 'User not found' });
    }

    const storedPassword = results[0].password;

    // Contoh sederhana: Memeriksa kesesuaian password
    if (storedPassword !== oldPassword) {
      return res.status(401).json({ error: true, message: 'Incorrect old password' });
    }

    // Lakukan penggantian password
    connection.query('UPDATE users SET password = ? WHERE id = ?', [newPassword, id], (error) => {
      if (error) {
        console.error('Error updating password:', error);
        return res.status(500).json({ error: true, message: 'Internal Server Error' });
      }

      // Response sukses
      res.json({ error: false, message: 'Password is updated' });
    });
});