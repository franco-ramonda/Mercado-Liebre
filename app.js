const express = require("express");

const path = require("path");

const app = express();

app.listen(3000);
    console.log('servidor corriendo');
//LOS MIDDLEWARE
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//LAS RUTAS
app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

