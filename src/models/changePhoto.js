const dbPool = require("../config/database");

const updateImgUrl = (userId, publicUrl) => {
    
    const SQLQuery = `UPDATE users SET url_images = '${publicUrl}' WHERE id = '${userId}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    updateImgUrl
}