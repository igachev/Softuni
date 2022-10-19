function movingTarget(input) {
let index = 0;
let targets = input.shift().split(' ').map(Number)

while(input[index] !== 'End') {
    let text = input[index]
    let [command,number1,number2] = text.split(' ')
    number1 = Number(number1)
    number2 = Number(number2)

    switch(command) {
        case 'Shoot':
        shootTarget(number1,number2)
        break;

        case 'Add':
        add(number1,number2)
        break;

        case 'Strike':
        strike(number1,number2)
        break;
    }

    index++
}
console.log(targets.join('|'));

function shootTarget(index,power) {
    for(let i = 0; i < targets.length; i++) {
        if(i === index) {
            targets[i] -= power;
            if(targets[i] <= 0) {
                targets.splice(i,1)
            }
        }
       
    }
    return targets;
}

function add(index,value) {
    if(index < targets.length && index >= 0) {
        targets.splice(index,0,value)
    }
    else {
        console.log('Invalid placement!');
    }
}

function strike(index,radius) {
    if(index-radius >= 0 && index+radius+1 < targets.length) {
       let firstRange = targets.slice(0,index-radius)
       let secondRange = targets.slice(index+radius+1,targets.length)
       let combine = firstRange.concat(secondRange);
       targets = combine;
       return targets
    }
    else {
        console.log('Strike missed!');
        
    }
}

}

movingTarget(["52 74 23 44 96 110",
"Shoot 5 10",
"Shoot 1 80",
"Strike 2 1",
"Add 22 3",
"End"])

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])