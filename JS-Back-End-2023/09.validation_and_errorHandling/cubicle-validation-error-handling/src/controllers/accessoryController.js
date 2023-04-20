const router = require('express').Router()

const Accessory = require('../models/Accessory.js')

router.get('/create', (req,res) => {
    res.render('accessory/create')
})

router.post('/create', async (req,res) => {
    const {name, description, imageUrl} = req.body;
    try {
        const accessory = new Accessory({name,description,imageUrl})
        await accessory.save() 
    } catch (err) {
        console.log(err.message);
        return res.redirect('/404')
    }
     res.redirect('/')
})



module.exports = router