function distinctArray(input) {
    let uniqueValues = input.filter((num,index,array) => {
       return array.indexOf(num) === index;
    })
    console.log(uniqueValues.join(' '));
    }
    
    distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])

// another solution
/*function distinct(input) {
for(let i = 0; i <input.length; i++) {
    for(let j = i+1; j < input.length; j++) {
        if(input[i] === input[j]) {
            input.splice(j,1)
        }
    }
}
console.log(input.join(' '));
}

distinct([7, 8, 9, 7, 2, 3,

    4, 1, 2]) */