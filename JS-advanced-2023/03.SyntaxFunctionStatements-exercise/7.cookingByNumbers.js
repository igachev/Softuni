function cookingByNumbers(number,op1,op2,op3,op4,op5) {
number = Number(number)
operation(op1)
operation(op2)
operation(op3)
operation(op4)
operation(op5)

function operation(str) {
    if(str === 'chop') {
     number = number / 2
     console.log(number);
    }
    else if(str === 'dice') {
    number = Math.sqrt(number)
    console.log(number);
    }
    else if(str === 'spice') {
        number = number + 1
        console.log(number);
    }
    else if(str === 'bake') {
        number *= 3
        console.log(number);
    }
    else if(str === 'fillet') {
        let twentyPercentage = (20/100) * number;
        number = number - twentyPercentage
        console.log(number);
        }
}
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')