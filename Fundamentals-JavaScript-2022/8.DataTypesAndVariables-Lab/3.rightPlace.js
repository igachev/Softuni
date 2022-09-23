function right(string1,char,string2) {

      let newStr =  string1.replace('_',char)
        
        if(newStr === string2) {
            console.log('Matched');
        }
        else {
            console.log('Not Matched');
        }

}

right('Str_ng','I','Strong')
right('Str_ng','i','String')