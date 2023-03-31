const eventBus = require('./eventBus.js')

const log = (data) => {
console.log(`Logger: ${data.url}`);
}

eventBus.subscribe('request', log)