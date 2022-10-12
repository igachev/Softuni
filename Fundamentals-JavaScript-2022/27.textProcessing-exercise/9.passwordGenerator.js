function passwordGenerator(input) {
    let firstString = input.shift()
    let secondString = input.shift()
    let word = input.shift().toUpperCase()
    let index = 0;
let newStr = firstString.concat(secondString).split('')

for(let i = 0; i < newStr.length; i++) {

    if(newStr[i] === 'a' || newStr[i] === 'i' ||
        newStr[i] === 'e' || newStr[i] === 'u' ||
        newStr[i] === 'o') {
            newStr[i] = word[index]
            index++
            if(index === word.length) {
                index = 0;
            }
        }

}

let password = newStr.reverse().join('')
console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ])