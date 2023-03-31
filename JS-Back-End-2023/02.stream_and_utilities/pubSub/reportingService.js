const eventBus = require('./eventBus.js')

const collect = (data) => {
    console.log('reporting service = ' + data.method);
}

eventBus.subscribe('request',collect)