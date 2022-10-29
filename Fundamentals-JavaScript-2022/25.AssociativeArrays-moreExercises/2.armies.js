function armies(input) {
    let armies = {}

for(let text of input) {
    let leader = ''
    let armyName = ''
    let armyCount = ''

  if(text.includes('arrives')) {
    text = text.split(' arrives');
    leader = text[0]
    //console.log(leader);

    if(!armies.hasOwnProperty(leader)) {
        armies[leader] = {}
    }
  }

  else if(text.includes(':')) {
    text = text.split(': ')
    leader = text[0]
    let moreText = text[1].split(', ')
    armyName = moreText[0]
    armyCount = moreText[1]

    if(armies.hasOwnProperty(leader)) {
        if (!armies[leader][armyName]) {
            armies[leader][armyName] = 0;
          }
        armies[leader][armyName] += Number(armyCount)
    }
    //console.log(leader,armyName,armyCount)
  }

  else if(text.includes(' + ')) {
    text = text.split(' + ')
    armyName = text[0]
    armyCount = text[1]
    
    for (const leader in armies) {
        if (armies[leader].hasOwnProperty(armyName)) {
          armies[leader][armyName] += Number(armyCount);
        }
      }
   // console.log(armyName,armyCount);
  }

  else if(text.includes('defeated')) {
    text = text.split(' defeated')
    leader = text[0]
    if(armies.hasOwnProperty(leader)) {
        delete armies[leader]
    }
  }

}

let entriesOfObj = Object.entries(armies)
for(let [key,values] of entriesOfObj) {
    let total = 0;
  let keyValues = Object.entries(values)
  for(let [k,v] of keyValues) {
    total += v;
  }
  if(!armies[key].hasOwnProperty('totalCount')) {
    armies[key]['totalCount'] = total;
  }
}

 let entries = Object.entries(armies)
let sortByTotal = entries.sort((a,b) => b[1].totalCount - a[1].totalCount)
for(let [key,values] of sortByTotal) {
console.log(`${key}: ${armies[key].totalCount}`);

let innerEntries = Object.entries(values)
let sortEachArmy = innerEntries.sort((a,b) => b[1] - a[1])

for(let [innerKey,innerValue] of sortEachArmy) {
        if(innerKey !== 'totalCount') {
        console.log(`>>> ${innerKey} - ${innerValue}`);
        }
}
} 

}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])