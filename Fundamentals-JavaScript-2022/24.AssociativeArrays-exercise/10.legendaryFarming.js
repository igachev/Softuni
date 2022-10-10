function legendaryFarming(input) {
    let materials = {}
    
    materials['keyElements'] = {
        'shards':0,
        'motes':0,
        'fragments':0
    }
    
    materials['junk'] = {}
    let splitBySpace = input.split(' ')
    let winner = ''
    
    for(let i = 0; i < splitBySpace.length; i += 2) {
        let quantity = Number(splitBySpace[i])
        let element = splitBySpace[i+1].toLowerCase()
    
        
    
        
            if(materials['keyElements'].hasOwnProperty(element)) {
                let currentQuantity = materials['keyElements'][element]
                currentQuantity += quantity
                materials['keyElements'][element] = currentQuantity
            }
        
    
       
            if(element !== 'shards' && element !== 'motes' && 
            element !== 'fragments') {
                if(!materials['junk'].hasOwnProperty(element)) {
                    materials['junk'][element] = quantity
                }
                else {
                    let currentQuantity = materials['junk'][element]
                    currentQuantity += quantity
                    materials['junk'][element] = currentQuantity
                }
            }
        
    
            if(materials['keyElements']['shards'] >= 250 ) {
                winner = 'Shadowmourne';
                let currentQuantity = materials['keyElements']['shards']
                let remaining = currentQuantity - 250;
                materials['keyElements']['shards'] = remaining
                    break;
                }
        
           else if(materials['keyElements']['fragments'] >= 250 ) {
                winner = 'Valanyr';
                let currentQuantity = materials['keyElements']['fragments']
                let remaining = currentQuantity - 250;
                materials['keyElements']['fragments'] = remaining
                break;
            }
        
            else if(materials['keyElements']['motes'] >= 250) {
                winner = 'Dragonwrath';
                let currentQuantity = materials['keyElements']['motes']
                let remaining = currentQuantity - 250;
                materials['keyElements']['motes'] = remaining
                break;
            }
    
    }
    
    console.log(`${winner} obtained!`);
    let entriesOfKey = Object.entries(materials['keyElements'])
    let sortEntriesOfKey = entriesOfKey.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    for(let [key,value] of sortEntriesOfKey) {
        console.log(`${key}: ${value}`);
    }
    
    let entriesOfJunk = Object.entries(materials['junk'])
    let sortEntriesOfJunk = entriesOfJunk.sort((a,b) => a[0].localeCompare(b[0]))
    for(let [key,value] of sortEntriesOfJunk) {
        console.log(`${key}: ${value}`);
    }
    
    }
    
    legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
    legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')