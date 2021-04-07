const express = require('express');
const router = express.Router();

router.get('/index',(req,res)=>{
    res.render("index",{titulo: "My dinamic title"});
});

router.get('/services',(req,res)=>{
    res.render("services",{tituloServicios: "My dinamic services title "});
});

router.get('/prueba',(req,res)=>{
    res.render("services",{tituloServicios: "Prueba"});
})


module.exports = router;