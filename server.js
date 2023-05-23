const express = require('express');
const registerRoutes = require('./src/routes/register.js')
const loginRoutes = require('./src/routes/login.js')
const changePwdRoutes = require('./src/routes/changePassword.js')
const changePhotoRoutes = require('./src/routes/changePhoto.js')
const bodyParser = require('body-parser');

const app = express();

app.use(express.json())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/register',registerRoutes);
app.use('/login', loginRoutes)
app.use('/changePassword/', changePwdRoutes)
app.use('/changePhoto/', changePhotoRoutes)

app.get('/',(req,res)=>{
    res.send('halo ini adalah halaman utama')
})




app.listen(3000,()=>{
    console.log("server berjalan di port 3000");
})