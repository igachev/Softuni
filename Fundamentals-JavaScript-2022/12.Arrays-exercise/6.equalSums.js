function equalSums(input) {
    let sumLeftSide = 0;
    let sumRightSide = 0;
  
    
    for(let i = 0; i < input.length; i++) {
     for(let j = 0; j < input.length; j++) {

        if(j < i) {
            sumLeftSide += input[j]
        }
        else if(j > i) {
            sumRightSide += input[j]
        }

     }
    // console.log(sumLeftSide,sumRightSide)
     if(sumLeftSide === sumRightSide) {
        console.log(i)
        return;
     }
     sumLeftSide = 0;
     sumRightSide = 0;
    }
    
    console.log('no')
  }
  
  equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])
  equalSums([1, 2, 3, 3])
  equalSums([1, 2, 3])
  equalSums([1])