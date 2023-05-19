const registerModel = require('../models/register');

const createDataUser = async (req,res) => {
    const {body} = req;

    //validasi password lebih dari 8 karakter
    if(body.password.length < 8){
        return res.json({
            error: true,
            message: 'password minimum 8 character'
        })
    }

    await registerModel.createNewUser(body);

    res.json({
        error: false,
        message: 'User Created',
    })
}


module.exports = {
    createDataUser
}