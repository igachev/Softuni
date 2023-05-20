const router = require('express').Router()
const {getErrorMessage} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const cryptoService = require('../services/cryptoService.js')
const payment = require('../utils/paymentUtil.js')

router.get('/create', authMiddleware.isAuthorized, (req,res) => {
res.render('./cryptoView/create')
})

router.post('/create', authMiddleware.isAuthorized, async (req,res) => {
    const {name,image,price,description,paymentMethod} = req.body;
    const userId = req.user._id;
    try {
        const data = {name,image,price,description,paymentMethod}
        await cryptoService.create(data,userId)
        res.redirect('/crypto')
    } catch (err) {
        return res.render('./cryptoView/create', {error:getErrorMessage(err)})
    }
})

router.get('/', async (req,res) => {
    try {
       const crypto = await cryptoService.getAll()
       res.render('./cryptoView/catalog', {crypto}) 
    } catch (err) {
        return res.render('./cryptoView/catalog', {error:getErrorMessage(err)})
    }
})

router.get('/:cryptoId/details', async (req,res) => {
    const cryptoId = req.params.cryptoId
    const userId = req.user?._id;
    try {
        const crypto = await cryptoService.getOne(cryptoId)
        const isOwner = userId == crypto.owner
        const isAuthenticated = req.isAuthenticated
        const isBought = crypto.buyCrypto?.find((buyer) => buyer._id == userId)
        res.render('./cryptoView/details', {crypto, isOwner,isAuthenticated,isBought})
    } catch (err) {
        return res.render(`./cryptoView/${cryptoId}/details`, {error:getErrorMessage(err)}) 
    }
})

router.get('/:cryptoId/buy', async (req,res) => {
    const cryptoId = req.params.cryptoId
    const userId = req.user?._id;
    await cryptoService.buy(cryptoId,userId)
    res.redirect(`/crypto/${cryptoId}/details`)
})

router.get('/:cryptoId/delete', authMiddleware.isAuthorized, async (req,res) => {
    const cryptoId = req.params.cryptoId
    await cryptoService.delete(cryptoId)
    res.redirect('/crypto')
})

router.get('/:cryptoId/edit', authMiddleware.isAuthorized, async (req,res) => {
    const cryptoId = req.params.cryptoId
    const crypto = await cryptoService.getOne(cryptoId)
    const methods = payment(crypto.paymentMethod)
    res.render('./cryptoView/edit', {crypto,methods})
})

router.post('/:cryptoId/edit', authMiddleware.isAuthorized, async (req,res) => {
    const cryptoId = req.params.cryptoId
    const {name,image,price,description,paymentMethod} = req.body
    try {
        const data = {name,image,price,description,paymentMethod}
        await cryptoService.edit(cryptoId,data)
        res.redirect(`/crypto/${cryptoId}/details`)
    } catch (err) {
        return res.render('./cryptoView/edit', {error:getErrorMessage(err)})
    }
})

router.get('/search', async (req,res) => {
    try {
        const crypto = await cryptoService.getAll()
        res.render('./cryptoView/search', {crypto})
    } catch (err) {
        return res.render('./cryptoView/search', {error:getErrorMessage(err)})
    }
})

router.post('/search', async (req,res) => {
    const {searchValue,paymentMethod} = req.body;

    try {
        const crypto = await cryptoService.search(searchValue,paymentMethod)
        res.render('./cryptoView/search', {crypto})
    } catch (err) {
        return res.render('./cryptoView/search', {error:getErrorMessage(err)}) 
    }
})

module.exports = router