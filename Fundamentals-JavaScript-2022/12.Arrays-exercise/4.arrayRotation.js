function rotation(arr,numOfRotations) {
while(numOfRotations > 0) {

    arr.push(arr[0])
    arr.shift()
    numOfRotations--;
}
console.log(arr);
}

rotation([51, 47, 32, 61, 21], 2)
rotation([2, 4, 15, 31], 5)

/* another way 
function arrayRotation(array,rotation) {
  for(let i = 0; i < rotation; i++) {
    let first = array.shift()
    array.push(first)
  }
  console.log(array.join(' '))
}
*/