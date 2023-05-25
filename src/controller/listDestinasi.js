const connection = require("../config/database");

const listDestinasi = async (req, res) => {
    try {
        //query untuk mengambil data dan mensortirnya berdasarkan rating tertinggi
        const query = `SELECT id, nama, rating, latitude, longitude
        FROM sby_data
        ORDER BY rating DESC
        LIMIT 8;`;
        const [rows] = await connection.query(query);
        
        const baseUrl = "https://storage.googleapis.com/capstone-project/imgDestinasi/";

        //untuk memsaukan url gambar destinasi ke masing2 data
        const pushUrlImage = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.id}`;
            const rating = parseFloat(item.rating);
            return { ...item, img: imgUrl, rating};
        });

        res.json({
            error: 'false',
            message: 'List Destinasi',
            ListDestinasi: pushUrlImage
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
};

module.exports = {
    listDestinasi,
};
