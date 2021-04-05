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

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//Motor de plantillas
app.set('view engine','ejs')
app.set('views',__dirname+'/view')

app.use(express.static(__dirname+"/public"))

app.get('/index',(req,res)=>{
    res.render("index.ejs",{titulo: "My dinamic title"})
});

app.get('/services',(req,res)=>{
    res.render("servicios.ejs",{tituloServicios: "My dinamic services title "})
})

app.use((req, res, next)=>{
    res.status(404).render("404.ejs",{mensaje: "404 not found"})
})

app.listen(port,()=>{
    console.log("Server en el puerto",port)
})


