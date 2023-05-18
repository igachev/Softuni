const Book = require('../models/Book.js')

exports.create = async (title,author,genre,stars,image,review,ownerId) => {
const book = await Book.create({title,author,genre,stars,image,review,owner:ownerId})
return book
}

exports.getAll = async () => {
    const books = await Book.find({}).lean()
    return books
}

exports.getOne = async (bookId) => {
    const book = await Book.findById(bookId).lean()
    return book;
}

exports.addToWishingList = async (bookId,userId) => {
    const book = await Book.findById(bookId)
    book.wishingList.push(userId)
    await book.save()
    return book
}

exports.edit = async (bookId,data) => {
    const book = await Book.findByIdAndUpdate(bookId,data,{runValidators:true})
    return book
}

exports.delete = async (bookId) => {
    const book = await Book.findByIdAndDelete(bookId)
    return book
}

exports.getWishingList = async (userId) => {
    const wishedBooks = await Book.find({wishingList:userId}).lean()
    return wishedBooks
}