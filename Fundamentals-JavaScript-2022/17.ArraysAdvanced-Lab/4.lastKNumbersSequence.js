
function sumLastKNumbersSequence(n, k) {
  let seq = [1]
    
    for (let current = 1; current < n; current++) {
        let sum = 0;
    let sequenceK = seq.slice(-k)
    for(el of sequenceK) {
        sum += el;
     
    }
    
    seq.push(sum)
    }
    console.log(seq.join(' '));
}       
      
sumLastKNumbersSequence(6,3)
sumLastKNumbersSequence(8,2)
sumLastKNumbersSequence(9,5)