const router = require('express').Router()
const {errorMsg} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const photoService = require('../services/photoService.js')


router.get('/catalog', async (req,res) => {
    const photos = await photoService.getAll()
    
    res.render('./photoView/catalog', {photos})
})

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

router.get('/:photoId/details', async (req,res) => {
    const photoId = req.params.photoId
    const isAuthenticated = req?.isAuthenticated
    const userId = req.user?._id;
     
    try {
        const photo = await photoService.getOne(photoId)
        const isOwner = photo.owner == userId
        res.render('./photoView/details', {photo,isAuthenticated,isOwner})
    } catch (err) {
        console.log(err);
        
    }
})

module.exports = router