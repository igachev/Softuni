function argumentInfo(...args) {
let result = {}

for(let arg of args) {
let type = typeof arg
console.log(`${type}: ${arg}`);

if(!result.hasOwnProperty(type)) {
    result[type] = 0
}

result[type] = result[type] + 1;
}

let entries = Object.entries(result)
let sortDescending = entries.sort((a,b) => b[1] - a[1])
for(let [k,v] of sortDescending) {
    console.log(`${k} = ${v}`);
}
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })
