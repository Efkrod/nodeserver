const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Variables de entorno
require('dotenv').config();
const port = process.env.PORT || 3000;

//Conexion a base de datos
const uri=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.1xe0c.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    {useNewUrlParser:true, useUnifiedTopology:true}
)
    .then(()=> console.log('Base de datos conectada'))
    .catch(e=> console.log(e));

//Motor de plantillas
app.set('view engine','ejs');
app.set('views',__dirname+'/view');

app.use(express.static(__dirname+"/public"));

//Rutas web
app.use('/', require('./router/routes.js'));
app.use('/clothes', require('./router/clothes.js'))

app.use((req, res, next)=>{
    res.status(404).render("404.ejs",{mensaje: "404 not found"});
});

app.listen(port,()=>{
    console.log("Server en el puerto",port);
});


