const registerModel = require('../models/register');
const connection = require("../config/database");

const createDataUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(email);
    try {
        //validasi email sudah digunakan atau belum
        const query = `SELECT * FROM users WHERE email='${email}'`
        const [rows] = await connection.query(query);
        if (rows.length >= 1) {
            res.json({
                error: true,
                message: 'email already exist'
            })
        }
        
        //validasi password lebih dari 8 karakter
        if (password.length < 8) {
            return res.json({
                error: true,
                message: 'password minimum 8 character'
            })
        }

        await registerModel.createNewUser(username,email,password);

        res.json({
            error: false,
            message: 'User Created',
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }


}


module.exports = {
    createDataUser
}