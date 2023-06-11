const connection = require("../config/database");
const fetch = require('node-fetch');

const userRequest = async (req, res) => {
    try {
        const { description } = req.body;

        const url = 'https://predict-kpcn5qxa6q-uc.a.run.app/predict';

        const data = {
            text: description
        };

        //mengubungkan dang mengirim body ke ML API
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json();

        //query SQL untuk mengambil data berdasarkan id
        const query = `SELECT id, name, rating, lat, lon, city 
                FROM dataset_wisata WHERE id IN (${responseData[0].Record}, ${responseData[1].Record}, ${responseData[2].Record}, ${responseData[3].Record}, ${responseData[4].Record})`;

        const [rows] = await connection.query(query);

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
    userRequest,
};
