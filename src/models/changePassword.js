const dbPool = require("../config/database");

const newPassword = (id, newPassword) => {
    //query untuk update data password
    const SQLQuery = `UPDATE users SET password = '${newPassword}' WHERE id = '${id}'`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    newPassword
}