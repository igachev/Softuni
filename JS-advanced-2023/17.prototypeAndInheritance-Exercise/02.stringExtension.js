(function stringExtension() {
    String.prototype.ensureStart = function(str) {
        if(this.startsWith(str)) {
            return this.toString()
        }
        else {
            return str + this;
        }
    }
    
    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str)) {
            return this + str;
        }
        else {
            return this.toString()
        }
    }
    
    String.prototype.truncate = function (n) {          
        if (this.length <= n) {                          
            return this.toString();                     
        }

        if (n < 4) {                                    
            return ".".repeat(n);                       
        }

         else {                                        
            let lastIndex = this.substring(0, n - 2).lastIndexOf(" ");  
            if (lastIndex !== -1) {                         
                return this.substring(0, lastIndex) + "..."; 
            } else {                                        
                return this.substring(0, n - 3) + "...";    
            }
        }

    };
    
    String.prototype.isEmpty = function() {
        if(this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    
    String.format = function(str, ...params) {
    let text = str.split(' ')
    for(let i = 0; i < text.length; i++) {
        let replaceRegex = /\{\d+\}/g
        if(replaceRegex.test(text[i]) && params.length !== 0) {
            text[i] = params.shift()
        }
    }
    return text.join(' ');
    }
    })()



let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');