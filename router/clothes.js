const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render("clothes",{
        arrayRopa :[
            {id: 10001, nombre: 'Jogger',color: 'Negro'},
            {id: 10002, nombre: 'Camiseta',color: 'Rojo'},
            {id: 10003, nombre: 'Esqueleto',color: 'Azul'},
            {id: 10004, nombre: 'Licra',color: 'Gris'},
            {id: 10005, nombre: 'Jogger',color: 'Negro'},
            {id: 10006, nombre: 'Camiseta',color: 'Gris'},
            {id: 10007, nombre: 'Licra',color: 'Azul'},
        ]
    })
}); 

module.exports = router;