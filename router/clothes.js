const express = require('express');
const router = express.Router();
const clothes = require('../models/clotheSchema')

router.get('/', async (req, res) =>{

    try {
        const arrayRopaDB = await clothes.find();
        console.log(arrayRopaDB)
        res.render("clothes",{
            arrayRopa: arrayRopaDB
            // arrayRopa :[
                 //{id: 10001, nombre: 'Jogger',color: 'Negro'},
                 //{id: 10002, nombre: 'Camiseta',color: 'Rojo'},
                 //{id: 10003, nombre: 'Esqueleto',color: 'Azul'},
                 //{id: 10004, nombre: 'Licra',color: 'Gris'},
                 //{id: 10005, nombre: 'Jogger',color: 'Negro'},
                 //{id: 10006, nombre: 'Camiseta',color: 'Gris'},
                 //{id: 10007, nombre: 'Licra',color: 'Azul'},
             //]
         })
    } catch (error) {
        console.log(error)
    }
    
}); 

module.exports = router;