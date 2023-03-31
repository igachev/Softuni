const fs = require('fs')

const readStream = fs.createReadStream('./data.txt', {encoding:'utf8'})

readStream.on('data',(chunk) => {
console.log('------------new chunk----------');
console.log(chunk);
})

readStream.on('close',() => {
    console.log('stream closed');
})