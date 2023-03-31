const fs = require('fs')
const fsp = require('fs/promises')

// synchronous reading from a file
const text = fs.readFileSync('./data.txt', {encoding: 'utf-8'})
console.log('read from file');
console.log(text);

// async reading from a file
 fs.readFile('./data.txt', {encoding: 'utf-8'}, (err,data) => {
if(err) {
    return;
}

console.log(data);
})

console.log('READ FROM FILE');

// async reading with promises
fsp.readFile('./data.txt',{encoding:'utf-8'})
.then((result) => {
    console.log(result);
})

