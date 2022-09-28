function processOddNumbers(input) {
    let filterOdd = input.filter((num,index) => {
        if(index % 2 !== 0) {
            return num;
        }
    })
    
    let multiplyByTwo = filterOdd.map((num) => {
        return num * 2;
    })
    
    console.log(reverse(multiplyByTwo))
    
    function reverse(arr) {
        let result = ''
    for(let i = arr.length-1; i >= 0; i--) {
    result += arr[i] + ' '
    }
    return result;
    }
    
    }
    
    processOddNumbers([10, 15, 20, 25])