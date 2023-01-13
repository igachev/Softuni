function cars(input) {
const data = {}

const createAndModify = {
    create:(name,inherits,parent) => data[name] = inherits ? Object.create(data[parent]) : {},
    set:(name,key,value) => data[name][key] = value,
    print:(name) => {
        const entry = []
        for(const key in data[name]) {
            entry.push(`${key}:${data[name][key]}`)
        }
        console.log(entry.join(','));
    }
}

input.forEach((text) => {
    const [command,name,key,value] = text.split(' ')
    createAndModify[command](name,key,value)
})
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])