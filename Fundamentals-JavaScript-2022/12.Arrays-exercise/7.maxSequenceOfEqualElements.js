function sequence(input) {
let count = 1;
let longestCount = 1;
let currentEquals = input[0];
let result = ''

  for(let i = 1; i < input.length; i++) {
    if(input[i] === input[i-1]) {
        count++;
        
    }
    else {
        count = 1;
    }

    if(count > longestCount) {
        currentEquals = input[i]
        longestCount = count;
      }

  }

  for(let x = 0; x < longestCount; x++) {
    result += currentEquals + ' '
  }

  console.log(result);
}

sequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
sequence([1, 1, 1, 2, 3, 1, 3, 3])
sequence([4, 4, 4, 4])
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3])