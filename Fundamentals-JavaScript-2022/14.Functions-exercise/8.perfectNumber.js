function perfectNumber(n) {
let sum = 0;
    for(let i = n-1; i > 0; i--) {
        if(n%i === 0) {
           sum += i;
        }
    }

    if(sum === n) {
        console.log('We have a perfect number!');
    }
    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)