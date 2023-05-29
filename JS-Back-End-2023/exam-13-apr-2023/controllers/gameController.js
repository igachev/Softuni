const router = require('express').Router()
const gameService = require('../services/gameService.js')
const {getErrorMsg} = require('../utils/errorMsg.js')
const {isAuthorized} = require('../middlewares/authMiddleware.js')
const displayPlatform = require('../utils/platformMap.js')

router.get('/catalog', async (req,res) => {
    const games = await gameService.getAll()
    res.render('./gameView/catalog',{games})
})

router.get('/create',isAuthorized, (req,res) => {
    res.render('./gameView/create')
})

router.post('/create',isAuthorized, async (req,res) => {
    const {platform,name,image,price,genre,description} = req.body;
    const userId = req.user._id;
    try {
        const game = await gameService.create(platform,name,image,price,genre,description,userId)
        res.redirect('/games/catalog')
    } catch (err) {
       return res.render('./gameView/create',{error: getErrorMsg(err)}) 
    }
})

router.get('/:gameId/details', async (req,res) => {
    const gameId = req.params.gameId;
    const isAuthenticated = req.isAuthenticated
    const userId = req.user?._id;

    try {
        const game = await gameService.getOne(gameId)
        const isOwner = game.owner == userId
        const isBought = game.boughtBy?.find((buyer) => buyer._id == userId)
        
        res.render(`./gameView/details`,{game,isAuthenticated,isOwner,isBought})
    } catch (err) {
        return res.render(`./gameView/details`,{error: getErrorMsg(err)})
    }
})

router.get('/:gameId/buy', isAuthorized, async (req,res) => {
    const gameId = req.params.gameId;
    const userId = req.user?._id;
    await gameService.buy(gameId,userId)
    res.redirect(`/games/${gameId}/details`)
})

router.get('/:gameId/delete', isAuthorized, async (req,res) => {
    const gameId = req.params.gameId;
    await gameService.deleteOne(gameId)
    res.redirect('/games/catalog')
})

router.get('/:gameId/edit', isAuthorized, async (req,res) => {
    const gameId = req.params.gameId;
    const game = await gameService.getOne(gameId)
    const platform = game.platform;
    const platforms = displayPlatform(platform)
   // console.log(platforms);
    res.render('./gameView/edit',{game,platforms})
})

router.post('/:gameId/edit', isAuthorized, async (req,res) => {
    const {platform,name,image,price,genre,description} = req.body;
    const gameId = req.params.gameId;
    
    try {
        const data = {platform,name,image,price,genre,description}
        await gameService.editOne(gameId,data)
        res.redirect(`/games/${gameId}/details`)
    } catch (err) {
        return res.render(`./gameView/edit`,{error: getErrorMsg(err)})   
    }
})

router.get('/search', isAuthorized, async(req,res) => {
    const games = await gameService.getAll()
    res.render('./gameView/search',{games})
})

router.post('/search', isAuthorized, async(req,res) => {
    const {searchValue,platform} = req.body;

    try {
        const games = await gameService.searchByNameAndPlatform(searchValue,platform)
        res.render('./gameView/search',{games})
    } catch (err) {
        return res.render(`./gameView/search`,{error: getErrorMsg(err)}) 
    }
})

module.exports = router