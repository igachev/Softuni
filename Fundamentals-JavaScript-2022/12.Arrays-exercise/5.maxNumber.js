function maxNumber(input) { 
  let arr = []
  let countIfLarger = 0;
  
  for(let i = 0; i < input.length; i++) {
    
    for(let j = 1; j < input.length; j++) {
      if(input[i] > input[j]) {
        countIfLarger++
      }
      else {
       countIfLarger = 0
      } 
    }

    let rightSideLength = i;
    if(countIfLarger === input.length-1 - rightSideLength) {
      arr.push(input[i])
    }
  }
  
  console.log(arr.join(' '))
}

maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
maxNumber([1, 4, 3, 2])

