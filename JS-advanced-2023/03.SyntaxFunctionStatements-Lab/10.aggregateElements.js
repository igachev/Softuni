function aggregateElements(input) {

    aggregate(input,0,(a,b) => a + b)
    aggregate(input,0,(a,b) => a + 1/b)
    aggregate(input,'',(a,b) => a.concat(b))

    function aggregate(arr,initValue,func) {
        let val = initValue;
        for(let i = 0; i < arr.length; i++) {
             val = func(val,arr[i])
        }
        console.log(val);
    }
}

aggregateElements([1, 2, 3])