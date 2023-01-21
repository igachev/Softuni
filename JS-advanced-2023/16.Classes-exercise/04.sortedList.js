class List {
 constructor() {
     this.arr = []
     this.size = this.arr.length;
 }

 add(num) {
    this.arr.push(num)
    this.size++
    this.arr.sort((a,b) => a - b)
 }

 get(index) {
    if(index >= 0 && index < this.size) {

  for(let i = 0; i < this.arr.length; i++) {
    if(i === index) {
        return this.arr[i]
    }
  }
}

else {
    throw new Error('invalid index')
} 

 }

 remove(index) {
   if(index >= 0 && index < this.size) {
    this.arr.splice(index,1)
    this.size--
    this.arr.sort((a,b) => a - b)
    return;
   }
   else {
    throw new Error('invalid index')
   }
 }


}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));