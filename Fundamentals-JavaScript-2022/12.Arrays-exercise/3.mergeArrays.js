function merge(arr1,arr2) {
    let newArr = [];

for(let i = 0; i < arr1.length; i++) {
if(i % 2 === 0) {
    let even = Number(arr1[i]) + Number(arr2[i])
    newArr.push(even)
}
else {
    let odd = arr1[i] + arr2[i]
    newArr.push(odd)
}
}
let thirdArr = newArr.join(' - ')
console.log(thirdArr);
}

merge(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])