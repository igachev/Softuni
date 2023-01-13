function listProcessor(input) {
let arr = []
let objOfFunctions = {
    add:(str) => arr.push(str),
    remove:(str) => arr = arr.filter((word) => word !== str),
    print:() => console.log(arr.join(','))
}

input.forEach((text) => {
    let [command,value] = text.split(' ')
    objOfFunctions[command](value)
})
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])