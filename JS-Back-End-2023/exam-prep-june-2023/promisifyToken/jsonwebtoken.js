const token = require('jsonwebtoken')
const util = require('util')

const jwt = {
    sign: util.promisify(token.sign),
    verify: util.promisify(token.verify)
}

module.exports = jwt