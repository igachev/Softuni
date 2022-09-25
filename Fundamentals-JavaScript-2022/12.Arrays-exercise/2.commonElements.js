function commonElements(arr1,arr2) {
for(let first = 0; first < arr1.length; first++) {
    
        if(arr2.indexOf(arr1[first]) !== -1) {
            console.log(arr1[first]);
        }
    
}
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l'])