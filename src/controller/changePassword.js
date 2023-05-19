const connection = require("../config/database");
const newPasswordModel = require("../models/changePassword");

const changePwdUser = async (req, res) => {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    try {
        //query untuk mengambil data bedasarkan id
        const query = `SELECT * FROM users WHERE id='${id}'`
        const [rows] = await connection.query(query);
        
        //validasi id
        if (rows.length === 0) {
            return res.json({
                error: true,
                message: "id not found",
            });
        }

        //validasi oldpassword dengan password di database
        const data = rows[0];
        if (oldPassword !== data.password) {
            return res.json({
                error: true,
                message: 'Incorrect old password'
            });
        }
        
        //validasi karakter password lebih dari 8
        if(newPassword.length < 8){
            return res.json({
                error: true,
                message: 'password minimum 8 character'
            })
        }

        //menjalankan model newPassword untuk mengganti password
        await newPasswordModel.newPassword(id, newPassword);
        res.json({
            error: false,
            message: 'Password is updated'
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }
};

module.exports = {
    changePwdUser,
};
