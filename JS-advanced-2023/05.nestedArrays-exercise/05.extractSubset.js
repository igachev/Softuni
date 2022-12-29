function extractSubset(input) {
    
    let arr = []
    let max = input[0]
    for(let i = 0; i < input.length; i++) {
       if(input[i] >= max) {
        max = input[i]
        arr.push(max)
       }
    }
    return arr;

}

console.log(extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]))

console.log(extractSubset([20, 
    3, 
    2, 
    15,
    6, 
1]))