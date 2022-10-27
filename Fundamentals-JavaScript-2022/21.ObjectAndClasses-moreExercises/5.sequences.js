function sequences(input) {
let arrays = input.map((arr) => JSON.parse(arr))
arrays.forEach(eachArr => eachArr.sort((a, b) => b - a));

function isSame(arr1,arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
      }
      return true;
}


for(let i = 0; i < arrays.length; i++) {
for(let j = i+1; j < arrays.length; j++) {
    if(isSame(arrays[i],arrays[j])) {
        arrays.splice(j,1)
        j--
    }
}
}

let sortByLength = arrays.sort((a,b) => a.length - b.length)
for(let x = 0; x < sortByLength.length; x++) {
    let result = sortByLength[x];
    console.log(`[${result.join(', ')}]`);
}

}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])

sequences(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"])