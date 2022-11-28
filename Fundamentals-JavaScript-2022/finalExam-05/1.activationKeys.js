function activationKeys(input) {
let activationKey = input.shift()
let index = 0;

while(input[index] !== 'Generate') {
    let text = input[index]
    let [command,item1,item2,item3] = text.split('>>>')

    switch(command) {
        case 'Slice':
        sliceChars(item1,item2)
        break;

        case 'Flip':
            flip(item1,item2,item3)
        break;

        case 'Contains':
        containsStr(item1)
        break;
    }
    index++
}

console.log(`Your activation key is: ${activationKey}`);

function sliceChars(startIndex,endIndex) {
    startIndex = Number(startIndex)
    endIndex = Number(endIndex)
    activationKey = activationKey.slice(0,startIndex) + activationKey.slice(endIndex)
    console.log(activationKey)
}

function flip(upperLower,startIndex,endIndex) {
    startIndex = Number(startIndex)
    endIndex = Number(endIndex)
    let subStr = activationKey.slice(startIndex,endIndex)
    if(upperLower === 'Upper') {
        activationKey = activationKey.replace(subStr,subStr.toUpperCase())
    }
    else {
        activationKey = activationKey.replace(subStr,subStr.toLowerCase())
    }
    console.log(activationKey);
}

function containsStr(str) {
    if(activationKey.includes(str)) {
        console.log(`${activationKey} contains ${str}`);
    }
    else {
        console.log('Substring not found!');
    }
}
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])