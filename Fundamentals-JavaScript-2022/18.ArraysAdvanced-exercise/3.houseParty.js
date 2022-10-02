function houseParty(input) {
  let arr = []
for(let i = 0; i < input.length; i++) {
  let [name,is,notOrGoing] = input[i].split(' ')
  switch(notOrGoing) {
      case 'going!':
      addPerson(name)
      break;

      case 'not':
      removePerson(name)
      break;
  }
}

function addPerson(person) {
  if(arr.indexOf(person) === -1) {
      arr.push(person)
  }
  else {
      console.log(`${person} is already in the list!`)
  }
}

function removePerson(person) {
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === person) {
          arr.splice(i,1)
          return;
      }
  }
  console.log(`${person} is not in the list!`)
}

console.log(arr.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',

'Jerry is going!'])

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']) 