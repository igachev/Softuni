const mongoose = require('mongoose')

const cryptoSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'name is required'],
        minLength:[2,'name must be at least 2 characters long']
    },
    image: {
        type:String,
        required:[true,'image is required']
    },
    price: {
        type:Number,
        required:[true,'price is required'],
        min:[1,'price must be a positive number']
    },
    description: {
        type:String,
        required:[true,'description is required'],
        minLength:[10,'description must be at least 10 characters long']
    },
    paymentMethod: {
        type:String,
        required:true,
        enum: {
           values: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal'],
           message: 'Invalid payment method'
        }
    },
    buyCrypto: [
        {
            type: mongoose.Types.ObjectId,
            ref:'User'
        }
    ],
    owner: {
            type: mongoose.Types.ObjectId,
            ref:'User'
    }
         
})

const Crypto = mongoose.model('Crypto',cryptoSchema)

module.exports = Crypto