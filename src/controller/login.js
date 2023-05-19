const connection = require("../config/database");
const jwt = require('jsonwebtoken');

const validasiUser =  async (req, res) => {
    const {body} = req;
    //query untuk mengambil data berdasarkan email dan password
    const query = `SELECT * FROM users WHERE email='${body.email}' AND password='${body.password}'`
    const [rows] = await connection.query(query);

    //validasi email dan password 
    if (rows.length === 0) {
        return res.status(404).json({ 
            error: 'true',
            message: 'email atau password salah'
    });
    }else{
        const data = rows[0];

        //membuat payload
        const user = {
            id: data.id,
            username: data.username
        };

        //pemberian token authentication
        const token = jwt.sign(user, 'rahasia-kunci-rahasia');

        res.json({
            error: false,
            message: "success",
            loginResult: {
                userId: data.id,
                username: data.username,
                token: token
            }  

        });
    }
    
}

module.exports = {
    validasiUser
}