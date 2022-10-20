function treasureHunt(input) {
let treasureChest = input.shift().split('|')
let index = 0;

while(input[index] !== 'Yohoho!') {
    let text = input[index].split(' ')
    let command = text.shift()
    let items = text
    
    switch(command) {
        case 'Loot':
        loot(items)
        break;

        case 'Drop':
        drop(items[0])
        break;

        case 'Steal':
        steal(items[0])
        break;
    }

    index++
}

averageTreasureGain()

function loot(items) {
for(let i = 0; i < items.length; i++) {
    if(!treasureChest.includes(items[i])) {
        treasureChest.unshift(items[i])
    }
}
return treasureChest
}

function drop(items) {
    let position = parseInt(items)

   if(position >= 0 && position < treasureChest.length) {

    for(let i = 0; i < treasureChest.length; i++) {
        if(position === i) {
            let item = treasureChest[i]
            treasureChest.splice(i,1)
            treasureChest.push(item)
            return treasureChest
        }
    }
   }
}

function steal(items) {
    let countStolen = Number(items)
    let stolen = treasureChest.slice(-countStolen)
    console.log(stolen.join(', '));
    for(let i = 0; i < countStolen; i++) {
        treasureChest.splice(treasureChest.length-1,1)
    }
}

function averageTreasureGain() {
    if(treasureChest.length === 0) {
        console.log("Failed treasure hunt.");
        return;
    }
    let sumWordLengths = 0;
    for(let i = 0; i < treasureChest.length; i++) {
        let wordLength = treasureChest[i].length;
        sumWordLengths += wordLength
    }
    let treasureGain = sumWordLengths / treasureChest.length;
    console.log(`Average treasure gain: ${treasureGain.toFixed(2)} pirate credits.`);
}

}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
"Loot Wood Gold Coins",
"Loot Silver Pistol",
"Drop 3",
"Steal 3",
"Yohoho!"])

treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])