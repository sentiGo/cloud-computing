const connection = require("../config/database");

const recByDistance = async (req, res) => {
    const { latitude, longitude } = req.body;
    const radiusInMeters = 10000;//jarak minimal 5KM

    try {
        // Validasi latitude dan longitude kosong atau tidak
        if (!latitude || !longitude) {
            return res.status(400).json({
                error: true,
                message: "Latitude and longitude are required",
            });
        }

        //query untuk mengambil data berdasarkan jarak terdekat dari user
        const query = `
        SELECT id, name, rating, lat, lon, city
        FROM dataset_wisata
        WHERE SQRT(POW((lat - ${latitude}), 2) + POW((lon - ${longitude}), 2)) <= ${radiusInMeters}
        ORDER BY SQRT(POW((lat - ${latitude}), 2) + POW((lon - ${longitude}), 2))
        LIMIT 20
        `;

        const [rows] = await connection.query(query);

        const baseUrl = "https://storage.googleapis.com/foto-profil-capstone/imgDestinasi/";

        //untuk memasaukan url gambar destinasi ke masing2 data
        const pushUrlImage = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.city}/${item.id}.jpg`;
            const lat = parseFloat(item.lat.replace(',', '.'));
            const lon = parseFloat(item.lon.replace(',', '.'));
            const rating = parseFloat(item.rating);
            return { ...item, img: imgUrl, lat, lon, rating};
        });

        
        console.log(pushUrlImage);

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
    recByDistance,
};
