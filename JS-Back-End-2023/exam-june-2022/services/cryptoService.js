const Crypto = require('../models/Crypto.js')

exports.create = async (data,userId) => {
const crypto = await Crypto.create({...data, owner:userId})
return crypto
}

exports.getAll = async () => {
    const crypto = await Crypto.find({}).lean()
    return crypto;
}

exports.getOne = async (cryptoId) => {
    const crypto = await Crypto.findById(cryptoId).lean()
    return crypto
}

exports.buy = async (cryptoId,userId) => {
    const crypto = await Crypto.findById(cryptoId)
    crypto.buyCrypto.push(userId)
    await crypto.save()
}

exports.delete = async (cryptoId) => {
    const crypto = await Crypto.findByIdAndDelete(cryptoId)
    return crypto
}

exports.edit = async (cryptoId,data) => {
    const crypto = await Crypto.findByIdAndUpdate(cryptoId,data,{runValidators:true})
    return crypto
}

exports.search = async (searchValue,paymentMethod) => {
    let query =  Crypto.find({});

    if (searchValue) {
      const regex = new RegExp(searchValue, 'i');
      query = query.where('name', regex);
    }
  
    if (paymentMethod) {
      const regex = new RegExp(paymentMethod, 'i');
      query = query.where('paymentMethod', regex);
    }
  
    const filteredCrypto = await query.lean();
    return filteredCrypto;
}