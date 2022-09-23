function equalArrays(arr1,arr2) {
    arr1 = arr1.map((num) => Number(num))
    arr2 = arr2.map((num) => Number(num))
    let sumOfArr1 = 0;
    let isEqual;
    let atIndex;
    
  for(let i = 0; i < arr1.length; i++) {
   if(arr2.indexOf(arr1[i]) !== -1) {
     sumOfArr1 += arr1[i]
     isEqual = true;
   }
   else {
     isEqual = false;
     atIndex = i;
     break;
   }
  }
  
  if(isEqual) {
    console.log(`Arrays are identical. Sum: ${sumOfArr1}`)
  }
  else {
    console.log(`Arrays are not identical. Found difference at ${atIndex} index`)
  }
  
 }
 
 equalArrays(['10','20','30'], ['10','20','30'])
 equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
 equalArrays(['1'], ['10'])