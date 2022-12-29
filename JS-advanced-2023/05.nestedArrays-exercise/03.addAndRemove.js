function addAndRemoveElements(input) {
let arr = []
let initialNumberValue = 1
for(let i = 0; i < input.length; i++) {

    if(input[i] === 'add') {
        arr.push(initialNumberValue)
        initialNumberValue++
    }

    else if(input[i] === 'remove') {
        arr.pop()
        initialNumberValue++
    }


}

if(arr.length > 0) {
    console.log(arr.join('\n'));
}
else {
    console.log('Empty');
}
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add'])

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add'])

addAndRemoveElements(['remove', 
'remove', 
'remove'])