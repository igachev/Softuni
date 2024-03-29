const mongoose = require('mongoose')
const constants = require('./constants.js')

async function initDatabase() {
    mongoose.set('strictQuery',false)
    await mongoose.connect(constants.DB_URI)
    console.log('db connected..');
}

module.exports = initDatabase