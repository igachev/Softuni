function condense(input) {
    let nums = input;

    if(nums.length === 1) {
        console.log(`${nums[0]}`);
        return;
    }
   
while(nums.length > 1) {
    let arr = new Array(nums.length-1);
    for(let i = 0; i < arr.length; i++) {
            arr[i] = nums[i] + nums[i+1]  
    }
    nums = arr
    
}

    console.log(nums.join(''));
}

condense([2,10,3])
condense([5,0,4,1,2])
condense([1])