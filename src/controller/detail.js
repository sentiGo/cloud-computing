const connection = require("../config/database");


const detail = async (req,res) => {
    const { id } = req.params;
    
    const query = `SELECT * FROM sby_data WHERE id='${id}'`
    const [rows] = await connection.query(query);

    const baseUrl = "https://storage.googleapis.com/capstone-project/imgDestinasi/";


    //untuk memsaukan url gambar destinasi ke masing2 data
    const detail = rows.map((item) => {
        const imgUrl = `${baseUrl}${item.kota}/${item.id}`;
        const rating = parseFloat(item.rating);
        return { ...item, img: imgUrl, rating};
    });

    res.send(detail)
}




module.exports = {
    detail,
};