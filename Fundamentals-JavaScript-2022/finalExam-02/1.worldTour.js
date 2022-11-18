function worldTour(input) {
let index = 0;
let currentDestinations = input.shift()


while(input[index] !== 'Travel') {
let [command,indexOrOldString,newStringOrIndex] = input[index].split(':')
switch(command) {
    case 'Add Stop':
        addStop(indexOrOldString,newStringOrIndex)
    break;

    case 'Remove Stop':
        removeStop(indexOrOldString,newStringOrIndex)
    break;

    case 'Switch':
        switchDestination(indexOrOldString,newStringOrIndex)
    break;
}
    index++
}

console.log(`Ready for world tour! Planned stops: ${currentDestinations}`);

function addStop(index,string) {
index = Number(index)
if(currentDestinations[index] !== undefined) {
currentDestinations = currentDestinations.slice(0,index) + string + currentDestinations.slice(index)
}
console.log(currentDestinations);
}

function removeStop(startIndex,endIndex) {
startIndex = Number(startIndex)
endIndex = Number(endIndex)
if(currentDestinations[startIndex] !== undefined &&
    currentDestinations[endIndex] !== undefined) {
        currentDestinations = currentDestinations.slice(0,startIndex) + currentDestinations.slice(endIndex+1)  
    }
    console.log(currentDestinations);
}

function switchDestination(oldString,newString) {
      
      if(currentDestinations.includes(oldString)) {
        currentDestinations = currentDestinations.replace(oldString,newString)
      }
      console.log(currentDestinations);
}
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])