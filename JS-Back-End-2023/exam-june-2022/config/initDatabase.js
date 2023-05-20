const mongoose = require('mongoose')
const constants = require('./constants.js')

async function initDatabase() {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(constants.DB_URI)
        console.log('DB connected...');
    } catch (error) {
        console.log(error);
    }
}

module.exports = initDatabase