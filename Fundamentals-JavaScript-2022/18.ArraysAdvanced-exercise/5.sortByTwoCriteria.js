function sortArr(input) {
let a = input.sort((a,b) => {
   return  a.length - b.length || a.localeCompare(b)
})
console.log(a.join('\n'));
}

sortArr(['alpha',

'beta',

'gamma'])

sortArr(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])