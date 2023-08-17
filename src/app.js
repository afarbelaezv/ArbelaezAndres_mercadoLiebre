const path = require('path');

const express = require("express");
const app = express();

const publicPath = path.resolve(__dirname,'../public');
app.use(express.static(publicPath));

app.get("/",function (req,res){
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/register.html",function (req,res){
    res.sendFile(path.join(__dirname, "views/register.html"))
});

app.get("/login.html",function (req,res){
    res.sendFile(path.join(__dirname, "views/login.html"))
});

const PORT = 3020;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});