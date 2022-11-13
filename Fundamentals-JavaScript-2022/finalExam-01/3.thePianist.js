function thePianist(input) {
    let initialPieces = Number(input.shift())
    let index = 0;
    let collection = {}
    
    for(let i = 0; i < initialPieces; i++) {
        let [piece,composer,key]= input.shift().split('|')
        collection[piece] = {composer:composer,key:key}
    }
    
    while(input[index] !== 'Stop') {
        let pieces = input[index]
        let [command,piece,composer,key] = pieces.split('|')
        
        switch(command) {
            case 'Add':
                add(piece,composer,key)
                break;
    
            case 'Remove':
                remove(piece)
                break;
    
            case 'ChangeKey':
                changeKey(piece,composer)
                break;
        }
        index++
    }
    
    function add(piece,composer,key) {
        if(!collection.hasOwnProperty(piece)) {
            collection[piece] = {composer:composer,key:key}
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
        else {
            console.log(`${piece} is already in the collection!`);
        }
        //return collection
    }
    
    function remove(piece) {
        if(collection.hasOwnProperty(piece)) {
            delete collection[piece]
            console.log(`Successfully removed ${piece}!`);
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
       // return collection
    }
    
    function changeKey(piece,newKey) {
        if(collection.hasOwnProperty(piece)) {
            collection[piece].key = newKey
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }
        else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
        //return collection
    }
    
    let entries = Object.entries(collection)
    for(let [key,value] of entries) {
        console.log(`${key} -> Composer: ${value.composer}, Key: ${value.key}`);
    }
    }

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])