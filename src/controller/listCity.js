const connection = require("../config/database");

const listByCity = async (req, res) => {
    try {
        const { city } = req.body;

        //query untuk mengambil data bedasarkan id
        const query = `SELECT id, name, rating, lat, lon, city FROM dataset_wisata WHERE city='${city}'`
        const [rows] = await connection.query(query);

        if (rows.length === 0) {
            return res.json({
                error: true,
                message: "input correct city name",
            });
        }

        const baseUrl = "https://storage.googleapis.com/foto-profil-capstone/imgDestinasi/";

        //untuk memsaukan url gambar destinasi ke masing2 data
        const pushUrlImage = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.city}/${item.id}.jpg`;
            const lat = parseFloat(item.lat.replace(',', '.'));
            const lon = parseFloat(item.lon.replace(',', '.'));
            const rating = parseFloat(item.rating);
            return { ...item, img: imgUrl, lat, lon, rating};
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
    listByCity,
};