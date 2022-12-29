function stringLength(str1,str2,str3) {
let totalLength = str1.length + str2.length + str3.length;
console.log(totalLength);
let averageLength = totalLength / 3
console.log(Math.floor(averageLength));
}

stringLength('chocolate','ice cream','cake')