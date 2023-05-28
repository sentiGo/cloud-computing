const connection = require("../config/database");


const detail = async (req, res) => {
    const { id } = req.params;

    try {
        //query untuk mengambil data bersdarkan id
        const query = `SELECT * FROM sby_data WHERE id='${id}'`
        const [rows] = await connection.query(query);

        const baseUrl = "https://storage.googleapis.com/capstone-project/imgDestinasi/";


        //untuk memsaukan url gambar destinasi ke masing2 data
        const detail = rows.map((item) => {
            const imgUrl = `${baseUrl}${item.kota}/${item.id}`;
            const rating = parseFloat(item.rating);
            return { ...item, img: imgUrl, rating };
        });

        res.send(detail)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: true, message: 'Internal Server Error' });
    }


}




module.exports = {
    detail,
};