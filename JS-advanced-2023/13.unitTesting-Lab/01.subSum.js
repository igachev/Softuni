function sum(arr,startIndex,endIndex) {

if(Array.isArray(arr) == false) {
return NaN
}

if(startIndex < 0) {
    startIndex = 0
}

if(endIndex > arr.length-1) {
    endIndex = arr.length-1;
}

let rangeOfArr = arr.slice(startIndex,endIndex+1).map(Number)
let sumArr = rangeOfArr.reduce((all,curr) => {
  return  all + curr;
},0)

return sumArr
}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300))