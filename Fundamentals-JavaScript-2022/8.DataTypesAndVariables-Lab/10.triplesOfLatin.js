function triples(n) {
    let num = Number(n)
    let firstLetter = ''
    let secondLetter = ''
    let thirdLetter = ''

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        for(let k = 0; k < n; k++) {
            firstLetter = String.fromCharCode(97+i);
            secondLetter = String.fromCharCode(97+j);
            thirdLetter = String.fromCharCode(97+k);
            console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
        }
    }
}
}

triples('3')