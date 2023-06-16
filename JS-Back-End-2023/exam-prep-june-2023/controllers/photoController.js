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
        const isOwner = photo.owner._id == userId
        res.render('./photoView/details', {photo,isAuthenticated,isOwner})
    } catch (err) {
        console.log(err);
        
    }
})

router.post('/:photoId/details', async (req,res) => {
    const {comment} = req.body;
    const photoId = req.params.photoId
    const userId = req.user?._id;

    try {
        await photoService.addComment(photoId,userId,comment)
        res.redirect(`/photos/${photoId}/details`)
    } catch (err) {
        console.log(err);
        
    }
})

router.get('/:photoId/edit', async (req,res) => {
    try {
        const photoId = req.params.photoId
        const photo = await photoService.getOne(photoId)
        res.render('./photoView/edit',{photo})
    } catch (err) {
        console.log(err);
    }
})

router.post('/:photoId/edit', async (req,res) => {
    const photoId = req.params.photoId
    const {name,age,description,location,image} = req.body;
    try {
        const data = {name,age,description,location,image}
        await photoService.edit(photoId,data)
        res.redirect(`/photos/${photoId}/details`)
    } catch (err) {
        return res.render('./photoView/edit',{error: errorMsg(err)})
    }
})

module.exports = router