function sorting(input) {
    let arr = []
   
 let sorted = input.sort((a,b) => a-b)
    while(sorted.length !== 0) {
        arr.push( sorted.pop())
        arr.push( sorted.shift())
    }
    
 console.log(arr.join(' '));
 
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])