class Stringer {
    constructor(innerString,innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    decrease(num) {
        this.innerLength -= num;
        if(this.innerLength < 0) {
            this.innerLength = 0
        }
    }

    increase(num) {
        this.innerLength += num;
        
    }

    toString() {
        let strLength = this.innerString.length;
        let initStr = this.innerString
        if(strLength === 0) {
            return '...'
        }
        else if(strLength > this.innerLength) {
            initStr = initStr.slice(0,this.innerLength)
            return initStr + '...'
        }
        return initStr
    }
}


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test