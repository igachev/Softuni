const router = require('express').Router()
const {getErrorMessage} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const bookService = require('../services/bookService.js')

router.get('/create', authMiddleware.isAuthorized , (req,res) => {
    res.render('./bookView/create')
})

router.post('/create', authMiddleware.isAuthorized ,async (req,res) => {
    const {title,author,genre,stars,image,review} = req.body;
    const userId = req.user._id
    try {
        await bookService.create(title,author,genre,stars,image,review,userId)
        res.redirect('/books/catalog')
    } catch (err) {
       return res.render('./bookView/create',{error: getErrorMessage(err)})
    }
})

router.get('/catalog', async (req,res) => {
    
    try {
        const books = await bookService.getAll()
        res.render('./bookView/catalog', {books}) 
    } catch (err) {
        return res.render('./bookView/catalog',{error: getErrorMessage(err)})
    }

})

router.get('/:bookId/details', async (req,res) => {
    const bookId = req.params.bookId
    let isWished = false;
    try {
        const book = await bookService.getOne(bookId)
        const isOwner = req.user?._id == book.owner
        const wishingList = book.wishingList
        const findIfWished = wishingList.find((w) => w == req.user?._id )
        if(findIfWished) {
            isWished = true;
        }
        res.render('./bookView/details', {book, isOwner, isWished})
    } catch (err) {
        return res.render('./bookView/details',{error: getErrorMessage(err)})
    }

})

router.get('/:bookId/wish', async (req,res) => {
    const userId = req.user._id;
    const bookId = req.params.bookId
    await bookService.addToWishingList(bookId,userId)
    res.redirect(`/books/${bookId}/details`)
})

router.get('/:bookId/edit', authMiddleware.isAuthorized, async (req,res) => {
    const bookId = req.params.bookId;
    const book = await bookService.getOne(bookId)
    res.render('./bookView/edit', {book})
})

router.post('/:bookId/edit', authMiddleware.isAuthorized, async (req,res) => {
    const bookId = req.params.bookId;
    const {title,author,genre,stars,image,review} = req.body;

    try {
        const data = {title,author,genre,stars,image,review}
        const editedBook = await bookService.edit(bookId,data)
        res.redirect(`/books/${bookId}/details`)
    } catch (err) {
        return res.render('./bookView/edit',{error: getErrorMessage(err)})  
    }
})

router.get('/:bookId/delete', authMiddleware.isAuthorized, async (req,res) => {
    const bookId = req.params.bookId;
    const deletedBook = await bookService.delete(bookId)
    res.redirect('/books/catalog')
})

module.exports = router