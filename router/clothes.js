const express = require('express');
const router = express.Router();
const clothes = require('../models/clotheSchema')

router.get('/', async (req, res) => {
    try {
        const arrayRopaDB = await clothes.find();
        //console.log(arrayRopaDB)
        res.render('clothes', {
            arrayRopa: arrayRopaDB
        })
    } catch (error) {
        console.log(error)
    }

});

router.get('/create', async (req, res) => {
    res.render('create')
});

router.post('/', async (req, res) => {
    const body = req.body
    try {
        await clothes.create(body)
        res.redirect('/clothes')
    } catch (error) {
        console.log(error)
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const clothesDB = await clothes.findOne({ _id: id });
        res.render('detail', {
            prenda: clothesDB,
            error: false
        })
    } catch (error) {
        console.log(error)
        res.render('detail', {
            error: true,
            mensaje: 'No existe una prenda con ese id'
        })
    }
});

router.delete('/:id',async(req, res)=>{
    const id = req.params.id
    try {
        const clothesDB = await clothes.findByIdAndDelete({ _id: id })
        if (clothesDB) {
            res.json({
                estado: true,
                mensaje: 'Eliminado'
            })
        } else {
            res.json({
                estado: false,
                mensaje: 'Fallo al eliminar'
            })
        }
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', async(req, res)=>{
    const id = req.params.id
    const body = res.body
    console.log('id',id)
    console.log('body', body)
    try {
        const clothesDB = await clothes.findByIdAndUpdate(id, body, {useFindAndModify: false})
        console.log(clothesDB )
        res.json({
            estado: true,
            mensaje: 'Editado con exito'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'FALLA'
        })
    }
})

module.exports = router;