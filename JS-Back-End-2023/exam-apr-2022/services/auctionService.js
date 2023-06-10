const Auction = require('../models/Auction.js')

exports.create = async (title,category,imageUrl,price,description,author) => {
const auction = await Auction.create({title,category,imageUrl,price,description,author})
return auction
}

exports.getAll = async () => {
    const auctions = await Auction.find({closed:false}).lean()
    return auctions
}

exports.getOne = async (auctionId) => {
    const auction = await Auction.findById(auctionId).lean()
    return auction
}

exports.updatePrice = async (auctionId,newPrice,userId) => {
const auction = await Auction.findById(auctionId)
auction.price = newPrice
auction.bidder.push(userId)
await auction.save()
}

exports.deleteOne = async (auctionId) => {
    const auction = await Auction.findByIdAndDelete(auctionId)
    return auction
}

exports.edit = async (auctionId,data) => {
    const auction = await Auction.findByIdAndUpdate(auctionId,data,{runValidators:true})
    return auction
}

exports.setClosedToTrue = async (auctionId) => {
const auction = await Auction.findById(auctionId)
auction.closed = true;
await auction.save()
}

exports.filterByClosed = async (userId) => {
    let auctions = await Auction.find({closed:true,author:userId}).lean()
    return auctions
}