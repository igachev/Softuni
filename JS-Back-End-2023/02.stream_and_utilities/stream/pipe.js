const fs = require('fs')

const readStream = fs.createReadStream('./data.txt')
const writeStream = fs.createWriteStream('./data-copy.txt')

readStream.pipe(writeStream)

// pipe does the same thing which we did in readWriteStream.js
