const express = require('express');
const router = express.Router();

router.get('/index',(req,res)=>{
    res.render("index.ejs",{titulo: "My dinamic title"});
});

router.get('/services',(req,res)=>{
    res.render("services.ejs",{tituloServicios: "My dinamic services title "});
})

module.exports = router;