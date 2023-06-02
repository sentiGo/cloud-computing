const connection = require("../config/database");


const detail = async (req, res) => {
    const { id } = req.params;

    try {
        //query untuk mengambil data bersdarkan id
        const query = `SELECT * FROM dataset_wisata WHERE id='${id}'`
        const [rows] = await connection.query(query);

        const data = rows[0];
        if(data == undefined){
            res.json({
                error: true,
                message: 'id not found'
            })
        }

        const baseUrl = "https://storage.googleapis.com/foto-profil-capstone/imgDestinasi/";

        //untuk memasaukan url gambar destinasi ke masing2 data
        const detail = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.city}/${item.id}.jpg`;
            const lat = parseFloat(item.lat);
            const lon = parseFloat(item.lon);
            const rating = parseFloat(item.rating);
            return {
                id: item.id,
                name: item.name,
                description: item.description,
                city: item.city,
                address: item.address,
                category: item.category,
                rating: rating,
                lat: lat,
                lon: lon,
                img: imgUrl,
            };
        });

        res.json({
            error: false,
            message: 'Detail Destinasi',
            detailDestinasi: detail
        })
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }


}




module.exports = {
    detail,
};