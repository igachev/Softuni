function replaceRepeatingChars(str) {
   let index = 0;
   let uniqueChars = ''
   
   while(index < str.length) {
   if(str[index] !== str[index+1]) {
       uniqueChars += str[index]
   }
   index++
   }
   console.log(uniqueChars);
   }
   
   replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
   replaceRepeatingChars('qqqwerqwecccwd')