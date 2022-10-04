function convertObject(json) {
    let object = JSON.parse(json)
    let keys = Object.keys(object)
    for(let key of keys) {
        console.log(`${key}: ${object[key]}`);
    }
    }
    
    convertObject('{"name": "George", "age": 40, "town": "Sofia"}')