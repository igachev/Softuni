const fs = require('fs')

const writeStream = fs.createWriteStream('./output.txt',{encoding:'utf-8'})

const chunk1 = 'Pesho'
const chunk2 = 'Gosho'
const chunk3 = 'Stamat'

writeStream.write(chunk1 + '\n')
writeStream.write(chunk2 + '\n')
writeStream.write(chunk3 + '\n')

writeStream.on('close', () => {
    console.log('closing');
})

writeStream.end()
