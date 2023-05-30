const connection = require("../config/database");


const userProfile = async (req, res) => {
    const { id } = req.params;

    try {
        //query untuk mengambil data bersdarkan id
        const query = `SELECT * FROM users WHERE id='${id}'`
        const [rows] = await connection.query(query);

        const data = rows[0];

        //validasi apakah data kosong atau tidak
        if (data == undefined) {
            res.json({
                error: true,
                message: "User not found"
            })
        }

        res.json({
            error: false,
            message: "User found",
            userData: {
                userId: data.id,
                username: data.username,
                email: data.email,
                img: data.url_images
            }
        })


    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }


}




module.exports = {
    userProfile,
};