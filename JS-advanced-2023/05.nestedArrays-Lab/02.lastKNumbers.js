function lastKNumbers(n,k) {
    let arr = [1]
    
for(let i = 0; i < n-1; i++) {

    let count = 0;
    let sumK = 0;

    for(let j = arr.length-1; j >= 0; j--) {
        if(arr[j] !== undefined) {
            sumK += arr[j]
            count++
            
            if(count === k) {
                break;
            }
        }   
    }
        arr.push(sumK)
}
return arr;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8,2))