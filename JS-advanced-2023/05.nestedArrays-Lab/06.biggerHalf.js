function biggerHalf(input) {
let sortAscending = input.sort((a,b) => a - b)

let halfArr = (sortAscending.length / 2)
let newArr = sortAscending.slice(halfArr)
return newArr
}

biggerHalf([3, 19, 14, 7, 2, 19, 6])
biggerHalf([4,7,2,5])