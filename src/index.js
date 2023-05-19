const express = require('express');
const registerRoutes = require('./routes/register.js')
const loginRoutes = require('./routes/login.js')
const changePwdRoutes = require('./routes/changePassword.js')

const app = express();

app.use(express.json())


app.use('/register',registerRoutes);
app.use('/login', loginRoutes)
app.use('/changePassword/', changePwdRoutes)

app.get('/',(req,res)=>{
    res.send('halo ini adalah halaman utama')
})




app.listen(3000,()=>{
    console.log("server berjalan di port 3000");
})