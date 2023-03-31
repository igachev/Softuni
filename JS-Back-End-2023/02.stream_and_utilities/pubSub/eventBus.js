const events = {}

function subscribe(eventName,callback) {
if(!events[eventName]) {
    events[eventName] = []
}

events[eventName].push(callback)
}

function publish(eventName,data) {
    if(!events[eventName]) {
        events[eventName] = []
    }
   
    events[eventName].forEach((callback) => {
        return callback(data)
    })
}

const eventBus = {
    subscribe,
    publish
}

module.exports = eventBus