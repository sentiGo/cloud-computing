const connection = require("../config/database");

const recByDistance = async (req, res) => {
    const { latitude, longitude } = req.body;
    const radiusInMeters = 5000;//jarak minimal 5KM

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
        SELECT id, nama, rating, latitude, longitude, kota
        FROM sby_data
        WHERE SQRT(POW((latitude - ${latitude}), 2) + POW((longitude - ${longitude}), 2)) <= ${radiusInMeters}
        ORDER BY SQRT(POW((latitude - ${latitude}), 2) + POW((longitude - ${longitude}), 2))
        LIMIT 5
        `;

        const [rows] = await connection.query(query);

        const baseUrl = "https://storage.googleapis.com/capstone-project/imgDestinasi/";

        //untuk memsaukan url gambar destinasi ke masing2 data
        const pushUrlImage = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.kota}/${item.id}`;
            const latitude = parseFloat(item.latitude);
            const longitude = parseFloat(item.longitude);
            const rating = parseFloat(item.rating);
            return { ...item, img: imgUrl, latitude, longitude, rating};
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
