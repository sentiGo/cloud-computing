const dbPool = require("../config/database");

const createNewUser = (body) => {
    //query untuk input data 
    const SQLQuery = `INSERT INTO users (username, email, password) VALUES 
                    ('${body.username}', '${body.email}', '${body.password}')`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    createNewUser
}