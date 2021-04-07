const express = require('express');
const router = express.Router();
const clothes = require('../models/clotheSchema')

router.get('/', async (req, res) =>{

    try {
        const arrayRopaDB = await clothes.find();
        console.log(arrayRopaDB)
        res.render("clothes",{
            arrayRopa: arrayRopaDB
         })
    } catch (error) {
        console.log(error)
    }
    
}); 

router.get('/create', async (req, res)=>{
    res.render("create")
});

module.exports = router;