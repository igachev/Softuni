let nums = [5,10,15,20,25,30]
let mid = nums.splice(2,3)
console.log(mid.join('|'));
console.log(nums.join('|'));

 nums = [5,10,15,20,25,30]
nums.splice(3,2,'twenty','twenty-five')
console.log(nums.join('|'));
