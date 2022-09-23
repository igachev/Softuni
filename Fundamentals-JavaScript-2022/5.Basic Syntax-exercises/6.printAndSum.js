function printAndSum(start,end) {
    let sum = 0;
    let result = ''
    for(let i = start; i <= end; i++) {
      result += i + ' '
      sum += i;
    }
    console.log(result)
    console.log(`Sum: ${sum}`)
  }
  
  printAndSum(5,10)