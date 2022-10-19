function arrayModifier(input) {
let initialValues = input.shift()
initialValues = initialValues.split(' ').map(Number);
let index = 0;

while(input[index] !== 'end') {
    let text = input[index]
    let [command,index1,index2] = text.split(' ')
    index1 = Number(index1)
    index2 = Number(index2)
    
    
        switch(command) {
            case 'swap':
            swapElements(index1,index2)
            break;

            case 'multiply':
            multiply(index1,index2)
            break;

            case 'decrease':
            decrease()
            break;
        }
    
    

    index++
}
console.log(initialValues.join(', '));


function swapElements(i1,i2) {
    for(let i = 0; i < initialValues.length; i++) {
        if(i === i1) {
            let temp = initialValues[i]
            initialValues[i] = initialValues[i2]
            initialValues[i2] = temp;
            return initialValues
        } 
    }    
}

function multiply(i1,i2) {
    for(let i = 0; i < initialValues.length; i++) {
        if(i === i1) {
            let temp = initialValues[i]
            initialValues[i] = temp * initialValues[i2]
            return initialValues
        } 
    } 
}

function decrease() {
    initialValues = initialValues.map((number) => number - 1)
    return initialValues
}

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])