function moveElements(input) {
    let arr = []
 for(let n of input) {
    if(Number(n) < 0) {
        arr.unshift(Number(n))
    }
    else if(Number(n) >= 0){
        arr.push(Number(n))
    }
}
console.log(arr.join('\n'));
}

moveElements(['7', '-2', '8', '9'])
moveElements(['3', '-2', '0', '-1'])