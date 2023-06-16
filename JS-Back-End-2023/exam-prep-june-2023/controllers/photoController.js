const router = require('express').Router()
const {errorMsg} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const photoService = require('../services/photoService.js')

router.get('/create', authMiddleware.isAuthorized, (req,res) => {
    res.render('./photoView/create')
})

router.post('/create', authMiddleware.isAuthorized, async (req,res) => {
    const {name,age,description,location,image} = req.body;
    const userId = req.user?._id;

    try {
        await photoService.create(name,age,description,location,image,userId)
        res.redirect('/photos/catalog')
    } catch (err) {
        return res.render('./photoView/create',{error: errorMsg(err)})
    }
})

module.exports = router