const authMiddleware = require('../middlewares/authMiddleware.js')
const errorMsg = require('../utils/errorMsg.js')
const auctionService = require('../services/auctionService.js')
const authService = require('../services/authService.js')
const displayCategory = require('../utils/categoryMap.js')
const router = require('express').Router()

router.get('/publish', authMiddleware.isAuthorized, (req,res) => {
    res.render('./auctionView/create')
})

router.post('/publish', authMiddleware.isAuthorized, async (req,res) => {
    const {title,category,imageUrl,price,description} = req.body;
    const userId = req.user?._id;
    
    try {
    await auctionService.create(title,category,imageUrl,price,description,userId)
    res.redirect('/auction/browse')
    } catch (err) {
        return res.render('./auctionView/create', {error: errorMsg(err)})
    }
})

router.get('/browse', async (req,res) => {
    try {
        const auctions = await auctionService.getAll()
        res.render('./auctionView/browse', {auctions})
    } catch (err) {
        return res.render('./auctionView/browse', {error: errorMsg(err)})
    }
})

router.get('/:auctionId/details', async (req,res) => {
    const auctionId = req.params.auctionId;
    const userId = req.user?._id;
    const isAuthenticated = req.isAuthenticated
    
    try {
        const auction = await auctionService.getOne(auctionId)
        const isOwner = auction.author == userId

        if(isOwner) {
            const currentBidderId = auction.bidder[auction.bidder.length-1]
            const currentBidder = await authService.getBidder(currentBidderId)
             const author = await authService?.getAuthor(auction.author)
           
            res.render('./auctionView/details-owner',{auction,isAuthenticated,currentBidder,author})
        }

        else {
            const author = await authService.getAuthor(auction.author)
           const alreadyBid = Boolean(auction.bidder[auction.bidder.length-1]?._id == userId)
            res.render('./auctionView/details', {auction,isAuthenticated,author,alreadyBid})
        }
        
    } catch (err) {
        console.log(err);
    }
    
})

router.post('/:auctionId/details', async (req,res) => {
    const auctionId = req.params.auctionId;
    const userId = req.user?._id;
    const {amount} = req.body;

    try {
        const auction = await auctionService.getOne(auctionId)
        const isOwner = auction.author == userId
        const alreadyBid = Boolean(auction.bidder[auction.bidder.length-1]?._id == userId)

        if(alreadyBid) {
            throw new Error('Error! You are the current highest bidder!')
        }

        if(!isOwner && !alreadyBid) {
            if(amount <= auction.price) {
                throw new Error('Bid amount must be higher!')
            }
        }

        await auctionService.updatePrice(auctionId,amount,userId)
        
        res.redirect(`/auction/${auctionId}/details`)

    } catch (err) {
        return res.render('./auctionView/details', {error: errorMsg(err)})
    }
})

router.get('/:auctionId/delete', async (req,res) => {
    const auctionId = req.params.auctionId;
    try {
        await auctionService.deleteOne(auctionId)
        res.redirect('/auction/browse')
    } catch (err) {
        return res.render('./auctionView/details-owner', {error: errorMsg(err)})
    }
})

router.get('/:auctionId/edit', async (req,res) => {
    const auctionId = req.params.auctionId;

    try {
        const auction = await auctionService.getOne(auctionId)
        const category = auction.category;
        const updatedCategories = displayCategory(category)
        const hasBidder = auction.bidder.length > 0 ? true : false;
        res.render('./auctionView/edit', {auction, updatedCategories, hasBidder})
    } catch (err) {
        return res.render('./auctionView/edit', {error: errorMsg(err)})
    }
})

router.post('/:auctionId/edit', async (req,res) => {
    const auctionId = req.params.auctionId;
    const {title,category,imageUrl,price,description} = req.body;

    try {
        const data = {title,category,imageUrl,price,description}
        await auctionService.edit(auctionId,data)
        res.redirect(`/auction/${auctionId}/details`)
    } catch (err) {
        return res.render('./auctionView/edit', {error: errorMsg(err)})
    }
})

router.get('/:auctionId/close', async (req,res) => {
    const auctionId = req.params.auctionId;
    await auctionService.setClosedToTrue(auctionId)
    res.redirect('/auction/close')
})

router.get('/close', async (req,res) => {
    const userId = req.user?._id;
    const authorName = await authService.getAuthor(userId)
    const filteredByClosed = await auctionService.filterByClosed(userId)
    res.render('./auctionView/closed-auctions', {filteredByClosed, authorName})
})

module.exports = router