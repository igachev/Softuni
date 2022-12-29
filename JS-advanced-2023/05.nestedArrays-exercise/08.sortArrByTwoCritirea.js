function sortArrayByTwoCritirea(input) { 
let sortArr = input.sort((a,b) => a.toLowerCase().length - b.toLowerCase().length || 
a.toLowerCase().localeCompare(b.toLowerCase()))

for(let word of sortArr) {
    console.log(word);
}
}

sortArrayByTwoCritirea(['test', 
'Deny', 
'omen', 
'Default'])