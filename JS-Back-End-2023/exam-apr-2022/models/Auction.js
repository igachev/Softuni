const mongoose = require('mongoose')


const auctionSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,'title is required'],
        minLength:[4,'title must be at least 4 characters long']
    },
    description: {
        type: String,
        required: [true,'description is required'],
        maxLength:[200,'description must be less than 200 characters long']
    },
    category: {
        type: String,
        required: [true,'category is required'],
        enum: {
            values: ["vehicles", "estate", "electronics", "furniture", "other"],
            message: 'Invalid category'
         }
    },
    imageUrl: {
        type: String,
        required: [true,'imageUrl is required']
    },
    price: {
        type: Number,
        required: [true,'price is required'],
        min:[1,'price cannot be a negative number']
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: [true,'author is required']
    },
    bidder: [
        {
        type: mongoose.Types.ObjectId,
        ref:'User'
        }
    ],
    closed: {
         type: Boolean,
          default: false 
        }
  
})

const Auction = mongoose.model('Auction',auctionSchema)

module.exports = Auction