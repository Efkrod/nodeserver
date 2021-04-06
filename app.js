/*const {f,m,p} = require("./objetos");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Hi everyone",
    e: "W",
    T: "U "
}));

const impresion = f.forEach(fruta => {
    console.log(fruta)
})
console.log(m)
const separar = (persona) => {
    persona.split()
    return persona[0]
}

console.log(separar(p.nombre))*/

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Conexion a base de datos
const mongoose = require('mongoose');
const user='efkrod';
const password='dtnsCPhEcuCJwBDq';
const dbname='clothingStore'
const uri=`mongodb+srv://${user}:${password}@cluster0.1xe0c.mongodb.net/${dbname}?retryWrites=true&w=majority`;

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


