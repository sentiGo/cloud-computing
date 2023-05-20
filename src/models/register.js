const dbPool = require("../config/database");

const createNewUser = (username, email, password) => {
    //query untuk input data 
    const SQLQuery = `INSERT INTO users (username, email, password) VALUES 
                    ('${username}', '${email}', '${password}')`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    createNewUser
}