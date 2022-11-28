function passwordReset(input) {
let text = input.shift()
let index = 0;

while(input[index] !== 'Done') {
    let [command,indexOrString,lengthOrReplacement] = input[index].split(' ')
    switch(command) {
        case 'TakeOdd':
            takeOdd()
            break;

        case 'Cut':
            cut(indexOrString,lengthOrReplacement)
            break;

        case 'Substitute':
            substitute(indexOrString,lengthOrReplacement)
            break;
    }
    index++
}

console.log(`Your password is: ${text}`);

function takeOdd() {
    let newStr = ''
    for(let i = 1; i < text.length; i=i+2) {
        newStr += text[i]
    } 
    text = text.replace(text,newStr)
    console.log(text);
}

function cut(position,length) {
position = Number(position)
length = Number(length)
let selectedText = text.substring(position,position+length)
text = text.replace(selectedText,'')
console.log(text);
}

function substitute(substr,replacement) {
    if(text.includes(substr)) {
        let occurance = text.indexOf(substr)
        while(occurance !== -1) {
            text = text.replace(substr,replacement)
            occurance = text.indexOf(substr,occurance+1)
        }
        console.log(text);
    }

    else {
        console.log('Nothing to replace!');
    }
}
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]
)